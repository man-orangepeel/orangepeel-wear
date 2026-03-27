import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cyphers Collection",
  description: "The Cyphers — cryptic Bitcoin apparel for those who move in silence and code their truth.",
  openGraph: { url: "https://orangepeel.fr/collections/cyphers" },
};

export default function CyphersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
