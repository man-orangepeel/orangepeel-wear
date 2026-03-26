"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS, type ProductType, type ProductGenre } from "@/lib/products";
import SatPrice from "@/components/SatPrice";
import CollectionHero from "@/components/CollectionHero";

const BADGES = [
  {
    label: "Clear presence of Bitcoin",
    sub: "No ambiguity. No apology.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1" />
      </svg>
    ),
  },
  {
    label: "Unapologetic designs",
    sub: "Bold, direct, unflinching.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
      </svg>
    ),
  },
  {
    label: "Designed to spark dialogue",
    sub: "Every reaction is an opportunity.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
      </svg>
    ),
  },
];

export default function WarriorsPage() {
  const [type, setType] = useState<"all" | ProductType>("all");
  const [genre, setGenre] = useState<"all" | ProductGenre>("all");

  const filtered = PRODUCTS.filter((p) => {
    if (!p.published) return false;
    if (p.collection !== "warriors") return false;
    if (type !== "all" && p.type !== type) return false;
    if (genre !== "all" && p.genre !== genre) return false;
    return true;
  });

  return (
    <>
      {/* ── Hero ── */}
      <CollectionHero
        label="— The Explicit Collection"
        title="The Warriors"
        titleFont="var(--font-anton)"
        titleSizeMobile="60px"
        titleSizeDesktop="80px"
        titleLetterSpacing="4.9px"
        fontNormal
        gradient="radial-gradient(at top center, #efa813 0%, #ed760a 100%)"
        accentColor="#ffbe2e"
        tagline="Not clothing. A flag."
        body="Wear your truth, provoke the conversation — every reaction is a chance to raise awareness. Explicit. Uncompromising. On-brand for the Bitcoin standard."
      />

      {/* ── Badges ── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-5 py-8 px-8">
              <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
                <div className="w-7 h-7 text-[#ed760a]">{b.icon}</div>
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1">{b.label}</p>
                <p className="text-white/50 text-sm">{b.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Filters ── */}
      <section className="bg-[#f8f6f3] py-6 px-6 border-y border-black/5">
        <div className="max-w-6xl mx-auto flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold">Type</span>
            <div className="flex gap-1">
              {(["all", "tshirt", "hoodie"] as ("all" | ProductType)[]).map((t) => (
                <button key={t} onClick={() => setType(t)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${type === t ? "bg-[#111518] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
                  {t === "all" ? "All" : t === "tshirt" ? "T-Shirt" : "Hoodie"}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold">For</span>
            <div className="flex gap-1">
              {(["all", "men", "women", "unisex"] as ("all" | ProductGenre)[]).map((g) => (
                <button key={g} onClick={() => setGenre(g)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${genre === g ? "bg-[#111518] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
                  {g === "all" ? "All" : g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-[#6b7280]">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
            <Link href="/products" className="text-xs uppercase tracking-widest font-semibold text-[#6b7280] hover:text-[#ed760a] transition-colors border-b border-[#6b7280]/30 hover:border-[#ed760a] pb-0.5">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Products grid ── */}
      <section className="bg-white py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-24 text-[#6b7280]">No products match the selected filters.</div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filtered.map((p) => (
                <Link key={p.slug} href={`/products/${p.slug}`} className="group">
                  <div className="flex flex-col gap-3">
                    <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                      <Image src={`/images/products/${p.src}`} alt={p.name} fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes="(max-width: 768px) 50vw, 33vw" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-[#111518] text-sm font-semibold leading-tight group-hover:text-[#ed760a] transition-colors">{p.name}</p>
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
