import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import GlobalClient from "./global-client";

export const metadata: Metadata = {
  title: "Speak Fluidly in Your Language | 中文 · 日本語 · العربية · 한국어 · Tiếng Việt · Español · Deutsch · Français · Português",
  description:
    "Learn about Speak Fluidly's English coaching in Chinese, Japanese, Arabic, Korean, Vietnamese, Spanish, German, French, or Portuguese.",
};

export default function GlobalPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">🌐 Global</p>
        <h1 className="mt-3 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
          Speak Fluidly in your language
        </h1>
        <p className="mt-3 text-ink/65">
          Select a language below for an overview of what Speak Fluidly offers and how to
          get in touch. Lessons themselves are taught in English.
        </p>

        <GlobalClient />
      </section>
    </main>
  );
}
