import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/site-header";

export const metadata: Metadata = {
  title: "English Speaking FAQ: Confidence, Fluency & Coaching | Speak Fluidly",
  description:
    "Clear answers to common questions about speaking English: building confidence, becoming fluent, practising alone, accents, and how coaching works.",
  openGraph: {
    title: "English Speaking FAQ | Speak Fluidly",
    description: "Clear answers to common questions about speaking English with confidence.",
  },
};

type QA = { q: string; a: string };

const GROUPS: { title: string; items: QA[] }[] = [
  {
    title: "Speaking English with confidence",
    items: [
      {
        q: "How can I become more confident speaking English?",
        a: "Confidence comes from speaking regularly in situations where mistakes don't matter. Prepare a few phrases for the things you say often, practise them out loud, and accept that small mistakes are normal - even native speakers make them. The more often you speak, the faster the nerves fade.",
      },
      {
        q: "Why can I understand English but not speak it?",
        a: "This is very common. Listening and reading are passive skills, while speaking is active - your brain needs practice producing English quickly, not just understanding it. The fix is simple but takes time: regular speaking practice, ideally with someone who gives you feedback.",
      },
      {
        q: "How long does it take to become fluent in English?",
        a: "It depends on your starting level and how often you practise. Most people notice a real difference in confidence within a few weeks of regular speaking practice, while comfortable fluency usually takes months. Remember that fluent doesn't mean perfect - it means communicating easily.",
      },
      {
        q: "How can I practise speaking English on my own?",
        a: "Talk out loud about your day, record yourself and listen back, copy short clips of native speakers (called shadowing), or have a voice conversation with an AI assistant. My Resources page has more ideas and free tools.",
      },
      {
        q: "How do I stop translating in my head?",
        a: "Learn whole phrases instead of single words, and practise the things you say often until they come out automatically. Each ready-made phrase is one less thing to translate, and over time you'll start thinking directly in English.",
      },
      {
        q: "Do I need to lose my accent?",
        a: "No. Your accent is part of who you are, and plenty of very successful English speakers have strong accents. What matters is being clear: stressing the right words, not speaking too fast, and finishing your words properly.",
      },
      {
        q: "Should I learn British or American English?",
        a: "Either is fine - people everywhere understand both. Choose the one you hear most or need most for work, and don't worry too much about mixing them. Clear communication matters far more than which version you use.",
      },
    ],
  },
  {
    title: "Coaching with Speak Fluidly",
    items: [
      {
        q: "Who is Speak Fluidly for?",
        a: "Anyone who wants to speak English more confidently - for travel, work, everyday life or study. I work with students of every age, background and starting level, from nervous beginners to professionals polishing their English.",
      },
      {
        q: "What happens in a coaching session?",
        a: "Each 50-minute session is real conversation practice, built around the situations you actually need English for. I correct the mistakes that matter most and give you the phrases and techniques to sound more natural.",
      },
      {
        q: "Will you correct my mistakes?",
        a: "Yes - but not every single one, because constant interruptions kill confidence. I focus on the mistakes that affect how clearly you communicate, and we can agree together how much correction you want.",
      },
      {
        q: "Can you help me prepare for a job interview or presentation?",
        a: "Yes. We can practise realistic interview questions, rehearse a presentation, or prepare for any specific meeting or situation, with feedback on how clear and confident you sound.",
      },
      {
        q: "How much does English coaching cost?",
        a: "$85 per 50-minute session, or less per session with a package: $80 each for 5, $75 each for 10, and $65 each for 20 sessions. The price is per session, not per person.",
      },
      {
        q: "Can I bring a friend, partner or colleague?",
        a: "Yes, at no extra cost - you're booking my time, not a seat. Just bear in mind that the more people in a session, the less individual attention each person gets.",
      },
      {
        q: "Is there a free trial?",
        a: "Every new student starts with a free 20-minute intro call. It's a no-pressure chance to meet, talk about your goals and decide whether coaching is right for you.",
      },
      {
        q: "What if I need to reschedule?",
        a: "You can reschedule with 24 hours' notice at no charge. Packages are valid for 6 months, and you can pay by card or bank transfer.",
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-paper">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />

      <section className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">FAQ</p>
        <h1 className="mt-3 font-display text-3xl text-ink md:text-4xl">Your questions, answered</h1>
        <p className="mt-3 text-ink/65">
          The questions my students ask most often about speaking English - and about coaching.
        </p>

        {GROUPS.map((group) => (
          <div key={group.title} className="mt-12">
            <h2 className="font-display text-xl text-ink">{group.title}</h2>
            <div className="mt-4 divide-y divide-line border-y border-line">
              {group.items.map((item) => (
                <details key={item.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-display text-base text-ink">
                    <span>{item.q}</span>
                    <span className="mt-0.5 text-teal transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-14 flex flex-col items-start gap-4 rounded-2xl border border-line bg-mist p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div>
            <h2 className="font-display text-lg text-ink">Still have a question?</h2>
            <p className="mt-1 text-sm text-ink/65">Book a free 20-minute intro call and ask me directly.</p>
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
