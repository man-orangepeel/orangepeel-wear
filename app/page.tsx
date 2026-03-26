import Link from "next/link";
import Image from "next/image";
import ParallaxHero from "@/components/ParallaxHero";
import SatPrice from "@/components/SatPrice";

/* ── Données statiques ── */
const DESIGNS = [
  "13-7-1024x1024.png",
  "13-1024x1024.png",
  "14-8-1024x1024.png",
  "12-4-1024x1024.png",
  "14-9-1024x1024.png",
  "11-1-1024x1024.png",
];

const TRENDING = [
  { src: "1bis-4-300x300.png", name: "Meme Chad — Warrior", price: 50, slug: "meme-chad-warrior-tshirt" },
  { src: "1bis-3-300x300.png", name: "Meme Chad — Big",     price: 50, slug: "meme-chad-big-tshirt" },
  { src: "9-7-300x300.png",    name: "Meme Chad — Cypher",  price: 50, slug: "meme-chad-cypher-tshirt" },
  { src: "1-3-300x300.png",    name: "The Whisper",         price: 50, slug: "the-whisper-tshirt" },
  { src: "2-1-300x300.png",    name: "The Cypher I",        price: 50, slug: "cypher-i-tshirt" },
  { src: "1-1-300x300.png",    name: "Warrior I",           price: 50, slug: "warrior-i-tshirt" },
];

