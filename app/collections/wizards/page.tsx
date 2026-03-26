"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS, type ProductType, type ProductGenre } from "@/lib/products";
import SatPrice from "@/components/SatPrice";

const BADGES = [
  {
    label: "No mention of Bitcoin",
    sub: "But woven into every thread.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
      </svg>
    ),
  },
  {
    label: "Discreet designs",
    sub: "Privacy over display.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "Awaken consciousness",
    sub: "Rooted in Bitcoin's ethos.",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function WizardsPage() {
  const [type, setType] = useState<"all" | ProductType>("all");
  const [genre, setGenre] = useState<"all" | ProductGenre>("all");

  const filtered = PRODUCTS.filter((p) => {
    if (p.collection !== "wizards") return false;
    if (type !== "all" && p.type !== type) return false;
    if (genre !== "all" && p.genre !== genre) return false;
    return true;
  });

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-16 px-6"
        style={{ background: "radial-gradient(at top center, #482B5F 0%, #1D1D63 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">— The Whispered Collection</p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-caudex)", letterSpacing: "2.3px" }}
          >
            The Wizards
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            The message is in the Wearer.
          </p>
        </div>
      </section>

      {/* ── Badges ── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-5 py-8 px-8">
              <div className="w-14 h-14 rounded-full border-2 border-white/50 flex items-center justify-center">
                <div className="w-7 h-7 text-[#8b5cf6]">{b.icon}</div>
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
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${type === t ? "bg-[#482B5F] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
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
                  className={`px-3 py-1.5 text-xs font-semibold rounded-sm transition-colors ${genre === g ? "bg-[#482B5F] text-white" : "bg-white text-[#6b7280] hover:text-[#111518] border border-black/10"}`}>
                  {g === "all" ? "All" : g.charAt(0).toUpperCase() + g.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="ml-auto flex items-center gap-4">
            <span className="text-sm text-[#6b7280]">{filtered.length} product{filtered.length !== 1 ? "s" : ""}</span>
            <Link href="/products" className="text-xs uppercase tracking-widest font-semibold text-[#6b7280] hover:text-[#8b5cf6] transition-colors border-b border-[#6b7280]/30 hover:border-[#8b5cf6] pb-0.5">
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
                      <p className="text-[#111518] text-sm font-semibold leading-tight group-hover:text-[#482B5F] transition-colors">{p.name}</p>
                      <SatPrice priceEur={p.price} />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Why The Wizards? ── */}
      <section className="bg-[#111518] py-16 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto">
          <p className="text-[#8b5cf6] text-xs uppercase tracking-widest font-semibold mb-4">The Wizards Collection</p>
          <h2 className="text-[36px] font-bold text-white mb-8" style={{ fontFamily: "var(--font-heading)" }}>
            Why The Wizards?
          </h2>
          <div className="text-white/70 text-base leading-relaxed flex flex-col gap-4">
            <p>The Wizards Collection allows you to <strong className="text-white">powerfully spread the principles of Bitcoin without ever mentioning it</strong>. It&apos;s perfect for:</p>
            <p>Those seeking discreet designs, suitable for <strong className="text-white">everyday wear in any environment</strong>.</p>
            <p>Those who wish to <strong className="text-white">avoid drawing attention</strong>, due to the associations that link Bitcoin to wealth or criminality.</p>
            <p><strong className="text-white">This subtle approach sparks conversations about our society</strong>, even among Bitcoin skeptics. They fall down the rabbit hole without even realizing it. Yes, you are a Wizard.</p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6" style={{ background: "radial-gradient(at top center, #482B5F 0%, #1D1D63 100%)" }}>
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2 className="text-[36px] font-bold text-white" style={{ fontFamily: "var(--font-caudex)" }}>Proof Of Work</h2>
          <p className="text-white/80 text-base leading-relaxed">Bitcoin writes history. Your story is part of it — share it and inspire the next block.</p>
          <Link href="/contact" className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-[#1D1D63] transition-colors duration-200 rounded-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
