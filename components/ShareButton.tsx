"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const SITE_URL = "https://orangepeel.fr";

interface ShareNetwork {
  id: string;
  label: string;
  getUrl: (url: string, text: string) => string;
  icon: React.ReactNode;
}

const NETWORKS: ShareNetwork[] = [
  {
    id: "x",
    label: "X (Twitter)",
    getUrl: (url, text) =>
      `https://x.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631ZM17.083 20.75h1.833L7.084 4.126H5.117Z" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    getUrl: (url, text) =>
      `https://wa.me/?text=${encodeURIComponent(`${text}\n${url}`)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z" />
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.571a.5.5 0 0 0 .614.614l5.717-1.476A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0Zm0 21.818a9.818 9.818 0 0 1-5.015-1.374l-.36-.214-3.724.961.984-3.617-.236-.374A9.818 9.818 0 0 1 2.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818Z" />
      </svg>
    ),
  },
  {
    id: "telegram",
    label: "Telegram",
    getUrl: (url, text) =>
      `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
      </svg>
    ),
  },
  {
    id: "facebook",
    label: "Facebook",
    getUrl: (url) =>
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

interface ShareButtonProps {
  /** Slug du produit — l'URL absolue est construite automatiquement */
  slug?: string;
  /** URL absolue à partager (utilisé si slug absent) */
  url?: string;
  /** Texte pré-rempli pour les réseaux qui le supportent */
  text: string;
  /** "light" = fond blanc (fiche produit) | "dark" = fond sombre (lightbox) */
  variant?: "light" | "dark";
  /** true = affiche les boutons directement sans toggle (ex: lightbox) */
  inline?: boolean;
  /** true = bouton pleine largeur, icône seule, style solid dark (mode inline AddToCart) */
  compact?: boolean;
  /** true = dropdown aligné à droite du bouton */
  alignRight?: boolean;
}

export default function ShareButton({
  slug,
  url,
  text,
  variant = "light",
  inline = false,
  compact = false,
  alignRight = false,
}: ShareButtonProps) {
  const shareUrl = slug ? `${SITE_URL}/products/${slug}` : (url ?? SITE_URL);
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDark = variant === "dark";

  // Fermer au clic extérieur (mode dropdown seulement)
  useEffect(() => {
    if (inline || !open) return;
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open, inline]);

  // Fermer avec Escape (mode dropdown seulement)
  useEffect(() => {
    if (inline || !open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, inline]);

  const openNetwork = useCallback(
    (getUrl: (url: string, text: string) => string) => {
      window.open(getUrl(shareUrl, text), "_blank", "noopener,noreferrer,width=620,height=520");
    },
    [shareUrl, text]
  );

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
    } catch {
      // Fallback pour navigateurs anciens
      const input = document.createElement("input");
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  }, [shareUrl]);

  const iconBtn = (isDark: boolean) =>
    `w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
      isDark
        ? "text-white/60 hover:text-white bg-white/10 hover:bg-white/25"
        : "text-[#6b7280] hover:text-[#111518] bg-black/6 hover:bg-black/12"
    }`;

  const NetworkRow = () => (
    <div className="flex items-center gap-1.5">
      {NETWORKS.map((n) => (
        <button
          key={n.id}
          onClick={() => openNetwork(n.getUrl)}
          aria-label={`Partager sur ${n.label}`}
          title={n.label}
          className={iconBtn(isDark)}
        >
          {n.icon}
        </button>
      ))}

      {/* Copier le lien */}
      <button
        onClick={copyLink}
        aria-label="Copier le lien"
        title="Copier le lien"
        className={`h-9 px-3 rounded-full flex items-center gap-1.5 text-xs font-medium transition-colors ${
          copied
            ? "text-[#ed760a] bg-[#ed760a]/12"
            : isDark
            ? "text-white/60 hover:text-white bg-white/10 hover:bg-white/25"
            : "text-[#6b7280] hover:text-[#111518] bg-black/6 hover:bg-black/12"
        }`}
      >
        {copied ? (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
            Copied
          </>
        ) : (
          <>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
            </svg>
            Copy
          </>
        )}
      </button>
    </div>
  );

  // Mode inline : boutons directs, pas de toggle
  if (inline) {
    return <NetworkRow />;
  }

  // Mode dropdown
  const shareIcon = (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.935-2.186 2.25 2.25 0 0 0-3.935 2.186Z" />
    </svg>
  );

  return (
    <div ref={containerRef} className="relative h-full">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Partager ce produit"
        className={
          compact
            ? "flex items-center justify-center bg-[#111518] text-white rounded-sm hover:bg-[#222] transition-colors duration-200 py-4 px-4"
            : `flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-sm border transition-colors ${
                isDark
                  ? "border-white/20 text-white/70 hover:text-white hover:border-white/40"
                  : "border-black/20 text-[#6b7280] hover:text-[#111518] hover:border-black/40"
              }`
        }
      >
        {shareIcon}
        {!compact && "Share"}
      </button>

      {open && (
        <div
          className={`absolute top-full mt-2 z-20 p-2 rounded-sm border shadow-xl ${
            alignRight ? "right-0" : "left-0"
          } ${
            isDark
              ? "bg-[#1c1c1c] border-white/10"
              : "bg-white border-black/10"
          }`}
        >
          <NetworkRow />
        </div>
      )}
    </div>
  );
}
