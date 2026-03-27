"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { ProductColor } from "@/lib/products";
import ShareButton from "@/components/ShareButton";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export default function AddToCart({
  colors,
  productName,
  selectedColor,
  onColorChange,
  shareSlug,
}: {
  colors: ProductColor[];
  productName: string;
  selectedColor?: ProductColor;
  onColorChange?: (color: ProductColor) => void;
  shareSlug?: string;
}) {
  const router = useRouter();
  const [internalColor, setInternalColor] = useState<ProductColor>(colors[0]);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [added, setAdded] = useState(false);

  const activeColor = selectedColor ?? internalColor;

  const handleColorChange = (color: ProductColor) => {
    setInternalColor(color);
    onColorChange?.(color);
  };

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => router.push("/cart"), 1200);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Toast */}
      {added && (
        <div className="fixed top-24 right-6 z-50 bg-[#111518] text-white text-sm font-semibold px-5 py-3 rounded-sm shadow-xl flex items-center gap-2">
          <svg className="w-4 h-4 text-[#ed760a] shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
          Added — redirecting to cart…
        </div>
      )}

      {/* Taille */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-[#111518]">
          Size{" "}
          {selectedSize && (
            <span className="font-normal text-[#6b7280]">— {selectedSize}</span>
          )}
        </p>
        <div className="flex flex-wrap gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(s)}
              className={`px-4 py-2 text-sm border rounded-sm font-medium transition-colors duration-150 ${
                selectedSize === s
                  ? "border-[#ed760a] text-[#ed760a] bg-[#ed760a]/5"
                  : "border-black/20 text-[#111518] hover:border-[#ed760a] hover:text-[#ed760a]"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Couleur */}
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold text-[#111518]">
          Color{" "}
          <span className="font-normal text-[#6b7280]">— {activeColor.name}</span>
        </p>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => handleColorChange(color)}
              title={color.name}
              aria-label={color.name}
              className={`w-9 h-9 rounded-full border-2 transition-all duration-150 ${
                activeColor.name === color.name
                  ? "border-[#ed760a] scale-110 shadow-md"
                  : "border-black/15 hover:border-black/40"
              }`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
      </div>

      {/* Add to Cart + Share */}
      <div className="flex gap-2">
        <button
          className="flex-1 bg-[#ed760a] text-black font-bold py-4 text-sm hover:bg-[#efa813] transition-colors duration-200 rounded-sm disabled:opacity-60"
          onClick={handleAdd}
          disabled={added}
        >
          {added ? "Added!" : "Add to Cart"}
        </button>
        {shareSlug && (
          <div className="shrink-0">
            <ShareButton
              slug={shareSlug}
              text={`${productName} — Bitcoin apparel by Orange Peel`}
              compact
              alignRight
            />
          </div>
        )}
      </div>
    </div>
  );
}
