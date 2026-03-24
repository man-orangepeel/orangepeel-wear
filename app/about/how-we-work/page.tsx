import React from "react";
import Image from "next/image";

/* ── Grid icons (large) ─────────────────────────────────────────── */
const ScaleIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="3" x2="12" y2="21" />
    <line x1="7" y1="21" x2="17" y2="21" />
    <line x1="3" y1="7" x2="21" y2="7" />
    <line x1="5" y1="7" x2="3" y2="13" /><line x1="3" y1="13" x2="7" y2="13" /><line x1="5" y1="7" x2="7" y2="13" />
    <line x1="19" y1="7" x2="17" y2="13" /><line x1="17" y1="13" x2="21" y2="13" /><line x1="19" y1="7" x2="21" y2="13" />
  </svg>
);
const DiamondIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 22,9 12,22 2,9" />
    <line x1="2" y1="9" x2="22" y2="9" />
  </svg>
);
const EyeSlashIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const LeafIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 22" />
    <path d="M9.5 12C9.5 12 12 14 15 12c3-2 4-5 2-7-2-2-6-2-9 0-3 2-5 6-4 10" />
  </svg>
);
const BitcoinIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
  </svg>
);
const HeartIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
  </svg>
);

/* ── Sub-point icons ─────────────────────────────────────────────── */
// Ethics
const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ShieldIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);
// Premium
const LayersIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const PenIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
// Privacy
const LockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);
const ZapIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);
// Sustainable
const LeafSmallIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8C8 10 5.9 16.17 3.82 22" />
    <path d="M9.5 12C9.5 12 12 14 15 12c3-2 4-5 2-7-2-2-6-2-9 0-3 2-5 6-4 10" />
  </svg>
);
const RecycleIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="1 4 1 10 7 10" />
    <polyline points="23 20 23 14 17 14" />
    <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
  </svg>
);
// Slow Fashion
const ClockIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
// Bitcoin
const BookIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

/* ── Data ────────────────────────────────────────────────────────── */
const GRID_ITEMS = [
  { id: "ethics",       label: "Ethics",       Icon: ScaleIcon    },
  { id: "premium",      label: "Premium",      Icon: DiamondIcon  },
  { id: "privacy",      label: "Privacy",      Icon: EyeSlashIcon },
  { id: "sustainable",  label: "Sustainable",  Icon: LeafIcon     },
  { id: "bitcoin",      label: "Bitcoin",      Icon: BitcoinIcon  },
  { id: "slow-fashion", label: "Slow Fashion", Icon: HeartIcon    },
];

type SubPoint = { SubIcon: () => React.ReactElement; title: string; body: string };
type Pillar = {
  id: string;
  label: string;
  title: string;
  subtitle: string;
  intro: string;
  points: SubPoint[];
  punchline: string;
  dark: boolean;
  gray: boolean;
  reverse: boolean;
  image: string;
  imageAlt: string;
};

