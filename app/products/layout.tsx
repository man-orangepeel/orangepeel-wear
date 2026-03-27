import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Our Products",
  description: "Browse Orange Peel Bitcoin apparel — T-shirts and hoodies across Warriors, Wizards, and Cyphers collections.",
  openGraph: { url: "https://orangepeel.fr/products" },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
