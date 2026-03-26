"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";

type Collection = "all" | "warriors" | "wizards" | "cyphers";

const DESIGN_DATA: { file: string; collection: Omit<Collection, "all"> }[] = [
  // Warriors — bold, statement, orange energy
  { file: "0003.0-Barbie-for-Girls-Bitcoin-for-Women-1024x1024.png", collection: "warriors" },
  { file: "0004.0-Percept-vs.-Real-1-1024x1024.png",                collection: "warriors" },
  { file: "1-1-1024x1024.png",                                       collection: "warriors" },
  { file: "1-2-1024x1024.png",                                       collection: "warriors" },
  { file: "1-3-1024x1024.png",                                       collection: "warriors" },
  { file: "1-4-1024x1024.png",                                       collection: "warriors" },
  { file: "1-5-1024x1024.png",                                       collection: "warriors" },
  { file: "1-6-1024x1024.png",                                       collection: "warriors" },
  { file: "13-1-1024x1024.png",                                      collection: "warriors" },
  { file: "13-2-1024x1024.png",                                      collection: "warriors" },
  { file: "13-3-1024x1024.png",                                      collection: "warriors" },
  { file: "13-4-1024x1024.png",                                      collection: "warriors" },
  { file: "13-5-1024x1024.png",                                      collection: "warriors" },
  { file: "13-6-1024x1024.png",                                      collection: "warriors" },
  { file: "13-7-1024x1024.png",                                      collection: "warriors" },
  { file: "13-1024x1024.png",                                        collection: "warriors" },
  { file: "13bis-1024x1024.png",                                     collection: "warriors" },
  { file: "14-1-1024x1024.png",                                      collection: "warriors" },
  { file: "14-2-1024x1024.png",                                      collection: "warriors" },
  { file: "14-3-1024x1024.png",                                      collection: "warriors" },
  { file: "14-4-1024x1024.png",                                      collection: "warriors" },
  { file: "14-5-1024x1024.png",                                      collection: "warriors" },
  { file: "14-6-1024x1024.png",                                      collection: "warriors" },
  { file: "14-7-1024x1024.png",                                      collection: "warriors" },
  { file: "14-8-1024x1024.png",                                      collection: "warriors" },
  { file: "14-9-1024x1024.png",                                      collection: "warriors" },
  { file: "14-10-1024x1024.png",                                     collection: "warriors" },
  { file: "14-1024x1024.png",                                        collection: "warriors" },
  { file: "14bis-1024x1024.png",                                     collection: "warriors" },
  { file: "17-1024x1024.png",                                        collection: "warriors" },
  { file: "19-1024x1024.png",                                        collection: "warriors" },

  // Wizards — subtle, mystical, purple depth
  { file: "1bis-1-1024x1024.png",  collection: "wizards" },
  { file: "1bis-2-1024x1024.png",  collection: "wizards" },
  { file: "1bis-3-1024x1024.png",  collection: "wizards" },
  { file: "1bis-4-1024x1024.png",  collection: "wizards" },
  { file: "1bis-1024x1024.png",    collection: "wizards" },
  { file: "5-1-1024x1024.png",     collection: "wizards" },
  { file: "5-2-1024x1024.png",     collection: "wizards" },
  { file: "5-3-1024x1024.png",     collection: "wizards" },
  { file: "5-4-1024x1024.png",     collection: "wizards" },
  { file: "5-5-1024x1024.png",     collection: "wizards" },
  { file: "5-7-1024x1024.png",     collection: "wizards" },
  { file: "5-8-1024x1024.png",     collection: "wizards" },
  { file: "5-9-1024x1024.png",     collection: "wizards" },
  { file: "6-1-1024x1024.png",     collection: "wizards" },
  { file: "6-2-1024x1024.png",     collection: "wizards" },
  { file: "6-3-1024x1024.png",     collection: "wizards" },
  { file: "6-4-1024x1024.png",     collection: "wizards" },
  { file: "6-5-1024x1024.png",     collection: "wizards" },
  { file: "6-7-1024x1024.png",     collection: "wizards" },
  { file: "6-8-1024x1024.png",     collection: "wizards" },
  { file: "6-9-1024x1024.png",     collection: "wizards" },
  { file: "7-1024x1024.png",       collection: "wizards" },
  { file: "7-2-1024x1024.png",     collection: "wizards" },
  { file: "7-3-1024x1024.png",     collection: "wizards" },
  { file: "7-4-1024x1024.png",     collection: "wizards" },
  { file: "7-5-1024x1024.png",     collection: "wizards" },
  { file: "7-6-1024x1024.png",     collection: "wizards" },
  { file: "8-1024x1024.png",       collection: "wizards" },
  { file: "8-2-1024x1024.png",     collection: "wizards" },
  { file: "8-3-1024x1024.png",     collection: "wizards" },
  { file: "8-4-1024x1024.png",     collection: "wizards" },
  { file: "15-1-1024x1024.png",    collection: "wizards" },
  { file: "15-2-1024x1024.png",    collection: "wizards" },
  { file: "15-3-1024x1024.png",    collection: "wizards" },
  { file: "15-1024x1024.png",      collection: "wizards" },
  { file: "16-1-1024x1024.png",    collection: "wizards" },
  { file: "16-1024x1024.png",      collection: "wizards" },

  // Cyphers — encoded, tech, dark
  { file: "0006.0-Satoshi-I-dont-have-time-1024x1024.png", collection: "cyphers" },
  { file: "2-1-1024x1024.png",    collection: "cyphers" },
  { file: "2-1024x1024.png",      collection: "cyphers" },
  { file: "2-2-1024x1024.png",    collection: "cyphers" },
  { file: "2-4-1024x1024.png",    collection: "cyphers" },
  { file: "2-5-1024x1024.png",    collection: "cyphers" },
  { file: "2-6-1024x1024.png",    collection: "cyphers" },
  { file: "2-7-1024x1024.png",    collection: "cyphers" },
  { file: "3-1-1024x1024.png",    collection: "cyphers" },
  { file: "3-2-1024x1024.png",    collection: "cyphers" },
  { file: "3-3-1024x1024.png",    collection: "cyphers" },
  { file: "3-4-1024x1024.png",    collection: "cyphers" },
  { file: "3-6-1024x1024.png",    collection: "cyphers" },
  { file: "3-7-1024x1024.png",    collection: "cyphers" },
  { file: "3-8-1024x1024.png",    collection: "cyphers" },
  { file: "3bis-1-1024x1024.png", collection: "cyphers" },
  { file: "3bis-1024x1024.png",   collection: "cyphers" },
  { file: "4-1-1024x1024.png",    collection: "cyphers" },
  { file: "4-1024x1024.png",      collection: "cyphers" },
  { file: "4-2-1024x1024.png",    collection: "cyphers" },
  { file: "4-3-1024x1024.png",    collection: "cyphers" },
  { file: "4-5-1024x1024.png",    collection: "cyphers" },
  { file: "4-6-1024x1024.png",    collection: "cyphers" },
  { file: "4-7-1024x1024.png",    collection: "cyphers" },
  { file: "4-8-1024x1024.png",    collection: "cyphers" },
  { file: "4-9-1024x1024.png",    collection: "cyphers" },
  { file: "9-1024x1024.png",      collection: "cyphers" },
  { file: "9-2-1024x1024.png",    collection: "cyphers" },
  { file: "9-3-1024x1024.png",    collection: "cyphers" },
  { file: "9-4-1024x1024.png",    collection: "cyphers" },
  { file: "9-5-1024x1024.png",    collection: "cyphers" },
  { file: "9-6-1024x1024.png",    collection: "cyphers" },
  { file: "9-7-1024x1024.png",    collection: "cyphers" },
  { file: "9bis-1024x1024.png",   collection: "cyphers" },
  { file: "10-1024x1024.png",     collection: "cyphers" },
  { file: "10-1-1024x1024.png",   collection: "cyphers" },
  { file: "10-2-1024x1024.png",   collection: "cyphers" },
  { file: "10-3-1024x1024.png",   collection: "cyphers" },
  { file: "10-4-1024x1024.png",   collection: "cyphers" },
  { file: "10-5-1024x1024.png",   collection: "cyphers" },
  { file: "10-6-1024x1024.png",   collection: "cyphers" },
  { file: "10-7-1024x1024.png",   collection: "cyphers" },
  { file: "11-1024x1024.png",     collection: "cyphers" },
  { file: "11-1-1024x1024.png",   collection: "cyphers" },
  { file: "11-2-1024x1024.png",   collection: "cyphers" },
  { file: "11-3-1024x1024.png",   collection: "cyphers" },
  { file: "11-4-1024x1024.png",   collection: "cyphers" },
  { file: "11-5-1024x1024.png",   collection: "cyphers" },
  { file: "11-6-1024x1024.png",   collection: "cyphers" },
  { file: "11-7-1024x1024.png",   collection: "cyphers" },
  { file: "12-1024x1024.png",     collection: "cyphers" },
  { file: "12-1-1024x1024.png",   collection: "cyphers" },
  { file: "12-2-1024x1024.png",   collection: "cyphers" },
  { file: "12-3-1024x1024.png",   collection: "cyphers" },
  { file: "12-4-1024x1024.png",   collection: "cyphers" },
  { file: "12-5-1024x1024.png",   collection: "cyphers" },
  { file: "12-6-1024x1024.png",   collection: "cyphers" },
  { file: "12-7-1024x1024.png",   collection: "cyphers" },
  { file: "12-8-1024x1024.png",   collection: "cyphers" },
  { file: "12bis-1024x1024.png",  collection: "cyphers" },
];

