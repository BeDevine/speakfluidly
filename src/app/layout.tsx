import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://speakfluidly.com"),
  title: "Speak Fluidly — Real English. Real Confidence.",
  description:
    "Affordable one-to-one English coaching to help you speak fluently and confidently — for travel, work, and everyday life. Taught by an internationally experienced teacher.",
  openGraph: {
    siteName: "Speak Fluidly",
    title: "Speak Fluidly — Real English. Real Confidence.",
    description: "Affordable one-to-one English coaching to help you speak fluently and confidently.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak Fluidly — Real English. Real Confidence.",
    description: "Affordable one-to-one English coaching to help you speak fluently and confidently.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
