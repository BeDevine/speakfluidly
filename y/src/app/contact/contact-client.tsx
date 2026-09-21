"use client";

import { useState } from "react";
import SiteHeader from "@/components/site-header";

export default function ContactClient() {
  const [values, setValues] = useState({ name: "", email: "", whatsapp: "", goal: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  function update(field: string, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      setError(data.error || "Something went wrong sending that. Try again in a moment.");
      setStatus("error");
      return;
    }

    setStatus("sent");
  }

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-line bg-white px-3.5 py-2.5 text-sm outline-none focus:border-coral";
  const labelClass = "block text-xs font-medium uppercase tracking-wide text-ink/60";

  return (
    <main className="min-h-screen bg-paper">
      <SiteHeader />

      <section className="mx-auto max-w-2xl px-6 py-12 md:py-16">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-teal">Get in touch</p>
        <h1 className="mt-3 font-display text-2xl text-ink sm:text-3xl md:text-4xl">
          Book your free intro call
        </h1>
        <p className="mt-3 text-ink/65">
          Tell me a bit about what you're hoping to improve, and I'll get back to you to
          set up a free 20-minute intro call.
        </p>

        {status === "sent" ? (
          <div className="mt-8 rounded-2xl border border-line bg-white/60 p-6 sm:p-8 md:mt-10">
            <h2 className="font-display text-xl text-ink">Message sent</h2>
            <p className="mt-2 text-sm text-ink/65">
              Thanks — I'll reply as soon as I can, usually within a day or two.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 space-y-5 md:mt-10">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Your name</label>
                <input
                  required
                  value={values.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>Your email</label>
                <input
                  required
                  type="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass}>
                  WhatsApp <span className="normal-case text-ink/40">(optional)</span>
                </label>
                <input
                  value={values.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className={labelClass}>
                  Main goal <span className="normal-case text-ink/40">(optional)</span>
                </label>
                <input
                  value={values.goal}
                  onChange={(e) => update("goal", e.target.value)}
                  placeholder="Travel, work, exams..."
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>What would you like to work on?</label>
              <textarea
                required
                rows={5}
                value={values.message}
                onChange={(e) => update("message", e.target.value)}
                placeholder="A little about your current level and what you'd like to improve."
                className={`${inputClass} leading-relaxed`}
              />
            </div>

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper disabled:opacity-60"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}
