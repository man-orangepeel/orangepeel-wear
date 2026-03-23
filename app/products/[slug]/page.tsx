import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import AddToCart from "./AddToCart";
import ProductGallery from "./ProductGallery";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) notFound();

  return (
    <>
      {/* ── Breadcrumb ── */}
      <section className="bg-white pt-28 pb-0 px-6">
        <div className="max-w-6xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-[#6b7280]">
            <Link href="/products" className="hover:text-[#ed760a] transition-colors">Products</Link>
            <span>/</span>
            <span
              className={`px-2 py-0.5 rounded-sm text-xs font-semibold ${COLLECTION_COLORS[product.collection]}`}
            >
              {COLLECTION_LABELS[product.collection]}
            </span>
            <span>/</span>
            <span className="text-[#111518]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ── Product Layout ── */}
      <section className="bg-white py-12 px-6 pb-24">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — Images */}
          <ProductGallery
            designSrc={product.designSrc}
            productSrc={product.src}
            name={product.name}
          />

          {/* Right — Info */}
          <div className="flex flex-col gap-6 py-2">
            {/* Collection badge */}
            <span
              className={`self-start text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-sm ${COLLECTION_COLORS[product.collection]}`}
            >
              {COLLECTION_LABELS[product.collection]}
            </span>

            {/* Name */}
            <h1
              className="text-[36px] md:text-[48px] font-bold text-[#111518] leading-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-[32px] font-bold text-[#111518]">€{product.price}</p>

            {/* Description */}
            <p className="text-[#6b7280] text-base leading-relaxed">{product.description}</p>

            <div className="border-t border-black/10 pt-6 flex flex-col gap-5">
              {/* Type info */}
              <div className="flex gap-4 text-sm text-[#6b7280]">
                <span className="capitalize">{product.type === "tshirt" ? "T-Shirt" : "Hoodie"}</span>
                <span>·</span>
                <span className="capitalize">{product.genre}</span>
                <span>·</span>
                <span>GOTS Certified</span>
              </div>

              <AddToCart colors={product.colors} productName={product.name} />

              {/* Back link */}
              <Link
                href="/products"
                className="text-[#6b7280] text-sm hover:text-[#ed760a] transition-colors text-center"
              >
                ← Back to all products
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="bg-[#f8f6f3] py-16 px-6 border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-widest text-[#6b7280] font-semibold mb-8">
            Our Standards
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "GOTS Certified", desc: "Global Organic Textile Standard" },
              { label: "OEKO-TEX®", desc: "Tested for harmful substances" },
              { label: "Bitcoin Payments", desc: "Onchain & Lightning Network" },
              { label: "Privacy First", desc: "Discreet packaging, no data harvesting" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-1">
                <p className="text-[#111518] font-bold text-sm">{c.label}</p>
                <p className="text-[#6b7280] text-xs leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
