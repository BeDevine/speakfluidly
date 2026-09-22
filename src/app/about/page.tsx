import type { Metadata } from "next";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Barry Devine — Your English Teacher | Speak Fluidly",
  description:
    "17 years of international teaching experience across 8 countries. PGCE-qualified, with degrees in Computer Science and Business.",
  openGraph: {
    title: "Barry Devine — Your English Teacher | Speak Fluidly",
    description: "17 years of international teaching experience across 8 countries.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Your teacher</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">
          Barry Devine
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-[240px_1fr] md:gap-12">
          <div>
            <img
              src="/barry-devine.jpg"
              alt="Barry Devine, English teacher"
              className="aspect-[4/5] w-full max-w-[240px] rounded-2xl border border-line object-cover"
            />
            <a
              href="https://www.linkedin.com/in/barrydevine/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-teal hover:underline"
            >
              Connect on LinkedIn →
            </a>
          </div>

          <div>
            <p className="text-base leading-relaxed text-ink/75">
              I've spent the last 17 years teaching internationally in Ireland, Italy,
              Switzerland, Poland, China, Vietnam, Mexico, and Malawi, as well as working
              extensively online. During that time, I've helped students of all ages — from
              teenagers to working professionals — develop the confidence to use English
              naturally in real-life situations.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              I'm a PGCE-qualified teacher and a native English speaker with a clear,
              neutral accent. I also hold degrees in Computer Science and Business and have
              experience teaching Cambridge, AP, and IB programmes. This background allows
              me to bring a structured, practical approach to English coaching, focusing on
              communication skills that students can use immediately.
            </p>
            <p className="mt-4 text-base leading-relaxed text-ink/75">
              Whether you want to improve your speaking confidence, communicate more
              effectively at work, prepare for IELTS, or use English more comfortably while
              travelling, lessons are designed around your personal goals — not a fixed
              textbook or one-size-fits-all course.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">
                  Qualifications
                </span>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/70">
                  <li>PGCE (Qualified Teacher)</li>
                  <li>Degree in Computer Science</li>
                  <li>Degree in Business</li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">
                  Experience
                </span>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/70">
                  <li>17 years, international</li>
                  <li>8 countries taught in</li>
                  <li>All ages, all levels</li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">
                  Countries taught
                </span>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/70">
                  <li>Ireland · Italy · Switzerland · Poland</li>
                  <li>China · Vietnam · Mexico · Malawi · Online</li>
                </ul>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">
                  Also taught
                </span>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink/70">
                  <li>Cambridge, AP &amp; IB curricula</li>
                  <li>Business &amp; Computer Science</li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
              >
                Book a free intro
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
