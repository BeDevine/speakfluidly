import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://speakfluidly.com"),
  title: "Speak Fluidly | English Speaking Coach for Confidence & Fluency",
  description:
    "Focused one-to-one English coaching to help you speak fluently and confidently — for travel, work, and everyday life. Taught by an internationally experienced teacher.",
  openGraph: {
    siteName: "Speak Fluidly",
    title: "Speak Fluidly | English Speaking Coach for Confidence & Fluency",
    description: "Focused one-to-one English coaching to help you speak fluently and confidently.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Speak Fluidly | English Speaking Coach for Confidence & Fluency",
    description: "Focused one-to-one English coaching to help you speak fluently and confidently.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>

      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-T1SKR7R0CE"
        strategy="afterInteractive"
      />

      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-T1SKR7R0CE');
        `}
      </Script>
    </html>
  );
}
