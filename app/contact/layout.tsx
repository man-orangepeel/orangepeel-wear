import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Orange Peel — questions, custom orders, or just Bitcoin talk.",
  openGraph: { url: "https://orangepeel.fr/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
