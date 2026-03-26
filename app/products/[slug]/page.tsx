import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import ProductLayout from "./ProductLayout";

export function generateStaticParams() {
  return PRODUCTS.filter((p) => p.published).map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product || !product.published) notFound();

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
        <ProductLayout product={product} />
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
