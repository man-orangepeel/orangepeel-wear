import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS, COLLECTION_LABELS, COLLECTION_COLORS } from "@/lib/products";
import ProductLayout from "./ProductLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product || !product.published) return {};

  const imageUrl = `/images/products/${product.src}`;

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Orange Peel`,
      description: product.description,
      url: `/products/${slug}`,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 1200, alt: product.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | Orange Peel`,
      description: product.description,
      images: [imageUrl],
    },
  };
}

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
            <Link
              href={`/collections/${product.collection}`}
              className={`px-2 py-0.5 rounded-sm text-xs font-semibold hover:opacity-80 transition-opacity ${COLLECTION_COLORS[product.collection]}`}
            >
              {COLLECTION_LABELS[product.collection]}
            </Link>
            <span>/</span>
            <span className="text-[#111518]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* ── Product Layout ── */}
      <section className="bg-white py-12 px-6 pb-24">
        <ProductLayout product={product} />
      </section>

    </>
  );
}
