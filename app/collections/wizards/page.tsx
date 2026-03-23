import Link from "next/link";
import Image from "next/image";

const PRODUCTS = [
  { src: "1bis-3-300x300.png", name: "Meme Chad — Big",    slug: "meme-chad-big-tshirt" },
  { src: "1bis-2-300x300.png", name: "Meme Chad",          slug: "meme-chad-wizard-tshirt" },
  { src: "1-3-300x300.png",    name: "The Whisper",        slug: "the-whisper-tshirt" },
  { src: "1-4-300x300.png",    name: "Encoded",            slug: "encoded-tshirt" },
  { src: "1-5-300x300.png",    name: "Hidden Signal",      slug: "hidden-signal-tshirt" },
  { src: "5-1-300x300.png",    name: "Wizard Hoodie",      slug: "wizard-hoodie" },
];

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
  return (
    <>
      {/* ── Hero — identité Wizards ── */}
      <section
        className="min-h-[60vh] flex flex-col justify-end px-8 pb-16 -mt-[70px]"
        style={{ background: "radial-gradient(at top center, #482B5F 0%, #1D1D63 100%)", paddingTop: "calc(70px + 3rem)" }}
      >
        <p className="text-white/60 text-sm mb-2 tracking-widest uppercase">
          — The Whispered Collection
        </p>
        <h1
          className="text-[80px] md:text-[120px] font-bold text-white leading-none mb-6"
          style={{ fontFamily: "var(--font-caudex)", letterSpacing: "2.3px" }}
        >
          The Wizards
        </h1>
        <p className="text-white/80 text-xl italic">
          The message is in the Wearer.
        </p>
      </section>

      {/* ── Badges ── */}
      <section className="bg-black py-0 px-0">
        <div className="max-w-none grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {BADGES.map((b) => (
            <div key={b.label} className="flex flex-col items-center gap-3 py-10 px-8 text-center">
              <div className="text-[#8b5cf6]">{b.icon}</div>
              <p className="text-white font-bold text-sm">{b.label}</p>
              <p className="text-white/50 text-xs leading-relaxed">{b.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Products ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#8b5cf6] text-sm tracking-widest uppercase mb-3 font-medium">The Range</p>
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
                <p className="text-[#111518] text-sm font-semibold group-hover:text-[#482B5F] transition-colors">{p.name}</p>
                <p className="text-[#687279] text-xs">€25 – €50</p>
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/products?collection=wizards"
              className="inline-block border border-[#111518] text-[#111518] font-semibold px-8 py-3 text-sm hover:bg-[#111518] hover:text-white transition-colors duration-200 rounded-sm"
            >
              View all Wizards products
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why The Wizards? ── */}
      <section className="bg-[#f9f9f9] py-16 px-6 border-t border-black/10">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-[40px] font-bold text-[#111518] mb-8"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Why The Wizards?
          </h2>
          <div className="text-[#111518] text-base leading-relaxed flex flex-col gap-4">
            <p>
              The Wizards Collection allows you to{" "}
              <strong>
                powerfully spread the principles of Bitcoin without ever
                mentioning it
              </strong>
              . It&apos;s perfect for:
            </p>
            <p>
              Those seeking discreet designs, suitable for{" "}
              <strong>everyday wear in any environment</strong>.
            </p>
            <p>
              Those who wish to <strong>avoid drawing attention</strong>, due to
              the associations that link Bitcoin to wealth or criminality.
            </p>
            <p>
              <strong>
                This subtle approach sparks conversations about our society
              </strong>
              , even among Bitcoin skeptics. They fall down the rabbit hole
              without even realizing it. Yes, you are a Wizard.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA — identité Wizards ── */}
      <section
        className="py-16 px-6"
        style={{ background: "radial-gradient(at top center, #482B5F 0%, #1D1D63 100%)" }}
      >
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="text-[36px] font-bold text-white"
            style={{ fontFamily: "var(--font-caudex)" }}
          >
            Proof Of Work
          </h2>
          <p className="text-white/80 text-base leading-relaxed">
            Bitcoin writes history. Your story is part of it — share it and
            inspire the next block.
          </p>
          <Link
            href="/contact"
            className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-[#1D1D63] transition-colors duration-200 rounded-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
