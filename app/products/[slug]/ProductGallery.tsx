"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({
  designSrc,
  productSrc,
  name,
}: {
  designSrc: string;
  productSrc: string;
  name: string;
}) {
  const images = [
    { src: `/images/designs/${designSrc}`, label: "Design view" },
    { src: `/images/products/${productSrc}`, label: "Product view" },
  ];
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
        <Image
          src={images[activeIdx].src}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIdx(i)}
            aria-label={img.label}
            className={`relative aspect-square overflow-hidden bg-[#f5f5f5] transition-all ${
              activeIdx === i
                ? "ring-2 ring-[#ed760a] ring-offset-1"
                : "ring-1 ring-black/10 hover:ring-black/30"
            }`}
          >
            <Image
              src={img.src}
              alt={img.label}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
