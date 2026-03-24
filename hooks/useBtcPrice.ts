import { useState, useEffect } from "react";

// Module-level cache — fetches once per session, shared across all SatPrice instances
let _cache: number | null = null;
let _fetching = false;
const _listeners: ((p: number) => void)[] = [];

function fetchPrice() {
  if (_fetching) return;
  _fetching = true;
  fetch("https://mempool.space/api/v1/prices")
    .then((r) => r.json())
    .then((d) => {
      _cache = d.EUR as number;
      _listeners.forEach((fn) => fn(d.EUR));
      _listeners.length = 0;
    })
    .catch(() => {
      _fetching = false;
    });
}

export function useBtcPrice(): number | null {
  const [price, setPrice] = useState<number | null>(_cache);
  useEffect(() => {
    if (_cache) {
      setPrice(_cache);
      return;
    }
    _listeners.push(setPrice);
    fetchPrice();
    return () => {
      const i = _listeners.indexOf(setPrice);
      if (i > -1) _listeners.splice(i, 1);
    };
  }, []);
  return price;
}
