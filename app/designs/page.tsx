"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";
import designsData from "../../data/designs.json";
import ShareButton from "@/components/ShareButton";

type Collection = "all" | "warriors" | "wizards" | "cyphers";

const DESIGN_DATA = (designsData.designs as { file: string; title: string; collection: Omit<Collection, "all">; published: boolean }[])
  .filter((d) => d.published !== false);

const FILTERS: { label: string; value: Collection }[] = [
  { label: "All", value: "all" },
  { label: "Warriors", value: "warriors" },
  { label: "Wizards", value: "wizards" },
  { label: "Cyphers", value: "cyphers" },
];

const PER_PAGE = 24;

/** Hash déterministe d'une string — même fichier = même valeur à chaque visite */
function hashStr(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = ((h << 5) - h + s.charCodeAt(i)) | 0;
  }
  return h;
}

/** Shuffle déterministe basé sur un seed fixe (hash des titres) */
function deterministicShuffle<T extends { file: string; title: string }>(arr: T[]): T[] {
  return [...arr].sort((a, b) => hashStr(a.title) - hashStr(b.title));
}

export default function DesignsPage() {
  const [active, setActive] = useState<Collection>("all");
  const [page, setPage] = useState(0);
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setPage(0); }, [active]);

  const filtered = useMemo(() => {
    const base = active === "all"
      ? DESIGN_DATA
      : DESIGN_DATA.filter((d) => d.collection === active);
    return deterministicShuffle(base);
  }, [active]);

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
            className="text-[44px] md:text-[80px] font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            All Our Designs
          </h1>
          <p className="text-white/85 text-lg leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-heading)" }}>
            One design — One statement.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ── */}
      <section className="bg-white pt-12 pb-0 px-6 border-b border-black/10">
        <div className="max-w-6xl mx-auto flex gap-0 overflow-x-auto">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-3 text-sm font-semibold border-b-2 transition-colors whitespace-nowrap ${
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
                  aria-label={d.title || `Voir design ${globalIdx + 1}`}
                >
                  <Image
                    src={`/images/designs/${d.file}`}
                    alt={d.title || `Design ${globalIdx + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <span className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-200" />
                  {d.title && (
                    <span className="absolute bottom-0 left-0 right-0 p-3 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-gradient-to-t from-black/60 to-transparent">
                      {d.title}
                    </span>
                  )}
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
          className="fixed inset-0 bg-black/92 z-50 flex flex-col items-center"
          onClick={() => setLightboxIdx(null)}
          ref={lightboxRef}
        >
          {/* Zone image — flex-1 garantit qu'elle ne déborde jamais sur les contrôles */}
          <div
            className="flex-1 flex items-center justify-center w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full aspect-square md:aspect-auto md:w-[min(700px,90vw)] md:h-[min(620px,75vh)]">
              <Image
                src={`/images/designs/${filtered[lightboxIdx].file}`}
                alt={`Design ${lightboxIdx + 1}`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 700px"
                priority
              />
            </div>

            {/* Précédent — desktop, ancré sur la zone image */}
            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i - 1 + filtered.length) % filtered.length : null); }}
              className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 items-center justify-center hover:bg-white/25 transition-colors"
              aria-label="Précédent"
            >
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Suivant — desktop, ancré sur la zone image */}
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

          {/* Barre du bas — toujours visible, jamais superposée à l'image */}
          <div
            className="flex flex-col items-center gap-3 pt-4 pb-6 w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Titre du design */}
            {filtered[lightboxIdx].title && (
              <p className="text-white text-lg font-semibold text-center px-6" style={{ fontFamily: "var(--font-heading)" }}>
                {filtered[lightboxIdx].title}
              </p>
            )}
            {/* Flèches mobile */}
            <div className="flex md:hidden justify-between w-full px-6">
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

            {/* Partage — URL directe de l'image (WhatsApp/Telegram l'affichent en aperçu) */}
            <ShareButton
              url={`https://orangepeel.fr/images/designs/${filtered[lightboxIdx].file}`}
              text="Bitcoin design by Orange Peel — orangepeel.fr/designs"
              variant="dark"
              inline
            />

            {/* Compteur */}
            <p className="text-white/40 text-xs tracking-widest">
              {lightboxIdx + 1} / {filtered.length}
            </p>
          </div>

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
        </div>
      )}
    </>
  );
}
