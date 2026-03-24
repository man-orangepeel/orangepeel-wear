"use client";

import { useBtcPrice } from "@/hooks/useBtcPrice";

interface SatPriceProps {
  priceEur: number;
  priceEur2?: number; // for a range display
  large?: boolean;    // large display on product detail page
}

export default function SatPrice({ priceEur, priceEur2, large }: SatPriceProps) {
  const btcEur = useBtcPrice();

  if (!btcEur) {
    // Fallback: show EUR only while loading
    const fallback = priceEur2 ? `€${priceEur} – €${priceEur2}` : `€${priceEur}`;
    return (
      <span className={large ? "text-[#6b7280] text-base" : "text-[#6b7280] text-xs"}>
        {fallback}
      </span>
    );
  }

  const sats1 = Math.round((priceEur / btcEur) * 1e8);
  const sats2 = priceEur2 ? Math.round((priceEur2 / btcEur) * 1e8) : null;

  const satsLabel = sats2
    ? `≋ ${sats1.toLocaleString()} – ${sats2.toLocaleString()}`
    : `≋ ${sats1.toLocaleString()}`;
  const eurLabel = priceEur2 ? `€${priceEur} – €${priceEur2}` : `€${priceEur}`;

  if (large) {
    return (
      <div className="flex items-baseline gap-3 flex-wrap">
        <span className="text-[28px] font-bold text-[#111518]">{satsLabel}</span>
        <span className="text-[#6b7280] text-base">{eurLabel}</span>
      </div>
    );
  }

  return (
    <span className="flex items-baseline gap-1.5 flex-wrap">
      <span className="font-semibold text-[#111518] text-sm">{satsLabel}</span>
      <span className="text-[#6b7280] text-xs">{eurLabel}</span>
    </span>
  );
}
