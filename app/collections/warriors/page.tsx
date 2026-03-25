"use client";

import Link from "next/link";
import Image from "next/image";
import SatPrice from "@/components/SatPrice";

const PRODUCTS = [
  { src: "1bis-4-300x300.png",                              name: "Meme Chad — Warrior",      slug: "meme-chad-warrior-tshirt" },
  { src: "0004.0-Percept-vs.-Real-1-300x300.png",          name: "Perception vs. Reality",   slug: "perception-vs-reality-tshirt" },
  { src: "0003.0-Barbie-for-Girls-Bitcoin-for-Women-300x300.png", name: "Barbie for Girls",   slug: "barbie-for-girls-bitcoin-for-women-tshirt" },
  { src: "1-6-300x300.png",                                name: "The Statement",            slug: "the-statement-tshirt" },
  { src: "1-1-300x300.png",                                name: "Warrior I",                slug: "warrior-i-tshirt" },
  { src: "1-2-300x300.png",                                name: "Warrior II",               slug: "warrior-ii-tshirt" },
];

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
  return (
    <>
      {/* ── Hero — identité Warriors ── */}
      <section
        className="min-h-[60vh] flex flex-col justify-end px-8 pb-16 -mt-[70px]"
        style={{ background: "radial-gradient(at top center, #efa813 0%, #ed760a 100%)", paddingTop: "calc(70px + 3rem)" }}
      >
        <p className="text-black/50 text-sm mb-2 tracking-widest uppercase">
          — The Explicit Collection
        </p>
        <h1
          className="text-[80px] md:text-[120px] font-normal text-white leading-none mb-6"
          style={{ fontFamily: "var(--font-anton)", letterSpacing: "4.9px" }}
        >
          The Warriors
        </h1>
        <p className="text-white/90 text-xl italic font-semibold">
          Wear your truth. Let them ask.
        </p>
      </section>

      {/* ── Badges ── */}
      <section className="bg-black py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3 py-10 px-8 text-center">
              <div className="text-[#ed760a]">{b.icon}</div>
              <p className="text-white font-bold text-sm">{b.label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3 font-medium">The Range</p>
          <h2
            className="text-[48px] font-bold text-[#111518] mb-10"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            T-Shirts &amp; Hoodies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {PRODUCTS.map((p) => (
              <Link key={p.slug} href={`/products/${p.slug}`} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5]">
                  <Image
                    src={`/images/products/${p.src}`}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <p className="text-[#111518] text-sm font-semibold group-hover:text-[#ed760a] transition-colors">{p.name}</p>
                <SatPrice priceEur={25} priceEur2={50} />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/products?collection=warriors"
              className="inline-block border border-[#111518] text-[#111518] font-semibold px-8 py-3 text-sm hover:bg-[#111518] hover:text-white transition-colors duration-200 rounded-sm"
            >
              View all Warriors products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why The Warriors? ── */}
      <section className="bg-[#f9f9f9] py-16 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[40px] font-bold text-[#111518] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why The Warriors?
          </h2>
          <div className="text-[#111518] text-base leading-relaxed flex flex-col gap-4">
            <p>
              <strong>The Warriors Collection</strong> isn&apos;t clothing. It&apos;s a flag that you wear <strong>proudly</strong>, and the
              reactions are an opportunity to raise <strong>awareness</strong>.
            </p>
            <p>
              It explicitly denounces the shortcomings of the current system and
              stands tall for the <strong>Bitcoin standard</strong>.
            </p>
            <p>
              It embodies the desire to represent Bitcoin with an{" "}
              <strong>uncompromising message</strong>… and a{" "}
              <strong>touch of provocation</strong>.
            </p>
          </div>
        </div>
      </section>

    </>
  );
}
