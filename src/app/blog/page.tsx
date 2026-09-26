import type { Metadata } from "next";
import Link from "next/link";
import { db } from "@/lib/db";
import SiteHeader from "@/components/site-header";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "English Fluency Tips | Speak Fluidly",
  description: "Practical tips for speaking English more fluently and confidently, in real situations.",
  openGraph: {
    title: "English Fluency Tips | Speak Fluidly",
    description: "Practical tips for speaking English more fluently and confidently.",
  },
};

export default async function BlogIndexPage() {
  const posts = await db.post.findMany({
    where: { published: true, createdAt: { lte: new Date() } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Tips</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Fluency tips</h1>
        <p className="mt-3 text-ink/65">Practical, real-world advice — not textbook filler.</p>

        <div className="mt-10 divide-y divide-line border-t border-line md:mt-12">
          {posts.length === 0 && <p className="py-8 text-sm text-ink/60">Nothing published yet.</p>}
          {posts.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group block py-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[11px] uppercase tracking-wide text-teal">
                  {post.category}
                </span>
                <span className="font-mono text-[11px] text-ink/40">
                  {new Date(post.createdAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>
              <h2 className="mt-2 font-display text-xl text-ink group-hover:text-coral">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
