import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Pricing | Speak Fluidly",
  description:
    "Affordable one-to-one English coaching. $50 per hour, with discounted packages available. Free 20-minute intro call.",
  openGraph: {
    title: "Pricing | Speak Fluidly",
    description: "Affordable one-to-one English coaching from $50/hour.",
  },
};

const packages = [
  {
    name: "Single session",
    price: "$50",
    unit: "per 60-minute session",
    description: "Try it out, or book flexibly as you go.",
    features: ["One-to-one, 60 minutes", "Focused on your real goals", "Book as you go"],
  },
  {
    name: "5-session package",
    price: "$225",
    unit: "$45 per session",
    description: "A short block to build momentum.",
    features: ["Everything in Single session", "Personalised focus areas", "Priority scheduling"],
  },
  {
    name: "10-session package",
    price: "$400",
    unit: "$40 per session",
    description: "The standard path to real, noticeable progress.",
    features: ["Everything in 5-session", "Progress check-ins", "Message access between sessions"],
    highlighted: true,
  },
  {
    name: "20-session package",
    price: "$700",
    unit: "$35 per session",
    description: "For sustained, serious improvement over time.",
    features: ["Everything in 10-session", "Flexible rescheduling", "Best value per session"],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Pricing</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Simple, affordable rates</h1>
        <p className="mt-3 max-w-2xl text-ink/65">
          One-to-one coaching, no group classes, no confusing tiers — just honest pricing
          and real progress.
        </p>

        <div className="mt-6 flex items-start gap-3 rounded-xl border border-teal/30 bg-teal/5 px-5 py-4 max-w-2xl">
          <span className="font-mono text-xs uppercase tracking-wide text-teal shrink-0 mt-0.5">
            Free intro
          </span>
          <p className="text-sm leading-relaxed text-ink/75">
            Every new student starts with a free 20-minute introductory call — no
            obligation, just a chance to meet and figure out what you actually need.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {packages.map((pkg) =>
            pkg.highlighted ? (
              <div key={pkg.name} className="rounded-2xl border border-line bg-coral/10 p-6 shadow-sm">
                <span className="font-mono text-[10px] uppercase tracking-wide text-coral">
                  Most popular
                </span>
                <h2 className="mt-2 font-display text-lg text-ink">{pkg.name}</h2>
                <p className="mt-4 font-display text-3xl text-ink">{pkg.price}</p>
                <p className="mt-1 font-mono text-xs text-ink/50">{pkg.unit}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{pkg.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-coral">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <div key={pkg.name} className="rounded-2xl border border-line bg-white/50 p-6">
                <h2 className="mt-2 font-display text-lg text-ink">{pkg.name}</h2>
                <p className="mt-4 font-display text-3xl text-ink">{pkg.price}</p>
                <p className="mt-1 font-mono text-xs text-ink/50">{pkg.unit}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink/65">{pkg.description}</p>
                <ul className="mt-5 space-y-2 text-sm text-ink/70">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-coral">—</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <p className="mt-8 text-sm text-ink/50">
          Payment by card or bank transfer. Packages valid for 6 months. Sessions can be
          rescheduled with 24 hours' notice at no charge.
        </p>

        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="rounded-full bg-coral px-8 py-3.5 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
          >
            Book your free intro call
          </Link>
        </div>
      </section>
    </main>
  );
}