const PILLARS: Pillar[] = [
  {
    id: "ethics",
    label: "Ethics",
    title: "Ethic First.",
    subtitle: "Integrity and Independence.",
    intro: "We don't play by the usual marketing rules. No tricks. No pressure. No masters.",
    points: [
      { SubIcon: CheckIcon,  title: "No fake drops. No hurry.",  body: "You buy when it's right for you. We reject scarcity games and artificial urgency — no FOMO. Where manipulation ends, trust thrives." },
      { SubIcon: ShieldIcon, title: "Fully independent.",        body: "From the first sketch to the last click — no Big Tech, no investors, no platforms. We only answer to our community." },
    ],
    punchline: "Ethics are the soul of our creations. Earning your trust is an honor we strive to deserve.",
    dark: false, gray: false, reverse: false,
    image: "/images/products/5-1-1024x1024.png",
    imageAlt: "Orange Peel — Ethics",
  },
  {
    id: "premium",
    label: "Premium",
    title: "Premium Quality only.",
    subtitle: "Inside and Out.",
    intro: "Because your values live longer than one season, every piece we create is crafted with the utmost care.",
    points: [
      { SubIcon: LayersIcon, title: "High GSM fabrics.",       body: "Thick, durable, and made to last." },
      { SubIcon: PenIcon,    title: "Expert customization.",   body: "We choose embroidery whenever the style allows it, and when the fabric can support its thickness and weight." },
    ],
    punchline: "Whether embroidered or printed, each piece is crafted to be worn, washed, and worn again — not to fade away like trends.",
    dark: true, gray: false, reverse: true,
    image: "/images/products/3-1-1024x1024.png",
    imageAlt: "Orange Peel — Premium",
  },
  {
    id: "privacy",
    label: "Privacy",
    title: "Privacy by Default.",
    subtitle: "Respect by Design.",
    intro: "Your personal data is not a product. We built Orange Peel to respect your privacy.",
    points: [
      { SubIcon: ShieldIcon, title: "No tracking, no targeted ads.",       body: "No centralized platforms pulling the strings. No third-party scripts, no surveillance. Less noise, more clarity." },
      { SubIcon: LockIcon,   title: "No account, no email traps.",        body: "Order freely — no account, no newsletter, no bait for your inbox. Your attention is yours." },
      { SubIcon: ZapIcon,    title: "Anonymous delivery & payments.",     body: "Use locker delivery and pay with BTC — on-chain or Lightning. Fast, private, censorship-resistant." },
    ],
    punchline: "Bitcoin is rare. Privacy is rare. We made it our standard.",
    dark: false, gray: true, reverse: false,
    image: "/images/products/4-1-1024x1024.png",
    imageAlt: "Orange Peel — Privacy",
  },
  {
    id: "sustainable",
    label: "Sustainable",
    title: "Better for Earth.",
    subtitle: "Better for Us.",
    intro: "We choose products and techniques that respect the environment.",
    points: [
      { SubIcon: LeafSmallIcon, title: "Sustainable fabrics.",          body: "Made from organic and recycled materials that reduce our environmental footprint." },
      { SubIcon: RecycleIcon,   title: "Eco-friendly personalization.", body: "We use processes that minimize waste and environmental impact, while ensuring long-lasting durability." },
    ],
    punchline: "We believe conscious production is the future — and doing good feels even better when you wear it.",
    dark: true, gray: false, reverse: true,
    image: "/images/products/6-1-1024x1024.png",
    imageAlt: "Orange Peel — Sustainable",
  },
  {
    id: "slow-fashion",
    label: "Slow Fashion",
    title: "No Guesswork. No Waste.",
    subtitle: "Slow is Strong.",
    intro: "We don't follow the market's tempo. We follow our rules, and your needs.",
    points: [
      { SubIcon: CheckIcon, title: "No mass production. No stock. No waste.", body: "Your piece exists because you chose it. Made just for you — with care, personal, and never designed for the masses." },
      { SubIcon: ClockIcon, title: "Time is a virtue.",                       body: "Made-to-order takes a few days — but that time reflects care and craftsmanship. We reclaim a slower rhythm rooted in meaning." },
    ],
    punchline: "Bitcoin teaches the value of real backing and patience. We won't print clothes like they print money.",
    dark: false, gray: false, reverse: false,
    image: "/images/products/7-2-1024x1024.png",
    imageAlt: "Orange Peel — Slow Fashion",
  },
  {
    id: "bitcoin",
    label: "Bitcoin",
    title: "Freedom to Choose.",
    subtitle: "Your Payment, Your Rules.",
    intro: "Financial freedom isn't just wealth; it's the freedom to choose how you finance your life.",
    points: [
      { SubIcon: ZapIcon,  title: "Bitcoin as a choice.",    body: "We chose Bitcoin as our native payment method — not to impose, but to empower. Unlike fiat, you're free to opt in." },
      { SubIcon: BookIcon, title: "Resources for learning.", body: "New to Bitcoin? Our free resources in \"The Liberation Toolkit\" give you everything you need to get started — easily and safely." },
    ],
    punchline: "Bitcoin gives you the freedom to manage your money. We give you the freedom to choose how you pay.",
    dark: true, gray: false, reverse: true,
    image: "/images/products/9-1-1024x1024.png",
    imageAlt: "Orange Peel — Bitcoin",
  },
];

