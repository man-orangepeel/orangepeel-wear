"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product, ProductColor } from "@/lib/products";
import AddToCart from "./AddToCart";
import SatPrice from "@/components/SatPrice";
import ShareButton from "@/components/ShareButton";
import { COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import Link from "next/link";

const STANDARDS = [
  {
    label: "GOTS Certified",
    desc: "Global Organic Textile Standard",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    label: "OEKO-TEX®",
    desc: "Tested for harmful substances",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "BTC Payments",
    desc: "Onchain & Lightning Network",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
      </svg>
    ),
  },
  {
    label: "Privacy First",
    desc: "Discreet packaging, no data harvesting",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

export default function ProductLayout({ product }: { product: Product }) {
  const defaultColor = product.colors[0];
  const [selectedColor, setSelectedColor] = useState<ProductColor>(defaultColor);
  const [mainSrc, setMainSrc] = useState(`/images/products/${defaultColor.src}`);

  const thumbs = [
    ...product.colors.map((c) => ({
      src: `/images/products/${c.src}`,
      label: c.name,
      color: c as ProductColor | null,
    })),
    {
      src: `/images/designs/${product.designSrc}`,
      label: "Design",
      color: null as ProductColor | null,
    },
  ];

  function handleColorChange(color: ProductColor) {
    setSelectedColor(color);
    setMainSrc(`/images/products/${color.src}`);
  }

  function handleThumbClick(thumb: (typeof thumbs)[0]) {
    setMainSrc(thumb.src);
    if (thumb.color) setSelectedColor(thumb.color);
  }

  const typeLabel = product.type === "tshirt" ? "T-Shirt" : product.type.charAt(0).toUpperCase() + product.type.slice(1);
  const genreLabel = product.genre.charAt(0).toUpperCase() + product.genre.slice(1);

  return (
    <div className="max-w-6xl mx-auto flex flex-col">

      {/* ── Zone 1 : galerie + achat (above-the-fold) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* Gauche — galerie */}
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
            <Image
              src={mainSrc}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {thumbs.map((thumb, i) => (
              <button
                key={i}
                onClick={() => handleThumbClick(thumb)}
                aria-label={thumb.label}
                title={thumb.label}
                className={`relative w-[64px] h-[64px] shrink-0 overflow-hidden bg-[#f5f5f5] transition-all ${
                  mainSrc === thumb.src
                    ? "ring-2 ring-[#ed760a] ring-offset-1"
                    : "ring-1 ring-black/10 hover:ring-black/30"
                }`}
              >
                <Image src={thumb.src} alt={thumb.label} fill className="object-cover" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* Droite — infos + achat */}
        <div className="flex flex-col gap-5 py-2">

          <Link
            href={`/collections/${product.collection}`}
            className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm hover:opacity-80 transition-opacity ${COLLECTION_COLORS[product.collection]}`}
          >
            {COLLECTION_LABELS[product.collection]}
          </Link>

          <h1
            className="text-[36px] md:text-[44px] font-bold text-[#111518] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h1>

          <SatPrice priceEur={product.price} large />

          <p className="text-[#6b7280] text-base leading-relaxed">{product.description}</p>

          <div className="flex gap-3 text-xs text-[#9ca3af] font-medium uppercase tracking-wide">
            <span>{typeLabel}</span>
            <span>·</span>
            <span>{genreLabel}</span>
            <span>·</span>
            <span>GOTS Certified</span>
          </div>

          <AddToCart
            colors={product.colors}
            productName={product.name}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />

          <div className="pt-1 flex items-center gap-2">
            <ShareButton
              slug={product.slug}
              text={`${product.name} — Bitcoin apparel by Orange Peel`}
            />
            <Link
              href="/products"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border border-black/20 text-[#6b7280] hover:text-[#111518] hover:border-black/40 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
              </svg>
              All products
            </Link>
          </div>
        </div>
      </div>

      {/* ── Zone 2 : Our Standards + About this piece ── */}
      <div className="border-t border-black/8 mt-12 pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* Gauche — Our Standards */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold mb-6">
            Our Standards
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {STANDARDS.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-black/8 flex items-center justify-center text-[#ed760a]">
                  {s.icon}
                </div>
                <p className="text-[#111518] font-semibold text-sm leading-tight">{s.label}</p>
                <p className="text-[#9ca3af] text-xs leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Droite — About this piece */}
        {product.longDescription && (
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold mb-6">
              About this piece
            </p>
            <p className="text-[#374151] text-sm leading-[1.85] whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
