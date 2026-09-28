import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "Free English Speaking Resources | Speak Fluidly",
  description:
    "Hand-picked free resources to improve your spoken English: listening, YouTube channels, pronunciation tools, conversation partners, and practising with AI.",
  openGraph: {
    title: "Free English Speaking Resources | Speak Fluidly",
    description: "Hand-picked free resources to improve your spoken English, plus how to practise with AI.",
  },
};

type Resource = { name: string; url: string; description: string };

const SECTIONS: { title: string; intro: string; items: Resource[] }[] = [
  {
    title: "Listening & everyday English",
    intro: "The more real English you hear, the more naturally it comes out.",
    items: [
      {
        name: "BBC Learning English",
        url: "https://www.bbc.co.uk/learningenglish",
        description: "Free lessons for every level. The 6 Minute English series is perfect for a daily listening habit.",
      },
      {
        name: "British Council LearnEnglish",
        url: "https://learnenglish.britishcouncil.org",
        description: "Free listening, speaking, grammar and vocabulary practice, organised by level.",
      },
    ],
  },
  {
    title: "YouTube channels",
    intro: "Easy to fit into a commute or a coffee break.",
    items: [
      {
        name: "BBC Learning English",
        url: "https://www.youtube.com/user/bbclearningenglish",
        description: "Short, well-made lessons on grammar, vocabulary and pronunciation.",
      },
      {
        name: "English with Lucy",
        url: "https://www.youtube.com/@EnglishwithLucy",
        description: "Clear British English pronunciation, grammar and vocabulary.",
      },
      {
        name: "Rachel's English",
        url: "https://www.youtube.com/user/rachelsenglish",
        description: "Detailed pronunciation lessons, great for sounding clearer and more natural.",
      },
    ],
  },
  {
    title: "Pronunciation & vocabulary tools",
    intro: "Quick tools worth bookmarking.",
    items: [
      {
        name: "YouGlish",
        url: "https://youglish.com",
        description: "Type any word or phrase and hear real people say it in YouTube clips.",
      },
      {
        name: "Cambridge Dictionary",
        url: "https://dictionary.cambridge.org",
        description: "Clear definitions, example sentences and audio in British and American English.",
      },
    ],
  },
  {
    title: "Practise with real people",
    intro: "Free apps to find conversation partners around the world.",
    items: [
      {
        name: "Tandem",
        url: "https://www.tandem.net",
        description: "Swap languages with native speakers by text, voice or video.",
      },
      {
        name: "HelloTalk",
        url: "https://www.hellotalk.com",
        description: "Chat with native speakers who are learning your language, with built-in corrections.",
      },
    ],
  },
];

const AI_PROMPTS: { label: string; prompt: string }[] = [
  {
    label: "Everyday conversation",
    prompt:
      "Let's have a relaxed conversation in English about travel. Keep your replies short and ask me questions. After every five messages, point out one mistake I made and how to fix it.",
  },
  {
    label: "Job interview",
    prompt:
      "Role-play a job interview for a [job title] position. Ask me one question at a time. At the end, tell me how clear and confident my answers sounded and what to improve.",
  },
  {
    label: "Sound more natural",
    prompt:
      "I'm going to write some sentences I'd use at work. For each one, show me how a native speaker would say it more naturally, and briefly explain the difference.",
  },
];

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Resources</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Free resources to speak better English</h1>
        <p className="mt-3 max-w-2xl text-ink/65">
          The resources I recommend to my own students. All free, and all worth a place in your
          routine alongside regular speaking practice.
        </p>

        {SECTIONS.map((section) => (
          <div key={section.title} className="mt-12">
            <h2 className="font-display text-xl text-ink">{section.title}</h2>
            <p className="mt-1 text-sm text-ink/60">{section.intro}</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {section.items.map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-xl border border-line bg-white/50 p-5 transition-colors hover:border-coral"
                >
                  <h3 className="font-display text-base text-ink group-hover:text-coral">
                    {item.name} <span className="text-ink/40">↗</span>
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">{item.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Practise with AI */}
        <div className="mt-14 rounded-2xl border border-coral/30 bg-coral/5 p-6 sm:p-8">
          <span className="font-mono text-xs uppercase tracking-wide text-coral">Practise with AI</span>
          <h2 className="mt-2 font-display text-xl text-ink">A patient conversation partner, any time</h2>
          <p className="mt-3 text-sm leading-relaxed text-ink/75">
            AI chat tools such as ChatGPT, Claude or Gemini are a great way to get extra speaking
            practice without feeling nervous. Use the app&apos;s voice mode so you actually talk
            rather than type. Copy one of these to get started:
          </p>
          <div className="mt-5 space-y-4">
            {AI_PROMPTS.map((p) => (
              <div key={p.label} className="rounded-xl border border-line bg-white p-4">
                <span className="font-mono text-[11px] uppercase tracking-wide text-teal">{p.label}</span>
                <p className="mt-2 text-sm leading-relaxed text-ink/80">{p.prompt}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-relaxed text-ink/65">
            AI is brilliant for building confidence and getting more practice, but it can miss
            things - especially pronunciation. A real teacher will notice the habits that are
            holding you back and show you how to fix them.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-line bg-white/60 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-lg text-ink">Ready to speak with more confidence?</h2>
            <p className="mt-1 text-sm text-ink/65">
              Free resources get you practice. Coaching shows you exactly what to work on.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
          >
            Book a free intro
          </Link>
        </div>
      </section>
    </main>
  );
}
