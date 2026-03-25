"use client";

import Image from "next/image";
import { useBtcPrice } from "@/hooks/useBtcPrice";

interface SatPriceProps {
  priceEur: number;
  priceEur2?: number; // for a range display
  large?: boolean;    // large display on product detail page
}

export default function SatPrice({ priceEur, priceEur2, large }: SatPriceProps) {
  const btc = useBtcPrice();

  if (!btc) {
    // Fallback: show EUR while loading
    const fallback = priceEur2 ? `€${priceEur} – €${priceEur2}` : `€${priceEur}`;
    return (
      <span className={large ? "text-[#6b7280] text-base" : "text-[#6b7280] text-xs"}>
        {fallback}
      </span>
    );
  }

  const sats1 = Math.round((priceEur / btc.eur) * 1e8);
  const sats2 = priceEur2 ? Math.round((priceEur2 / btc.eur) * 1e8) : null;

  const usd1 = Math.round(priceEur * (btc.usd / btc.eur));
  const usd2 = priceEur2 ? Math.round(priceEur2 * (btc.usd / btc.eur)) : null;

  const SatSymbol = () => (
    <Image src="/images/sat-symbol.png" alt="sat" width={10} height={14} className="inline-block opacity-70" />
  );

  const satsLabel = sats2
    ? <><SatSymbol /> {sats1.toLocaleString()} – {sats2.toLocaleString()}</>
    : <><SatSymbol /> {sats1.toLocaleString()}</>;

  const usdLabel = usd2 ? `$${usd1} – $${usd2}` : `$${usd1}`;

  if (large) {
    return (
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-[28px] font-bold text-[#111518] flex items-center gap-1.5">{satsLabel}</span>
        <span className="text-[#6b7280] text-base">{usdLabel}</span>
      </div>
    );
  }

  return (
    <span className="flex items-baseline gap-1.5 flex-wrap">
      <span className="font-semibold text-[#111518] text-sm flex items-center gap-1">{satsLabel}</span>
      <span className="text-[#6b7280] text-xs">{usdLabel}</span>
    </span>
  );
}