const CAROUSEL_FILES = [
  "13-7-1024x1024.png",
  "1bis-3-1024x1024.png",
  "14-8-1024x1024.png",
  "0006.0-Satoshi-I-dont-have-time-1024x1024.png",
  "9-7-1024x1024.png",
  "5-1-1024x1024.png",
  "1-1-1024x1024.png",
  "12-4-1024x1024.png",
];

const FILTERS: { label: string; value: Collection }[] = [
  { label: "All", value: "all" },
  { label: "Warriors", value: "warriors" },
  { label: "Wizards", value: "wizards" },
  { label: "Cyphers", value: "cyphers" },
];

const PER_PAGE = 24;

export default function DesignsPage() {
  const [active, setActive] = useState<Collection>("all");
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [page, setPage] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const total = CAROUSEL_FILES.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  useEffect(() => { setPage(0); }, [active]);

  const filtered =
    active === "all"
      ? DESIGN_DATA
      : DESIGN_DATA.filter((d) => d.collection === active);

  // Keyboard navigation for lightbox (après la déclaration de filtered)
  useEffect(() => {
    if (lightboxIdx === null) return;
    const total = filtered.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft")  setLightboxIdx((i) => i !== null ? (i - 1 + total) % total : null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? (i + 1) % total : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxIdx, filtered.length]);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const pageItems = filtered.slice(page * PER_PAGE, (page + 1) * PER_PAGE);

  return (
    <>
      {/* ── Header ── */}
      <section
        className="-mt-[70px] pb-10 px-6"
        style={{ background: "radial-gradient(ellipse at 50% 0%, #ffbe2e 0%, #ed760a 50%, #c05800 100%)", paddingTop: "calc(70px + 2rem)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-white/60 text-sm tracking-widest uppercase mb-4 font-medium">
            Suit Up For Freedom
          </p>
          <h1
            className="text-[60px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All Our Designs
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            One design — One statement.
          </p>
        </div>
      </section>

      {/* ── Carousel — fond blanc, frame brand identity ── */}
      <section
        className="relative bg-white flex items-center justify-center py-12 overflow-hidden"
        style={{ minHeight: "520px" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Frame brand + image */}
        <div className="relative" style={{ width: "min(480px, 80vw)", aspectRatio: "1" }}>
          {/* Corner brackets orange */}
          <span className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-[#ed760a]" />
          <span className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-[#ed760a]" />
          <span className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-[#ed760a]" />
          <span className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-[#ed760a]" />
          <Image
            src={`/images/designs/${CAROUSEL_FILES[current]}`}
            alt={`Design ${current + 1}`}
            fill
            className="object-contain p-8 transition-opacity duration-500"
            sizes="480px"
            priority={current === 0}
          />
        </div>

        {/* Flèche gauche */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/8 flex items-center justify-center hover:bg-[#ed760a]/15 transition-colors"
          aria-label="Previous"
        >
          <svg className="w-5 h-5 text-[#111518]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>

        {/* Flèche droite */}
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/8 flex items-center justify-center hover:bg-[#ed760a]/15 transition-colors"
          aria-label="Next"
        >
          <svg className="w-5 h-5 text-[#111518]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 flex gap-2">
          {CAROUSEL_FILES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-200 ${
                i === current ? "bg-[#ed760a] w-5" : "bg-black/20 w-1.5 hover:bg-black/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-white pt-12 pb-0 px-6 border-b border-black/10">
        <div className="max-w-6xl mx-auto flex gap-0">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-6 py-3 text-sm font-semibold border-b-2 transition-colors ${
                active === f.value
                  ? "border-[#ed760a] text-[#111518]"
                  : "border-transparent text-[#6b7280] hover:text-[#111518]"
              }`}
            >
              {f.label}
              <span className="ml-2 text-xs text-[#6b7280]">
                (
                {f.value === "all"
                  ? DESIGN_DATA.length
                  : DESIGN_DATA.filter((d) => d.collection === f.value).length}
                )
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* ── Grid 3 colonnes paginée ── */}
      <section className="bg-white py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {pageItems.map((d, i) => {
              const globalIdx = page * PER_PAGE + i;
              return (
                <button
                  key={`${d.file}-${i}`}
                  onClick={() => setLightboxIdx(globalIdx)}
                  className="relative aspect-square overflow-hidden bg-[#f5f5f5] group block cursor-pointer"
                  aria-label={`Voir design ${globalIdx + 1}`}
                >
                  <Image
                    src={`/images/designs/${d.file}`}
                    alt={`Design ${globalIdx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
                </button>
              );
            })}
          </div>

          {/* ── Pagination ── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={() => { setPage((p) => Math.max(0, p - 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                disabled={page === 0}
                className="w-10 h-10 flex items-center justify-center border border-black/20 rounded-sm text-[#111518] hover:border-[#ed760a] hover:text-[#ed760a] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Page précédente"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
              </button>

              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i}
                    onClick={() => { setPage(i); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    className={`w-9 h-9 text-sm font-medium rounded-sm transition-colors ${
                      i === page
                        ? "bg-[#ed760a] text-black"
                        : "text-[#6b7280] hover:text-[#111518]"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              <button
                onClick={() => { setPage((p) => Math.min(totalPages - 1, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                disabled={page === totalPages - 1}
                className="w-10 h-10 flex items-center justify-center border border-black/20 rounded-sm text-[#111518] hover:border-[#ed760a] hover:text-[#ed760a] transition-colors disabled:opacity-30 disabled:pointer-events-none"
                aria-label="Page suivante"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#f8f6f3] py-16 px-6 pb-24 text-center border-t border-black/5">
        <p className="text-[#6b7280] text-sm mb-6">Ready to wear a design?</p>
        <a
          href="/products"
          className="inline-block bg-[#ed760a] text-black font-bold px-10 py-4 text-sm hover:bg-[#efa813] transition-colors rounded-sm"
        >
          Browse Products →
        </a>
      </section>

      {/* ── Lightbox ── */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 bg-black/92 z-50 flex flex-col items-center justify-center"
          onClick={() => setLightboxIdx(null)}
          ref={lightboxRef}
        >
          {/* Image — full width on mobile, fixed size on desktop */}
          <div
            className="relative w-full aspect-square md:aspect-auto md:w-[min(700px,90vw)] md:h-[min(700px,85vh)]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={`/images/designs/${filtered[lightboxIdx].file}`}
              alt={`Design ${lightboxIdx + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 700px"
              priority
            />
          </div>

          {/* Flèches mobile — en dessous de l'image */}
          <div
            className="flex md:hidden justify-between w-full px-6 mt-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null)}
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="Précédent"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>
            <button
              onClick={() => setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null)}
              className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="Suivant"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>

          {/* Compteur */}
          <p className="mt-3 md:absolute md:bottom-5 md:left-1/2 md:-translate-x-1/2 text-white/40 text-xs tracking-widest" onClick={(e) => e.stopPropagation()}>
            {lightboxIdx + 1} / {filtered.length}
          </p>

          {/* Fermer */}
          <button
            onClick={() => setLightboxIdx(null)}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Précédent — desktop uniquement */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null); }}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 items-center justify-center hover:bg-white/25 transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Suivant — desktop uniquement */}
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i + 1) % filtered.length : null); }}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 items-center justify-center hover:bg-white/25 transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
