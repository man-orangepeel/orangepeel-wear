"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS, type ProductType, type ProductGenre } from "@/lib/products";
import SatPrice from "@/components/SatPrice";
import CollectionHero from "@/components/CollectionHero";

const BADGES = [
  {
    label: "On-chain references",
    sub: "Embedded in every thread.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
      </svg>
    ),
  },
  {
    label: "Community codes",
    sub: "Signals only insiders read.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    label: "Minimalist design",
    sub: "Less noise. More signal.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
    ),
  },
];

export default function CyphersPage() {
  const [type, setType] = useState<"all" | ProductType>("all");
  const [genre, setGenre] = useState<"all" | ProductGenre>("all");

  const filtered = PRODUCTS.filter((p) => {
    if (!p.published) return false;
    if (p.collection !== "cyphers") return false;
    if (type !== "all" && p.type !== type) return false;
    if (genre !== "all" && p.genre !== genre) return false;
    return true;
  });

  return (
    <>
      {/* ── Hero ── */}
      <CollectionHero
        label="— The Technical Collection"
        title="The Cyphers"
        titleFont="var(--font-orbitron)"
        titleSizeMobile="46px"
        titleSizeDesktop="76px"
        gradient="radial-gradient(at top center, #4A4A4A 0%, #000000 100%)"
        accentColor="#9ca3af"
        tagline="You don't just wear Bitcoin. You code it."
        body="Technical references, protocol nods, community in-jokes — encoded in every thread. For those who know, know."
      />

      {/* ── Badges ── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-5 py-8 px-8">
              <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
                <div className="w-7 h-7 text-white/80">{b.icon}</div>
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
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${type === t ? "bg-[#222] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
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
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${genre === g ? "bg-[#222] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
                  {g === "all" ? "All" : g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-[#6b7280]">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
            <Link href="/products" className="text-xs uppercase tracking-widest font-semibold text-[#6b7280] hover:text-[#4A4A4A] transition-colors border-b border-[#6b7280]/30 hover:border-[#4A4A4A] pb-0.5">
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
                      <p className="text-[#111518] text-sm font-semibold leading-tight group-hover:text-[#4A4A4A] transition-colors">{p.name}</p>
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
