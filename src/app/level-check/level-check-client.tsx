"use client";

import { useState } from "react";
import Link from "next/link";
import { QUESTIONS, getQuestionCount, type Length } from "./question-data";

function getResult(pct: number) {
  if (pct >= 0.9) {
    return {
      level: "C1 — Advanced",
      note: "You're already communicating fluently and naturally in most situations. From here, it's about polish — nuance, idiom, and precision.",
    };
  }
  if (pct >= 0.7) {
    return {
      level: "B2 — Upper Intermediate",
      note: "You can handle most everyday and work conversations well. Targeted practice will help you sound more natural and confident.",
    };
  }
  if (pct >= 0.5) {
    return {
      level: "B1 — Intermediate",
      note: "You have a solid foundation. Building your range of vocabulary and grammar will help you speak more freely.",
    };
  }
  if (pct >= 0.3) {
    return {
      level: "A2 — Elementary",
      note: "You can manage simple, everyday exchanges. Focused practice on the fundamentals will move things forward quickly.",
    };
  }
  return {
    level: "A1 — Beginner",
    note: "You're at the start of your English journey. Regular one-to-one practice from here builds momentum fast.",
  };
}

export default function LevelCheckClient() {
  const [stage, setStage] = useState<"select" | "quiz" | "result">("select");
  const [length, setLength] = useState<Length>("short");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});

  const questions = QUESTIONS.slice(0, getQuestionCount(length));

  function startQuiz() {
    setIndex(0);
    setAnswers({});
    setStage("quiz");
  }

  function selectAnswer(qid: string, optionIndex: number) {
    setAnswers((prev) => ({ ...prev, [qid]: optionIndex }));
  }

  function handleNext() {
    if (index + 1 < questions.length) {
      setIndex((i) => i + 1);
    } else {
      setStage("result");
    }
  }

  function handleRestart() {
    setStage("select");
  }

  if (stage === "select") {
    return (
      <div className="mt-12 rounded-2xl border border-line bg-white/60 p-8">
        <h2 className="font-display text-lg text-ink">Choose a length</h2>
        <p className="mt-2 text-sm text-ink/60">
          Covers grammar, vocabulary, and reading. Gives an informal CEFR level estimate
          (A1–C1) — not an official certification.
        </p>

        <div className="mt-6 flex gap-3">
          <button
            onClick={() => setLength("short")}
            className={`rounded-full border px-4 py-2 text-sm ${
              length === "short" ? "border-coral bg-coral/10 text-ink" : "border-line text-ink/70"
            }`}
          >
            Short (6 questions, ~3 min)
          </button>
          <button
            onClick={() => setLength("long")}
            className={`rounded-full border px-4 py-2 text-sm ${
              length === "long" ? "border-coral bg-coral/10 text-ink" : "border-line text-ink/70"
            }`}
          >
            Full (12 questions, ~6 min)
          </button>
        </div>

        <button
          onClick={startQuiz}
          className="mt-8 rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
        >
          Start
        </button>
      </div>
    );
  }

  if (stage === "result") {
    const totalWeight = questions.reduce((sum, q) => sum + q.weight, 0);
    const scoreWeight = questions.reduce(
      (sum, q) => sum + (answers[q.id] === q.correctIndex ? q.weight : 0),
      0
    );
    const correctCount = questions.filter((q) => answers[q.id] === q.correctIndex).length;
    const result = getResult(scoreWeight / totalWeight);

    return (
      <div className="mt-12 rounded-2xl border border-line bg-white/60 p-8">
        <span className="font-mono text-xs uppercase tracking-wide text-teal">Your result</span>
        <h2 className="mt-3 font-display text-2xl text-ink">{result.level}</h2>
        <p className="mt-2 text-sm text-ink/60">
          {correctCount} of {questions.length} correct.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-ink/70">{result.note}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper hover:-translate-y-0.5 transition-transform"
          >
            Book a free intro call
          </Link>
          <button
            onClick={handleRestart}
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink/70 hover:border-coral hover:text-coral"
          >
            Retake the check
          </button>
        </div>
      </div>
    );
  }

  const question = questions[index];
  const selected = answers[question.id];

  return (
    <div className="mt-12">
      <div className="flex items-center justify-between text-xs text-ink/45">
        <span className="font-mono uppercase tracking-wide text-teal">{question.skill}</span>
        <span className="font-mono">
          {index + 1} / {questions.length}
        </span>
      </div>
      <div className="mt-3 h-1 w-full rounded-full bg-line">
        <div
          className="h-1 rounded-full bg-coral transition-all"
          style={{ width: `${((index + 1) / questions.length) * 100}%` }}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-line bg-white/60 p-8">
        {question.passage && (
          <p className="mb-5 rounded-lg bg-paper p-4 text-sm leading-relaxed text-ink/70">
            {question.passage}
          </p>
        )}
        <h2 className="font-display text-lg text-ink">{question.prompt}</h2>
        <div className="mt-6 space-y-3">
          {question.options.map((option, i) => (
            <button
              key={i}
              onClick={() => selectAnswer(question.id, i)}
              className={`block w-full rounded-lg border px-4 py-3 text-left text-sm transition-colors ${
                selected === i ? "border-coral bg-coral/10 text-ink" : "border-line text-ink/75 hover:border-coral/50"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button
          onClick={handleNext}
          disabled={selected === undefined}
          className="rounded-full bg-coral px-6 py-3 text-sm font-medium text-paper disabled:opacity-40"
        >
          {index + 1 >= questions.length ? "See my result" : "Next question"}
        </button>
      </div>
    </div>
  );
}
