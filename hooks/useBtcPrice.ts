import { useState, useEffect } from "react";

export interface BtcPrices {
  eur: number;
  usd: number;
}

// Module-level cache — fetches once per session, shared across all SatPrice instances
let _cache: BtcPrices | null = null;
let _fetching = false;
const _listeners: ((p: BtcPrices) => void)[] = [];

function fetchPrice() {
  if (_fetching) return;
  _fetching = true;
  fetch("https://mempool.space/api/v1/prices")
    .then((r) => {
      if (!r.ok) throw new Error(`HTTP ${r.status}`);
      return r.json();
    })
    .then((d) => {
      _cache = { eur: d.EUR as number, usd: d.USD as number };
      _listeners.forEach((fn) => fn(_cache!));
      _listeners.length = 0;
    })
    .catch(() => {})
    .finally(() => {
      _fetching = false;
    });
}

export function useBtcPrice(): BtcPrices | null {
  const [prices, setPrices] = useState<BtcPrices | null>(_cache);
  useEffect(() => {
    if (_cache) {
      setPrices(_cache);
      return;
    }
    _listeners.push(setPrices);
    fetchPrice();
    return () => {
      const i = _listeners.indexOf(setPrices);
      if (i > -1) _listeners.splice(i, 1);
    };
  }, []);
  return prices;
}
