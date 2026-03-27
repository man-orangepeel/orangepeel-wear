import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ — Find Your Answers",
  description: "Frequently asked questions about Orange Peel apparel — shipping, materials, Bitcoin payments.",
  openGraph: { url: "https://orangepeel.fr/about/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