const BADGES = [
  {
    label: "Premium Only",
    desc: "High quality products",
    href: "/about/how-we-work#our-standards",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
      </svg>
    ),
  },
  {
    label: "Eco-Responsible",
    desc: "Good for us, good for Earth",
    href: "/about/how-we-work#our-standards",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    label: "Privacy",
    desc: "Payment and delivery",
    href: "/about#our-values",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
  {
    label: "BTC Standard",
    desc: "Onchain & Lightning payments",
    href: "/about/how-we-work#our-standards",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <>
      {/* ──────────────────────────────────────────
          1. HERO (parallax)
      ────────────────────────────────────────── */}
      <ParallaxHero />

      {/* ──────────────────────────────────────────
          2. BADGES
      ────────────────────────────────────────── */}
      <section className="bg-[#111] py-0 px-0">
        <div className="max-w-none grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10 text-center">
          {BADGES.map((badge) => (
            <Link
              key={badge.label}
              href={badge.href}
              className="group flex flex-col items-center gap-5 py-8 px-8 hover:bg-white/5 transition-colors"
            >
              <div className="w-14 h-14 rounded-full border-2 border-white/50 group-hover:border-[#ed760a] flex items-center justify-center transition-colors duration-200">
                <div className="w-7 h-7 text-[#ed760a]">
                  {badge.icon}
                </div>
              </div>
              <div>
                <p className="text-white font-bold text-base mb-1 group-hover:text-[#ed760a] transition-colors duration-200">{badge.label}</p>
                <p className="text-white/50 text-sm">{badge.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ──────────────────────────────────────────
          3. OUR COLLECTIONS
      ────────────────────────────────────────── */}
      <section id="home-our-collections" className="bg-white pt-10 pb-6 px-6">
        <div className="max-w-7xl mx-auto text-center mb-6">
          <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-4 font-medium">
            The Range
          </p>
          <h2
            className="text-[60px] font-bold text-[#111518] leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Collections
          </h2>
          <p className="text-[#6b7280] text-base max-w-2xl mx-auto">
            Sometimes in the limelight, sometimes in the shadows.<br />
            Provoke, intrigue or remain elusive.<br />
            Three styles, one cause: Bitcoin.
          </p>
        </div>
      </section>

      {/* Cards — colonnes espacées */}
      <div className="flex flex-col md:flex-row gap-3 bg-white px-3 pb-3 w-full" id="home-warriors">
        {/* Warriors */}
        <div
          className="flex-1 flex flex-col justify-between px-10 py-16 rounded-sm"
          style={{
            background: "radial-gradient(at top center, #efa813 0%, #ed760a 100%)",
            minHeight: "100vh",
          }}
        >
          <h3
            className="text-[81px] md:text-[101px] font-normal text-white"
            style={{ fontFamily: "var(--font-anton)", lineHeight: "0.96em", letterSpacing: "4.9px" }}
          >
            The
            <br />
            Warriors
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-white text-base leading-relaxed">
              <strong>For Bitcoiners who wear their commitment with bold design and unapologetic words.</strong>
              <br /><br />
              Ready to spark debate and orange-pill anyone in your way?
            </p>
            <Link
              href="/collections/warriors"
              className="self-start bg-white text-black font-bold text-base py-4 px-8 hover:bg-black hover:text-white transition-colors duration-200 rounded-sm"
            >
              Enter the Warrior League
            </Link>
          </div>
        </div>

        {/* Wizards */}
        <div
          className="flex-1 flex flex-col justify-between px-10 py-16 rounded-sm"
          style={{
            background: "radial-gradient(at top center, #482B5F 0%, #1D1D63 100%)",
            minHeight: "100vh",
          }}
        >
          <h3
            className="text-[81px] md:text-[98px] font-bold text-white"
            style={{ fontFamily: "var(--font-caudex)", lineHeight: "0.94em", letterSpacing: "2.3px" }}
          >
            The
            <br />
            Wizards
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-white text-base leading-relaxed">
              <strong>For those who prefer discretion, spreading the Bitcoin ethos without ever saying the word.</strong>
              <br /><br />
              Ideas encoded in style, signal hidden in plain sight. Some clues, clear community recognition.
              <br /><br />
              You&apos;re part of the quiet revolution?
            </p>
            <Link
              href="/collections/wizards"
              className="self-start bg-white text-black font-bold text-base py-4 px-8 hover:bg-black hover:text-white transition-colors duration-200 rounded-sm"
            >
              Take your seat among the Wizards
            </Link>
          </div>
        </div>

        {/* Cyphers */}
        <div
          className="flex-1 flex flex-col justify-between px-10 py-16 rounded-sm"
          style={{
            background: "radial-gradient(at top center, #4A4A4A 0%, #000000 100%)",
            minHeight: "100vh",
          }}
        >
          <h3
            className="text-[65px] md:text-[81px] text-white"
            style={{ fontFamily: "var(--font-orbitron)", lineHeight: "0.97em" }}
          >
            The
            <br />
            Cyphers
          </h3>
          <div className="flex flex-col gap-6">
            <p className="text-white text-base leading-relaxed">
              You know Bitcoin inside out. You don&apos;t just wear Bitcoin, you code it.
              <br /><br />
              <strong>Technical elements, community references, minimalist design: those who know, know.</strong>
              <br /><br />
              You diffuse the code in the chaos?
            </p>
            <Link
              href="/collections/cyphers"
              className="self-start bg-white text-black font-bold text-base py-4 px-8 hover:bg-black hover:text-white transition-colors duration-200 rounded-sm"
            >
              Welcome to your world, Cypher.
            </Link>
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────
          4. OUR DESIGNS
      ────────────────────────────────────────── */}
      <section className="bg-white pt-10 pb-0 px-6">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-4 font-medium">
            The Art
          </p>
          <h2
            className="text-[60px] font-bold text-[#111518] leading-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Our Designs
          </h2>
          <p className="text-[#6b7280] text-base max-w-2xl mx-auto">
            Bitcoin only. No moon dreams. We don&apos;t print fiat or hype. We wear convictions.
          </p>
        </div>
      </section>

      <section className="pt-3 pb-10 px-6" style={{ background: "#ed760a" }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-3 mb-8">
            {DESIGNS.map((file, i) => (
              <Link
                key={i}
                href="/designs"
                className="relative aspect-square overflow-hidden block group"
              >
                <Image
                  src={`/images/designs/${file}`}
                  alt={`Design ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 33vw, 25vw"
                />
              </Link>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              href="/designs"
              className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm tracking-wide hover:bg-white hover:text-[#ed760a] transition-colors duration-200 rounded-sm"
            >
              View All Designs
            </Link>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          5. TRENDING
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-4 font-medium text-center">
            Most Wanted
          </p>
          <h2
            className="text-[60px] font-bold text-[#111518] text-center mb-12"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Trending
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {TRENDING.map((p, i) => (
              <Link key={i} href={`/products/${p.slug}`} className="group flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden bg-[#f5f5f5] max-w-[300px] w-full mx-auto">
                  <Image
                    src={`/images/products/${p.src}`}
                    alt={p.name}
                    fill
                    quality={90}
                    className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.02]"
                    sizes="300px"
                  />
                </div>
                <p className="text-[#111518] text-sm font-semibold mt-1 group-hover:text-[#ed760a] transition-colors">
                  {p.name}
                </p>
                <SatPrice priceEur={p.price} />
              </Link>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link
              href="/products"
              className="inline-block border border-[#111518] text-[#111518] font-semibold px-8 py-3 text-sm hover:bg-[#111518] hover:text-white transition-colors duration-200 rounded-sm"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
