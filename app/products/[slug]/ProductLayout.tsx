"use client";

import Image from "next/image";
import { useState, useEffect, useRef, useCallback } from "react";
import type { Product, ProductColor } from "@/lib/products";
import AddToCart from "./AddToCart";
import SatPrice from "@/components/SatPrice";
import { COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import Link from "next/link";

const STANDARDS = [
  {
    label: "GOTS Certified",
    desc: "Global Organic Textile Standard",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    label: "OEKO-TEX®",
    desc: "Tested for harmful substances",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    label: "BTC Payments",
    desc: "Onchain & Lightning Network",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h4a2 2 0 0 1 0 4H9m0 0h4.5a2 2 0 0 1 0 4H9m0-8v8m0-8V6m0 9v1m3-9V6" />
      </svg>
    ),
  },
  {
    label: "Privacy First",
    desc: "Discreet packaging, no data harvesting",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
      </svg>
    ),
  },
];

/* ── Lightbox avec zoom x2 et drag ── */
function ProductLightbox({
  thumbs,
  lightboxIdx,
  setLightboxIdx,
  productName,
}: {
  thumbs: { src: string; label: string; color: ProductColor }[];
  lightboxIdx: number;
  setLightboxIdx: (v: number | null | ((i: number | null) => number | null)) => void;
  productName: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const posStart = useRef({ x: 0, y: 0 });
  const hasMoved = useRef(false);

  // Reset position when image changes
  useEffect(() => { setPos({ x: 0, y: 0 }); }, [lightboxIdx]);

  // Keyboard
  useEffect(() => {
    const total = thumbs.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft")  setLightboxIdx((i) => i !== null ? (i - 1 + total) % total : null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? (i + 1) % total : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [thumbs.length, setLightboxIdx]);

  // Mouse drag
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    hasMoved.current = false;
    dragStart.current = { x: e.clientX, y: e.clientY };
    posStart.current = { ...pos };
  }, [pos]);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const dx = e.clientX - dragStart.current.x;
      const dy = e.clientY - dragStart.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true;
      setPos({ x: posStart.current.x + dx, y: posStart.current.y + dy });
    };
    const onMouseUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => { window.removeEventListener("mousemove", onMouseMove); window.removeEventListener("mouseup", onMouseUp); };
  }, []);

  // Touch drag
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length !== 1) return;
    dragging.current = true;
    hasMoved.current = false;
    dragStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    posStart.current = { ...pos };
  }, [pos]);

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging.current || e.touches.length !== 1) return;
      const dx = e.touches[0].clientX - dragStart.current.x;
      const dy = e.touches[0].clientY - dragStart.current.y;
      if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved.current = true;
      setPos({ x: posStart.current.x + dx, y: posStart.current.y + dy });
    };
    const onTouchEnd = () => { dragging.current = false; };
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);
    return () => { window.removeEventListener("touchmove", onTouchMove); window.removeEventListener("touchend", onTouchEnd); };
  }, []);

  function handleBgClick() {
    if (!hasMoved.current) setLightboxIdx(null);
  }

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-black/92 z-50 cursor-grab active:cursor-grabbing overflow-hidden"
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
      onClick={handleBgClick}
    >
      {/* Image zoomée x2 */}
      <div
        className="absolute top-1/2 left-1/2 w-[200vw] h-[200vh]"
        style={{ transform: `translate(calc(-50% + ${pos.x}px), calc(-50% + ${pos.y}px))` }}
      >
        <Image
          src={thumbs[lightboxIdx].src}
          alt={thumbs[lightboxIdx].label || productName}
          fill
          className="object-contain pointer-events-none"
          sizes="200vw"
          priority
          draggable={false}
        />
      </div>

      {/* Navigation */}
      {thumbs.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i - 1 + thumbs.length) % thumbs.length : null); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors z-10"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => i !== null ? (i + 1) % thumbs.length : null); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/25 transition-colors z-10"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      {/* Info bas */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 z-10 pointer-events-none">
        {thumbs[lightboxIdx].label && (
          <p className="text-white text-sm font-medium">{thumbs[lightboxIdx].label}</p>
        )}
        <p className="text-white/40 text-xs tracking-widest">
          {lightboxIdx + 1} / {thumbs.length}
        </p>
      </div>

      {/* Fermer */}
      <button
        onClick={(e) => { e.stopPropagation(); setLightboxIdx(null); }}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors z-10"
        aria-label="Fermer"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}

