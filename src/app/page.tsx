import Link from "next/link";
import { db } from "@/lib/db";
import SiteHeader from "@/components/site-header";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recentPosts = await db.post
    .findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      take: 1,
    })
    .catch(() => []);

  const recentTestimonials = await db.testimonial
    .findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
      take: 2,
    })
    .catch(() => []);

  db.siteStat
    .upsert({
      where: { id: "main" },
      update: { count: { increment: 1 } },
      create: { id: "main", count: 1 },
    })
    .catch(() => {});

  return (
    <main>
      <SiteHeader showTagline />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">
              One-to-One English Coaching
            </p>
            <h1 className="mt-4 font-display text-3xl leading-[1.15] tracking-tight text-ink sm:text-4xl md:text-5xl">
              Speak with confidence — for travel, work, and everyday life.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/70">
              Real conversation practice with a real teacher. No rigid textbook script —
              just focused coaching to help you speak fluently in the situations that
              actually matter to you.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper transition-transform hover:-translate-y-0.5"
              >
                Book a free 20-minute intro
              </Link>
              <Link
                href="/level-check"
                className="text-sm font-medium text-ink/70 underline decoration-line underline-offset-4 hover:text-coral"
              >
                Not sure of your level? Take the free check →
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-48 rotate-3 rounded-3xl border-[3px] border-teal/60 sm:w-64">
              <div className="flex h-full w-full flex-col items-center justify-center text-center px-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-teal sm:text-xs">
                  Sessions
                </span>
                <span className="font-display text-4xl font-semibold text-ink sm:text-6xl">
                  $45
                </span>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/50 sm:text-[11px]">
                  per 50-min session
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-t border-line bg-white/50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <h2 className="font-display text-2xl text-ink md:text-3xl">Who this is for</h2>
          <p className="mt-3 max-w-xl text-ink/65">
            Wherever you need your English to actually work for you.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-wide text-coral">
                Everyday fluency
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">Travel &amp; daily life</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Build the confidence to hold real conversations — ordering, chatting,
                making friends, and living life in English without hesitating.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-wide text-coral">
                Professional English
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">Work &amp; career</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Speak clearly and confidently in meetings, interviews, presentations, and
                everyday workplace communication.
              </p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 sm:p-8">
              <span className="font-mono text-xs uppercase tracking-wide text-coral">
                Exams &amp; academic
              </span>
              <h3 className="mt-3 font-display text-xl text-ink">Study &amp; certification</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">
                Support for academic English and general exam preparation, taught by a
                qualified, internationally experienced teacher.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-12">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Your teacher</p>
              <h2 className="mt-3 font-display text-2xl text-ink">Qualified. Experienced. Practical.</h2>
              <Link href="/about" className="mt-4 inline-block text-sm text-teal hover:underline">
                Meet your teacher →
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">Qualification</span>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  PGCE-qualified teacher with additional degrees in Computer Science and
                  Business — a structured, practical approach to language coaching.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">Experience</span>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  17 years teaching internationally across 8 countries, working with
                  students of every age, background, and starting level.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">Approach</span>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Real conversation, not rote memorisation. Every session is built around
                  what you actually need to say and where you need to say it.
                </p>
              </div>
              <div>
                <span className="font-mono text-xs uppercase tracking-wide text-coral">Flexibility</span>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">
                  Sessions arranged around your schedule, entirely online, wherever you are
                  in the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl text-ink md:text-3xl">Tips</h2>
            <Link href="/blog" className="text-sm text-teal hover:underline">
              View all
            </Link>
          </div>

          {recentPosts.length === 0 ? (
            <p className="mt-8 text-sm text-ink/60">
              Nothing published yet — new notes will appear here.
            </p>
          ) : (
            <div className="mt-8 max-w-xl md:mt-10">
              {recentPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group block rounded-xl border border-line bg-white/50 p-6 transition-colors hover:border-coral"
                >
                  <span className="font-mono text-[11px] uppercase tracking-wide text-teal">
                    {post.category}
                  </span>
                  <h3 className="mt-3 font-display text-lg text-ink group-hover:text-coral">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm text-ink/65">{post.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials teaser */}
      <section className="border-t border-line bg-white/40">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex items-baseline justify-between">
            <h2 className="font-display text-2xl text-ink md:text-3xl">Testimonials</h2>
            <Link href="/testimonials" className="text-sm text-teal hover:underline">
              View all
            </Link>
          </div>

          {recentTestimonials.length === 0 ? (
            <p className="mt-8 text-sm text-ink/60">
              No testimonials yet — check back soon.
            </p>
          ) : (
            <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-2">
              {recentTestimonials.map((t) => (
                <div key={t.id} className="rounded-2xl border border-line bg-paper p-6">
                  <p className="text-sm leading-relaxed text-ink/80">"{t.message}"</p>
                  <p className="mt-4 font-display text-sm text-ink">
                    {t.name}
                    {(t.company || t.context) && (
                      <span className="text-ink/50 font-body">
                        {" — "}
                        {[t.company, t.context].filter(Boolean).join(", ")}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-10 text-sm text-ink/50 md:flex-row">
          <span>© {new Date().getFullYear()} Speak Fluidly.</span>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/blog" className="hover:text-coral">
              Tips
            </Link>
            <Link href="/testimonials" className="hover:text-coral">
              Testimonials
            </Link>
            <Link href="/pricing" className="hover:text-coral">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-coral">
              About
            </Link>
            <Link href="/contact" className="hover:text-coral">
              Contact
            </Link>
            <Link href="/login" className="hover:text-coral">
              Teacher login
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
