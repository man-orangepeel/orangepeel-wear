import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Orange We Are",
  description: "Born from Bitcoin conviction — who we are, why we create, and what we stand for.",
  openGraph: { url: "https://orangepeel.fr/about" },
};

import Link from "next/link";
import Image from "next/image";

/* ── Grid icons (large) ─────────────────────────────────────────── */
const BitcoinIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
  </svg>
);
const BrandIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 22,8.5 12,15 2,8.5" />
    <polyline points="2,15.5 12,22 22,15.5" />
    <polyline points="2,12 12,18.5 22,12" />
  </svg>
);
const NameIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

/* ── Section sub-icons ───────────────────────────────────────────── */
// Why I build Orange
const CompassIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
const GlobeIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const TagIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
    <line x1="7" y1="7" x2="7.01" y2="7" />
  </svg>
);
// You mean Pill?
const EyeOffIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
const LayersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);
const SparkleIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v1M12 20v1M4.22 4.22l.71.71M19.07 4.22l-.71.71M1 12h1M22 12h-1M4.93 19.07l.71-.71M18.36 19.07l-.71-.71" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);

const CommunityIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2v4l-4-4H9a2 2 0 0 1-2-2v-1" />
    <path d="M15 1H3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4l4-4h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2z" />
  </svg>
);

