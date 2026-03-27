import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warriors Collection",
  description: "The Warriors — bold Bitcoin apparel for those who wear their convictions in the open.",
  openGraph: { url: "https://orangepeel.fr/collections/warriors" },
};

export default function WarriorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
