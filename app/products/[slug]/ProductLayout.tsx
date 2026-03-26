"use client";

import Image from "next/image";
import { useState } from "react";
import type { Product, ProductColor } from "@/lib/products";
import AddToCart from "./AddToCart";
import SatPrice from "@/components/SatPrice";
import { COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import Link from "next/link";

export default function ProductLayout({ product }: { product: Product }) {
  const [selectedColor, setSelectedColor] = useState<ProductColor>(product.colors[0]);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  const images = [
    { src: `/images/designs/${product.designSrc}`, label: "Design view" },
    { src: `/images/products/${selectedColor.src}`, label: "Product view" },
  ];

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      {/* Left — Images */}
      <div className="flex flex-col gap-4">
        <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
          <Image
            src={images[activeImageIdx].src}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
        <div className="grid grid-cols-4 gap-2">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImageIdx(i)}
              aria-label={img.label}
              className={`relative aspect-square overflow-hidden bg-[#f5f5f5] transition-all ${
                activeImageIdx === i
                  ? "ring-2 ring-[#ed760a] ring-offset-1"
                  : "ring-1 ring-black/10 hover:ring-black/30"
              }`}
            >
              <Image src={img.src} alt={img.label} fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      </div>

      {/* Right — Info */}
      <div className="flex flex-col gap-6 py-2">
        <span
          className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${COLLECTION_COLORS[product.collection]}`}
        >
          {COLLECTION_LABELS[product.collection]}
        </span>

        <h1
          className="text-[36px] md:text-[48px] font-bold text-[#111518] leading-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {product.name}
        </h1>

        <SatPrice priceEur={product.price} large />

        <p className="text-[#6b7280] text-base leading-relaxed">{product.description}</p>

        {product.longDescription && (
          <p className="text-[#111518] text-sm leading-relaxed whitespace-pre-line">
            {product.longDescription}
          </p>
        )}

        <div className="border-t border-black/10 pt-6 flex flex-col gap-5">
          <div className="flex gap-4 text-sm text-[#6b7280]">
            <span className="capitalize">{product.type === "tshirt" ? "T-Shirt" : "Hoodie"}</span>
            <span>·</span>
            <span className="capitalize">{product.genre}</span>
            <span>·</span>
            <span>GOTS Certified</span>
          </div>

          <AddToCart
            colors={product.colors}
            productName={product.name}
            selectedColor={selectedColor}
            onColorChange={(color) => {
              setSelectedColor(color);
              setActiveImageIdx(1);
            }}
          />

          <Link
            href="/products"
            className="text-[#6b7280] text-sm hover:text-[#ed760a] transition-colors text-center"
          >
            ← Back to all products
          </Link>
        </div>
      </div>
    </div>
  );
}
