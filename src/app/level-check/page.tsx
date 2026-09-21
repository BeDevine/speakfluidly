import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";
import LevelCheckClient from "./level-check-client";

export const metadata: Metadata = {
  title: "Free English Level Check | Speak Fluidly",
  description:
    "A quick, informal English level check covering grammar, vocabulary, and reading — get an estimated CEFR level (A1-C1).",
  openGraph: {
    title: "Free English Level Check | Speak Fluidly",
    description: "A quick, informal English level check with an estimated CEFR level.",
  },
};

export default function LevelCheckPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Level check</p>
        <h1 className="mt-3 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
          What's your English level?
        </h1>
        <p className="mt-3 text-ink/65">
          A quick, informal check across grammar, vocabulary, and reading. This gives an
          estimated CEFR level, not an official certification.
        </p>

        <LevelCheckClient />
      </section>
    </main>
  );
}