export default function HowWeWorkPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Our Process
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Way We Peel
          </h1>
          <p className="text-white/85 text-lg max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            This page reveals how we work. Welcome behind the scenes.
          </p>
        </div>
      </section>

      {/* ── Intro heading ── */}
      <section className="bg-white pt-14 pb-4 px-6 text-center">
        <h2
          className="text-[28px] md:text-[36px] font-bold text-[#111518]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Your principles shape how we create.
        </h2>
      </section>

      {/* ── Clickable 3×2 grid ── */}
      <div className="grid grid-cols-3 divide-x divide-y divide-white/20 border-t border-b border-white/20">
        {GRID_ITEMS.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group bg-[#0a0a0a] py-16 px-10 flex flex-col items-center gap-6 hover:bg-[#111] transition-colors duration-200"
          >
            <div className="w-20 h-20 rounded-full border-2 border-white/50 group-hover:border-[#ed760a] flex items-center justify-center transition-colors duration-200">
              <Icon />
            </div>
            <span
              className="text-white text-lg font-medium group-hover:text-[#ed760a] transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Pillar sections ── */}
      {PILLARS.map((pillar) => {
        const bg     = pillar.dark ? "bg-[#0a0a0a]" : pillar.gray ? "bg-[#f9f9f9]" : "bg-white";
        const border = pillar.dark ? "border-white/10" : "border-black/10";
        const textBase   = pillar.dark ? "text-white/70"  : "text-[#687279]";
        const textStrong = pillar.dark ? "text-white"     : "text-[#111518]";
        const subIconBg  = pillar.dark ? "bg-[#ed760a]/20 text-[#ed760a]" : "bg-[#ed760a]/10 text-[#ed760a]";

        return (
          <section
            key={pillar.id}
            id={pillar.id}
            className={`${bg} py-20 px-6 border-t ${border}`}
          >
            <div
              className={`max-w-6xl mx-auto flex flex-col items-center gap-12 md:gap-16 ${
                pillar.reverse ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              {/* Text */}
              <div className="flex-1 flex flex-col gap-6">
                <div>
                  <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3">
                    {pillar.label}
                  </p>
                  <h2
                    className={`text-[36px] md:text-[48px] font-bold leading-tight ${textStrong}`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {pillar.title}
                  </h2>
                  <p className={`text-sm font-medium mt-1 ${textBase}`}>
                    {pillar.subtitle}
                  </p>
                </div>

                <p className={`text-base leading-relaxed ${textBase}`}>
                  {pillar.intro}
                </p>

                <div className={`flex flex-col gap-5 pt-2 border-t ${border}`}>
                  {pillar.points.map(({ SubIcon, title, body }) => (
                    <div key={title} className="flex items-start gap-3">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${subIconBg}`}>
                        <SubIcon />
                      </div>
                      <div>
                        <h3 className={`font-bold text-sm uppercase tracking-widest mb-1 ${textStrong}`}>
                          {title}
                        </h3>
                        <p className={`text-sm leading-relaxed ${textBase}`}>{body}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className={`font-semibold text-base pt-1 ${pillar.dark ? "text-white/90" : textStrong}`}>
                  {pillar.punchline}
                </p>
              </div>

              {/* Image */}
              <div className="md:w-[400px] w-full shrink-0">
                <div
                  className="relative aspect-square overflow-hidden"
                  style={{ background: pillar.dark ? "#111" : "#f0f0f0" }}
                >
                  <Image src={pillar.image} alt={pillar.imageAlt} fill className="object-cover" />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── Brand separator ── */}
      <div className="h-[3px] bg-[#ed760a]" />
    </>
  );
}
