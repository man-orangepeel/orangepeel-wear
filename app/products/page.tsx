"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  PRODUCTS,
  type ProductCollection,
  type ProductType,
  type ProductGenre,
} from "@/lib/products";
import SatPrice from "@/components/SatPrice";

type FilterCollection = "all" | ProductCollection;
type FilterType = "all" | ProductType;
type FilterGenre = "all" | ProductGenre;

export default function ProductsPage() {
  const [collection, setCollection] = useState<FilterCollection>("all");
  const [type, setType] = useState<FilterType>("all");
  const [genre, setGenre] = useState<FilterGenre>("all");

  const filtered = PRODUCTS.filter((p) => {
    if (!p.published) return false;
    if (collection !== "all" && p.collection !== collection) return false;
    if (type !== "all" && p.type !== type) return false;
    if (genre !== "all" && p.genre !== genre) return false;
    return true;
  });

  return (
    <>
      {/* ── Header ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Suit Up For Freedom
          </p>
          <h1
            className="text-[44px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All Our Products
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Find the Orange that fits your truth.
          </p>
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-[#f8f6f3] py-6 px-6 border-y border-black/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-center">
          {/* Collection */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold">Collection</span>
            <div className="flex gap-1">
              {(["all", "warriors", "wizards", "cyphers"] as FilterCollection[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setCollection(c)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                    collection === c
                      ? "bg-[#111518] text-white"
                      : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"
                  }`}
                >
                  {c === "all" ? "All" : c.charAt(0).toUpperCase() + c.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Type */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold">Type</span>
            <div className="flex gap-1">
              {(["all", "tshirt", "hoodie"] as FilterType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                    type === t
                      ? "bg-[#111518] text-white"
                      : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"
                  }`}
                >
                  {t === "all" ? "All" : t === "tshirt" ? "T-Shirt" : "Hoodie"}
                </button>
              ))}
            </div>
          </div>

          {/* Genre */}
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold">For</span>
            <div className="flex gap-1">
              {(["all", "men", "women", "unisex"] as FilterGenre[]).map((g) => (
                <button
                  key={g}
                  onClick={() => setGenre(g)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${
                    genre === g
                      ? "bg-[#111518] text-white"
                      : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"
                  }`}
                >
                  {g === "all" ? "All" : g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Count */}
          <span className="ml-auto text-sm text-[#6b7280]">
            {filtered.length} product{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className="bg-white py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#6b7280]">
              No products match the selected filters.
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                  <div className="flex flex-col gap-3">
                    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                      <Image
                        src={`/images/products/${p.src}`}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111518] text-sm font-semibold leading-tight group-hover:text-[#ed760a] transition-colors">
                        {p.name}
                      </p>
                      <SatPrice priceEur={p.price} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
