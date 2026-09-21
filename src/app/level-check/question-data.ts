export type Length = "short" | "long";

export type Question = {
  id: string;
  skill: "Grammar" | "Vocabulary" | "Reading";
  weight: number;
  prompt: string;
  passage?: string;
  options: string[];
  correctIndex: number;
};

// Ordered easy -> hard, roughly A1 through C1 difficulty
export const QUESTIONS: Question[] = [
  {
    id: "q1",
    skill: "Grammar",
    weight: 1,
    prompt: "Choose the correct sentence.",
    options: ["She go to work every day.", "She goes to work every day.", "She going to work every day.", "She gone to work every day."],
    correctIndex: 1,
  },
  {
    id: "q2",
    skill: "Vocabulary",
    weight: 1,
    prompt: "Which word means the opposite of 'expensive'?",
    options: ["Cheap", "Large", "Fast", "Old"],
    correctIndex: 0,
  },
  {
    id: "q3",
    skill: "Grammar",
    weight: 1,
    prompt: "Complete: \"I ___ to the gym yesterday.\"",
    options: ["go", "goes", "went", "going"],
    correctIndex: 2,
  },
  {
    id: "q4",
    skill: "Vocabulary",
    weight: 2,
    prompt: "Which word best completes: \"Can you ___ me a favour?\"",
    options: ["make", "do", "take", "have"],
    correctIndex: 1,
  },
  {
    id: "q5",
    skill: "Grammar",
    weight: 2,
    prompt: "Complete: \"If it rains tomorrow, I ___ stay home.\"",
    options: ["will", "would", "was", "am"],
    correctIndex: 0,
  },
  {
    id: "q6",
    skill: "Reading",
    weight: 2,
    passage: "The meeting has been moved from Monday to Wednesday because two team members are travelling.",
    prompt: "When is the meeting now?",
    options: ["Monday", "Tuesday", "Wednesday", "It was cancelled"],
    correctIndex: 2,
  },
  {
    id: "q7",
    skill: "Grammar",
    weight: 3,
    prompt: "Choose the correct sentence.",
    options: ["I have been living here since five years.", "I have been living here for five years.", "I am living here since five years.", "I live here since five years."],
    correctIndex: 1,
  },
  {
    id: "q8",
    skill: "Vocabulary",
    weight: 3,
    prompt: "Which word best fits: \"The new policy will be ___ next month.\"",
    options: ["implemented", "implement", "implementing", "implements"],
    correctIndex: 0,
  },
  {
    id: "q9",
    skill: "Reading",
    weight: 3,
    passage: "Although the restaurant was fully booked, the manager found us a table after a short wait.",
    prompt: "What happened in the end?",
    options: ["We couldn't get a table", "We got a table after waiting", "The restaurant was closed", "We left immediately"],
    correctIndex: 1,
  },
  {
    id: "q10",
    skill: "Grammar",
    weight: 4,
    prompt: "Choose the correct sentence.",
    options: ["By the time we arrived, the film already started.", "By the time we arrived, the film had already started.", "By the time we arrived, the film has already started.", "By the time we arrived, the film already starts."],
    correctIndex: 1,
  },
  {
    id: "q11",
    skill: "Vocabulary",
    weight: 4,
    prompt: "Which word best fits: \"Despite the setbacks, she remained ___ about the project's success.\"",
    options: ["optimistic", "optional", "opposite", "operative"],
    correctIndex: 0,
  },
  {
    id: "q12",
    skill: "Reading",
    weight: 4,
    passage: "While the plan looked promising on paper, it quickly became clear that the team had underestimated how long it would actually take.",
    prompt: "What is implied about the plan?",
    options: ["It went exactly as expected", "It took longer than the team thought", "It was cancelled immediately", "It finished early"],
    correctIndex: 1,
  },
];

export function getQuestionCount(length: Length) {
  return length === "short" ? 6 : 12;
}