const GRID_ITEMS = [
  { id: "why-i-build",  label: "A Bitcoiner",  Icon: BitcoinIcon   },
  { id: "genesis",      label: "A Brand",      Icon: BrandIcon     },
  { id: "pill-name",    label: "A Name",       Icon: NameIcon      },
  { id: "in-the-wild",  label: "In the Wild",  Icon: CommunityIcon },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            About Us
          </p>
          <h1
            className="text-[44px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The Orange We Are
          </h1>
          <p className="text-white/85 text-lg max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            A glimpse into our vision and story.
          </p>
        </div>
      </section>

      {/* ── Intro heading ── */}
      <section className="bg-white pt-14 pb-4 px-6 text-center">
        <h2
          className="text-[28px] md:text-[36px] font-bold text-[#111518]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s share
        </h2>
      </section>

      {/* ── Clickable grid ── */}
      <div className="bg-white py-6 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
        {GRID_ITEMS.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group bg-[#0a0a0a] py-[43px] px-6 flex flex-col items-center gap-6 hover:bg-[#111] transition-colors duration-200"
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
      </div>

      {/* ── Why I build Orange ── text left / image right */}
      <section id="why-i-build" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3">Origin</p>
              <h2
                className="text-[38px] md:text-[50px] font-bold text-[#111518] leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Why I build Orange
              </h2>
            </div>
            <p className="text-[#111518] text-base leading-relaxed">
              As a child, I served a family. As an engineer, I served the environment.
              As a coach, I served the human spirit.
              As an entrepreneur and Bitcoiner, I serve a societal project.
            </p>
            <p className="text-[#687279] text-base leading-relaxed">
              I don&apos;t think Bitcoin really changed me — but it empowered me beyond what I ever imagined.
              It&apos;s the only tool I&apos;ve found that is truly incorruptible, universal, and aligned
              with justice, sovereignty, and respect for life.
            </p>

            <div className="flex flex-col gap-5 pt-2 border-t border-black/10">
              {[
                {
                  Icon: CompassIcon,
                  title: "A path of character",
                  body: "Like a warrior or a wizard walking his own path with humility, the Bitcoin hodler sharpens his mind, tempers his emotions, and defends his world with unwavering conviction.",
                },
                {
                  Icon: GlobeIcon,
                  title: "A new kind of society",
                  body: "Bitcoin demands integrity — and rewards it by entrusting power, responsibility and freedom to those who choose to embody them.",
                },
                {
                  Icon: TagIcon,
                  title: "Values made wearable",
                  body: "I make values, vision, and action wearable. It's one of the ways I choose to contribute to the world I want to see.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ed760a]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#ed760a]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-[#111518] mb-1">
                      {title}
                    </h3>
                    <p className="text-[#687279] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#ed760a] font-semibold text-base pt-2">
              Let&apos;s live our truth.
            </p>
          </div>

          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
              <Image src="/images/products/1-1-1024x1024.png" alt="Orange Peel — A Bitcoiner" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── The Genesis ── image left / text right */}
      <section id="genesis" className="bg-[#0a0a0a] py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3">The Story</p>
              <h2
                className="text-[38px] md:text-[50px] font-bold text-white leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                The Genesis
              </h2>
            </div>
            <p className="text-white/70 text-base leading-relaxed">
              I admired friends who were launching their own brands. Years later, Bitcoin came into
              my life and became the very soul of mine.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Many crypto merch focus on the speculative, get-rich-quick mindset. But I wanted to
              honor the vision of Satoshi and those who&apos;ve carried the flame ever since.{" "}
              <span className="text-white font-medium">Bitcoin-only. Principles-first. No hype. No noise.</span>
            </p>

            <div className="flex flex-col gap-4 pt-2 border-t border-white/10">
              {[
                { name: "The Wizards", desc: "For those who prefer to signal quietly.", href: "/collections/wizards" },
                { name: "The Warriors", desc: "For those who speak loud and wear their beliefs.", href: "/collections/warriors" },
                { name: "The Cyphers", desc: "For those who know the code and live the ethos.", href: "/collections/cyphers" },
              ].map(({ name, desc, href }) => (
                <Link key={name} href={href} className="group flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full border border-white/20 group-hover:border-[#ed760a] flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-white group-hover:text-[#ed760a] transition-colors duration-200 mb-0.5">
                      {name}
                    </h3>
                    <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                  </div>
                </Link>
              ))}
            </div>

            <p className="text-white font-semibold text-base pt-1">
              Welcome to the Orange Peel hole.
            </p>
          </div>

          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#111]">
              <Image src="/images/products/10-1024x1024.png" alt="Orange Peel — The Genesis" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── You mean 'Pill'? ── text left / image right */}
      <section id="pill-name" className="bg-[#f9f9f9] py-20 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3">The Name</p>
              <h2
                className="text-[38px] md:text-[50px] font-bold text-[#111518] leading-tight"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                You mean &lsquo;Pill&rsquo;?
              </h2>
            </div>
            <p className="text-[#111518] text-base leading-relaxed">
              Spreading Bitcoin is about &ldquo;orange-pilling&rdquo; — that&apos;s the whole idea
              behind the brand. Then, my imperfect grasp of English made me hesitate between
              &ldquo;pill&rdquo; and &ldquo;peel.&rdquo; That&apos;s when I fell in love with{" "}
              <strong>&ldquo;Orange Peel.&rdquo;</strong>
            </p>

            <div className="flex flex-col gap-5 pt-2 border-t border-black/10">
              {[
                {
                  Icon: EyeOffIcon,
                  title: "No direct Bitcoin reference",
                  body: "There is no direct reference to Bitcoin, not even the famous \"orange pill\" — it can be worn anywhere, by anyone.",
                },
                {
                  Icon: LayersIcon,
                  title: "Peeling as awakening",
                  body: "The concept of peeling resonates deeply with Bitcoin's core philosophy: shedding layers of conditioning to regain clarity about how the world really works.",
                },
                {
                  Icon: SparkleIcon,
                  title: "Happy accidents",
                  body: "Peel/pill echoes hold/hodl. And what are the odds that Bitcoin's color also happens to be a fruit? Without that coincidence, Orange Peel wouldn't hold the same metaphorical power.",
                },
              ].map(({ Icon, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ed760a]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#ed760a]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm uppercase tracking-widest text-[#111518] mb-1">
                      {title}
                    </h3>
                    <p className="text-[#687279] text-sm leading-relaxed">{body}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#111518] font-semibold text-base pt-1">
              From now on, I no longer see an orange pill — I see a beautiful mind being unpeeled,
              like an orange revealing its richness.
            </p>
          </div>

          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
              <Image src="/images/products/2-1024x1024.png" alt="Orange Peel — The Name" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── In the Wild ── */}
      <section id="in-the-wild" className="bg-white py-20 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col gap-12">
          <div>
            <p className="text-[#ed760a] text-sm tracking-widest uppercase mb-3">Beyond the Clothes</p>
            <h2
              className="text-[38px] md:text-[50px] font-bold text-[#111518] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              In the Wild
            </h2>
            <p className="text-[#687279] text-base mt-4 max-w-xl">
              Orange Peel isn&apos;t just a brand. It&apos;s a posture — and it shows up in the world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* OrangePeel Flow */}
            <div className="flex flex-col gap-5 bg-[#0a0a0a] p-8 rounded-sm">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ed760a]/15 flex items-center justify-center shrink-0 text-[#ed760a]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                </div>
                <span className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">Telegram Channel</span>
              </div>
              <h3 className="text-white text-[22px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                OrangePeel Flow
              </h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Every day: a sharp meme, an incisive take on adoption news, key fundamentals. A weekly community poll and a recap to close the loop. No altcoins, no speculation, no ads — pure signal, for beginners and seasoned Bitcoiners alike.
              </p>
              <p className="text-white/35 text-xs">In French for now — yes, I&apos;m French.</p>
              <a
                href="https://t.me/OrangePeel_Flow"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start flex items-center gap-2 bg-[#ed760a] text-black font-bold px-6 py-2.5 text-sm hover:bg-[#efa813] transition-colors rounded-sm mt-auto"
              >
                Join the Channel
              </a>
            </div>

            {/* Meetup Bitcoin Nantes */}
            <div className="flex flex-col gap-5 bg-[#f8f6f3] p-8 rounded-sm border border-black/8">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#ed760a]/10 flex items-center justify-center shrink-0 text-[#ed760a]">
                  <svg width="18" height="18" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <span className="text-[#ed760a] text-xs uppercase tracking-widest font-semibold">Nantes · Every 2nd Thursday</span>
              </div>
              <h3 className="text-[#111518] text-[22px] font-bold" style={{ fontFamily: "var(--font-heading)" }}>
                MeetUp Bitcoin Nantes
              </h3>
              <p className="text-[#687279] text-sm leading-relaxed">
                Free meetups open to all — novices, experts, merchants. Talks, workshops, and good company in{" "}
                <strong className="text-[#111518]">Nantes, France</strong>.
              </p>
              <p className="text-[#687279] text-xs italic">I run this meetup — see you there.</p>
              <div className="flex gap-3 mt-auto flex-wrap">
                <a
                  href="https://meetup.orangepeel.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#111518] text-white font-bold px-5 py-2.5 text-sm hover:bg-[#222] transition-colors rounded-sm"
                >
                  Learn More
                </a>
                <a
                  href="https://t.me/meetupbitcoinnantes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 border border-black/20 text-[#111518] font-medium px-5 py-2.5 text-sm hover:border-[#ed760a] hover:text-[#ed760a] transition-colors rounded-sm"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </svg>
                  Telegram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
