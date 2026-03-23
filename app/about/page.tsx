import Link from "next/link";
import Image from "next/image";

/* ── Inline SVG icons ───────────────────────────────────────────── */
const BitcoinIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
  </svg>
);
const BrandIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 22,8.5 12,15 2,8.5" />
    <polyline points="2,15.5 12,22 22,15.5" />
    <polyline points="2,12 12,18.5 22,12" />
  </svg>
);
const NameIcon = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="9" x2="20" y2="9" />
    <line x1="4" y1="15" x2="20" y2="15" />
    <line x1="10" y1="3" x2="8" y2="21" />
    <line x1="16" y1="3" x2="14" y2="21" />
  </svg>
);

/* ── Small section sub-icons ─────────────────────────────────────── */
const FlameIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0011 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 11-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 002.5 3z" />
  </svg>
);
const SwordIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="14.5 17.5 3 6 3 3 6 3 17.5 14.5" />
    <line x1="13" y1="19" x2="19" y2="13" />
    <line x1="16" y1="16" x2="20" y2="20" />
    <line x1="19" y1="21" x2="21" y2="19" />
  </svg>
);
const StarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
  </svg>
);

const GRID_ITEMS = [
  { id: "why-i-build", label: "A Bitcoiner", Icon: BitcoinIcon },
  { id: "genesis",     label: "A Brand",     Icon: BrandIcon  },
  { id: "pill-name",   label: "A Name",      Icon: NameIcon   },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="min-h-[55vh] flex flex-col justify-end px-8 pb-16 -mt-[70px]"
        style={{ background: "linear-gradient(160deg, #ffbe2e 0%, #ed760a 100%)", paddingTop: "calc(70px + 3rem)" }}
      >
        <p className="text-black/40 text-sm mb-3 tracking-widest uppercase">
          — Who We Are
        </p>
        <h1
          className="text-[72px] md:text-[110px] font-bold text-[#111518] leading-none mb-5"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          The Orange We Are
        </h1>
        <p className="text-[#111518]/80 text-lg max-w-xl">
          A glimpse into our vision and story.
        </p>
      </section>

      {/* ── Intro heading ── */}
      <section className="bg-white pt-16 pb-6 px-6 text-center">
        <h2
          className="text-[28px] md:text-[36px] font-bold text-[#111518]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Let&apos;s share
        </h2>
      </section>

      {/* ── Clickable grid ── */}
      <div className="grid grid-cols-3 divide-x divide-white/10 border-t border-b border-white/10">
        {GRID_ITEMS.map(({ id, label, Icon }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group bg-[#0a0a0a] py-14 px-6 flex flex-col items-center gap-5 hover:bg-[#111] transition-colors duration-200"
          >
            <div className="w-16 h-16 rounded-full border-2 border-white/50 group-hover:border-[#ed760a] flex items-center justify-center transition-colors duration-200">
              <Icon />
            </div>
            <span
              className="text-white text-base font-medium group-hover:text-[#ed760a] transition-colors duration-200"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {label}
            </span>
          </a>
        ))}
      </div>

      {/* ── Why I build Orange ── text left / image right */}
      <section id="why-i-build" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Text */}
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

            {/* Sub-points */}
            <div className="flex flex-col gap-5 pt-2 border-t border-black/10">
              {[
                {
                  Icon: FlameIcon,
                  title: "A path of character",
                  body: "Like a warrior or a wizard walking his own path with humility, the Bitcoin hodler sharpens his mind, tempers his emotions, and defends his world with unwavering conviction.",
                },
                {
                  Icon: SwordIcon,
                  title: "A new kind of society",
                  body: "Bitcoin demands integrity — and rewards it by entrusting power, responsibility and freedom to those who choose to embody them.",
                },
                {
                  Icon: StarIcon,
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

          {/* Image */}
          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
              <Image
                src="/images/products/1-1-1024x1024.png"
                alt="Orange Peel — A Bitcoiner"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── The Genesis ── image left / text right */}
      <section id="genesis" className="bg-[#0a0a0a] py-20 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse gap-12 md:gap-16 items-center">
          {/* Text */}
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

            {/* Collections */}
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

          {/* Image */}
          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#111]">
              <Image
                src="/images/products/10-1024x1024.png"
                alt="Orange Peel — The Genesis"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── You mean 'Pill'? ── text left / image right */}
      <section id="pill-name" className="bg-[#f9f9f9] py-20 px-6 border-t border-black/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-16 items-center">
          {/* Text */}
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

            {/* Sub-points */}
            <div className="flex flex-col gap-5 pt-2 border-t border-black/10">
              {[
                {
                  symbol: "①",
                  title: "No direct Bitcoin reference",
                  body: "There is no direct reference to Bitcoin, not even the famous \"orange pill\" — it can be worn anywhere, by anyone.",
                },
                {
                  symbol: "②",
                  title: "Peeling as awakening",
                  body: "The concept of peeling resonates deeply with Bitcoin's core philosophy: shedding layers of conditioning to regain clarity about how the world really works.",
                },
                {
                  symbol: "③",
                  title: "Happy accidents",
                  body: "Peel/pill echoes hold/hodl. And what are the odds that Bitcoin's color also happens to be a fruit? Without that coincidence, Orange Peel wouldn't hold the same metaphorical power.",
                },
              ].map(({ symbol, title, body }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-[#ed760a] flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-white text-xs font-bold">{symbol}</span>
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

          {/* Image */}
          <div className="md:w-[420px] w-full shrink-0">
            <div className="relative aspect-square overflow-hidden bg-[#f0f0f0]">
              <Image
                src="/images/products/2-1024x1024.png"
                alt="Orange Peel — The Name"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#0a0a0a] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6">
          <h2
            className="text-[36px] font-bold text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to go deeper?
          </h2>
          <p className="text-white/60 text-base">
            Explore how we work, discover the collections, or start your Bitcoin education.
          </p>
          <div className="flex gap-4 flex-wrap justify-center">
            <Link
              href="/collections"
              className="inline-block bg-[#ed760a] text-black font-bold px-8 py-3 text-sm hover:bg-[#efa813] transition-colors duration-200"
              style={{ borderRadius: "5px" }}
            >
              Explore Collections
            </Link>
            <Link
              href="/about/how-we-work"
              className="inline-block border border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white hover:text-black transition-colors duration-200"
              style={{ borderRadius: "5px" }}
            >
              The Way We Peel
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
