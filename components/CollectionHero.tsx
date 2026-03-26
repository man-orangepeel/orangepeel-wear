"use client";

interface CollectionHeroProps {
  label: string;
  title: string;
  titleFont: string;
  titleSizeMobile: string;
  titleSizeDesktop: string;
  titleLetterSpacing?: string;
  fontNormal?: boolean;
  gradient: string;
  accentColor: string;
  tagline: string;
  body: string;
}

export default function CollectionHero({
  label,
  title,
  titleFont,
  titleSizeMobile,
  titleSizeDesktop,
  titleLetterSpacing,
  fontNormal,
  gradient,
  accentColor,
  tagline,
  body,
}: CollectionHeroProps) {
  return (
    <section
      className="-mt-[70px] pb-16 px-6"
      style={{ background: gradient, paddingTop: "calc(70px + 2rem)", minHeight: "380px" }}
    >
      <div className="max-w-4xl mx-auto">

        {/* Label */}
        <p
          className="text-sm tracking-widest uppercase mb-4 font-medium"
          style={{ color: accentColor, opacity: 0.85 }}
        >
          {label}
        </p>

        {/* Collection name */}
        <h1
          className="text-white leading-tight mb-6"
          style={{
            fontFamily: titleFont,
            fontSize: `clamp(${titleSizeMobile}, 7vw, ${titleSizeDesktop})`,
            letterSpacing: titleLetterSpacing,
            fontWeight: fontNormal ? 400 : 700,
          }}
        >
          {title}
        </h1>

        {/* Tagline — very prominent */}
        <p
          className="text-white font-bold leading-tight mb-5 max-w-2xl"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(22px, 3.5vw, 32px)",
          }}
        >
          {tagline}
        </p>

        {/* Supporting text */}
        <p
          className="text-white/75 leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(16px, 1.5vw, 18px)" }}
        >
          {body}
        </p>

      </div>
    </section>
  );
}
