"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS, type ProductType, type ProductGenre } from "@/lib/products";
import SatPrice from "@/components/SatPrice";

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
    if (p.collection !== "cyphers") return false;
    if (type !== "all" && p.type !== type) return false;
    if (genre !== "all" && p.genre !== genre) return false;
    return true;
  });

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-16 px-6"
        style={{ background: "radial-gradient(at top center, #4A4A4A 0%, #000000 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">— The Technical Collection</p>
          <h1
            className="text-[46px] md:text-[62px] text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-orbitron)", lineHeight: "1.15em" }}
          >
            The Cyphers
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            Those who know, know.
          </p>
        </div>
      </section>

      {/* ── Badges ── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-5 py-8 px-8">
              <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
                <div className="w-7 h-7 text-[#6b7280]">{b.icon}</div>
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

      {/* ── Why The Cyphers? ── */}
      <section className="bg-[#111518] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#6b7280] text-xs uppercase tracking-widest font-semibold mb-4">The Cyphers Collection</p>
          <h2 className="text-[36px] font-bold text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Why The Cyphers?
          </h2>
          <div className="text-white/70 text-base leading-relaxed flex flex-col gap-4">
            <p>You know Bitcoin inside out. You don&apos;t just wear Bitcoin — you <strong className="text-white">code it</strong>.</p>
            <p>The Cyphers Collection is built for those who communicate in layers: technical references, protocol nods, and community in-jokes that only the initiated can decode.</p>
            <p><strong className="text-white">You diffuse the code in the chaos. One design at a time.</strong></p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6" style={{ background: "radial-gradient(at top center, #4A4A4A 0%, #000000 100%)" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-[30px] text-white" style={{ fontFamily: "var(--font-orbitron)" }}>Proof Of Work</h2>
          <p className="text-white/70 text-base leading-relaxed">Bitcoin writes history. Your story is part of it — share it and inspire the next block.</p>
          <Link href="/contact" className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-200 rounded-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