export default function ProductLayout({ product }: { product: Product }) {
  const defaultColor = product.colors[0];
  const [selectedColor, setSelectedColor] = useState<ProductColor>(defaultColor);
  const [mainSrc, setMainSrc] = useState(`/images/products/${defaultColor.src}`);

  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const thumbs = product.colors.map((c) => ({
    src: `/images/products/${c.src}`,
    label: c.name,
    color: c,
  }));

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;
    const total = thumbs.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIdx(null);
      if (e.key === "ArrowLeft")  setLightboxIdx((i) => i !== null ? (i - 1 + total) % total : null);
      if (e.key === "ArrowRight") setLightboxIdx((i) => i !== null ? (i + 1) % total : null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxIdx, thumbs.length]);

  function handleColorChange(color: ProductColor) {
    setSelectedColor(color);
    setMainSrc(`/images/products/${color.src}`);
  }

  function handleThumbClick(thumb: (typeof thumbs)[0]) {
    setMainSrc(thumb.src);
    if (thumb.color) setSelectedColor(thumb.color);
  }

  function openLightbox() {
    const idx = thumbs.findIndex((t) => t.src === mainSrc);
    setLightboxIdx(idx >= 0 ? idx : 0);
  }

  const typeLabel = product.type === "tshirt" ? "T-Shirt" : product.type.charAt(0).toUpperCase() + product.type.slice(1);
  const genreLabel = product.genre.charAt(0).toUpperCase() + product.genre.slice(1);

  return (
    <div className="max-w-6xl mx-auto flex flex-col">

      {/* ── Zone 1 : galerie + achat (above-the-fold) ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* Gauche — galerie */}
        <div className="flex flex-col gap-4">
          <button
            onClick={openLightbox}
            className="relative aspect-square overflow-hidden bg-[#f5f5f5] w-full cursor-zoom-in"
            aria-label="Agrandir l'image"
          >
            <Image
              src={mainSrc}
              alt={product.name}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </button>
          <div className="flex flex-wrap gap-2">
            {thumbs.map((thumb, i) => (
              <button
                key={i}
                onClick={() => handleThumbClick(thumb)}
                aria-label={thumb.label}
                title={thumb.label}
                className={`relative w-[64px] h-[64px] shrink-0 overflow-hidden bg-[#f5f5f5] transition-all ${
                  mainSrc === thumb.src
                    ? "ring-2 ring-[#ed760a] ring-offset-1"
                    : "ring-1 ring-black/10 hover:ring-black/30"
                }`}
              >
                <Image src={thumb.src} alt={thumb.label} fill className="object-contain" sizes="64px" />
              </button>
            ))}
          </div>
        </div>

        {/* Droite — infos + achat */}
        <div className="flex flex-col gap-5 py-2">

          <Link
            href={`/collections/${product.collection}`}
            className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm hover:opacity-80 transition-opacity ${COLLECTION_COLORS[product.collection]}`}
          >
            {COLLECTION_LABELS[product.collection]}
          </Link>

          <h1
            className="text-[36px] md:text-[44px] font-bold text-[#111518] leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {product.name}
          </h1>

          <SatPrice priceEur={product.price} large />

          <p className="text-[#6b7280] text-base leading-relaxed">{product.description}</p>

          <div className="flex gap-3 text-xs text-[#9ca3af] font-medium uppercase tracking-wide">
            <span>{typeLabel}</span>
            <span>·</span>
            <span>{genreLabel}</span>
            <span>·</span>
            <span>GOTS Certified</span>
          </div>

          <AddToCart
            colors={product.colors}
            productName={product.name}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
            shareSlug={product.slug}
          />

          <Link
            href="/products"
            className="self-start flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border border-black/20 text-[#6b7280] hover:text-[#111518] hover:border-black/40 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            All products
          </Link>
        </div>
      </div>

      {/* ── Zone 2 : Our Standards + About this piece ── */}
      <div className="border-t border-black/8 mt-12 pt-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

        {/* Gauche — Our Standards */}
        <div>
          <p className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold mb-6">
            Our Standards
          </p>
          <div className="grid grid-cols-2 gap-x-6 gap-y-7">
            {STANDARDS.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <div className="w-10 h-10 rounded-full bg-[#f5f5f5] border border-black/8 flex items-center justify-center text-[#ed760a]">
                  {s.icon}
                </div>
                <p className="text-[#111518] font-semibold text-sm leading-tight">{s.label}</p>
                <p className="text-[#9ca3af] text-xs leading-snug">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Droite — About this piece */}
        {product.longDescription && (
          <div>
            <p className="text-xs uppercase tracking-widest text-[#6b7280] font-semibold mb-6">
              About this piece
            </p>
            <p className="text-[#374151] text-sm leading-[1.85] whitespace-pre-line">
              {product.longDescription}
            </p>
          </div>
        )}

      </div>

      {/* ── Lightbox zoom ── */}
      {lightboxIdx !== null && (
        <ProductLightbox
          thumbs={thumbs}
          lightboxIdx={lightboxIdx}
          setLightboxIdx={setLightboxIdx}
          productName={product.name}
        />
      )}
    </div>
  );
}
