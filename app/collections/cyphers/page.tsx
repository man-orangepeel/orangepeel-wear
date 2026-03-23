import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  { src: "0006.0-Satoshi-I-dont-have-time-300x300.png", name: "Satoshi — No Time",  slug: "satoshi-no-time-tshirt" },
  { src: "2-1-300x300.png",                             name: "The Cypher I",       slug: "cypher-i-tshirt" },
  { src: "3-1-300x300.png",                             name: "The Cypher II",      slug: "cypher-ii-tshirt" },
  { src: "4-1-300x300.png",                             name: "The Cypher III",     slug: "cypher-iii-tshirt" },
  { src: "9-7-300x300.png",                             name: "Meme Chad — Cypher", slug: "meme-chad-cypher-tshirt" },
  { src: "10-1-300x300.png",                            name: "Cypher Hoodie",      slug: "cypher-hoodie" },
];

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
  return (
    <>
      {/* ── Hero — identité Cyphers ── */}
      <section
        className="min-h-[60vh] flex flex-col justify-end px-8 pb-16 -mt-[70px]"
        style={{ background: "radial-gradient(at top center, #4A4A4A 0%, #000000 100%)", paddingTop: "calc(70px + 3rem)" }}
      >
        <p className="text-white/40 text-sm mb-2 tracking-widest uppercase">
          — The Technical Collection
        </p>
        <h1
          className="text-[60px] md:text-[100px] text-white leading-none mb-6"
          style={{ fontFamily: "var(--font-orbitron)", lineHeight: "1em" }}
        >
          The Cyphers
        </h1>
        <p className="text-white/70 text-xl italic">
          Those who know, know.
        </p>
      </section>

      {/* ── Badges ── */}
      <section className="bg-black py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3 py-10 px-8 text-center">
              <div className="text-[#6b7280]">{b.icon}</div>
              <p className="text-white font-bold text-sm">{b.label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#6b7280] text-sm tracking-widest uppercase mb-3 font-medium">The Range</p>
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
                <p className="text-[#111518] text-sm font-semibold group-hover:text-[#4A4A4A] transition-colors">{p.name}</p>
                <p className="text-[#687279] text-xs">€25 – €50</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/products?collection=cyphers"
              className="inline-block border border-[#111518] text-[#111518] font-semibold px-8 py-3 text-sm hover:bg-[#111518] hover:text-white transition-colors duration-200 rounded-sm"
            >
              View all Cyphers products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why The Cyphers? ── */}
      <section className="bg-[#f9f9f9] py-16 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[40px] font-bold text-[#111518] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why The Cyphers?
          </h2>
          <div className="text-[#111518] text-base leading-relaxed flex flex-col gap-4">
            <p>
              You know Bitcoin inside out. You don&apos;t just wear Bitcoin —
              you <strong>code it</strong>.
            </p>
            <p>
              The Cyphers Collection is built for those who communicate in
              layers: technical references, protocol nods, and community in-jokes
              that only the initiated can decode.
            </p>
            <p>
              <strong>
                You diffuse the code in the chaos. One design at a time.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA — identité Cyphers ── */}
      <section
        className="py-16 px-6"
        style={{ background: "radial-gradient(at top center, #4A4A4A 0%, #000000 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="text-[30px] text-white"
            style={{ fontFamily: "var(--font-orbitron)" }}
          >
            Proof Of Work
          </h2>
          <p className="text-white/70 text-base leading-relaxed">
            Bitcoin writes history. Your story is part of it — share it and
            inspire the next block.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-200 rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
