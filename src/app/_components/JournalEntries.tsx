import React from "react";

type JournalEntry = {
  date: string;
  text: string;
};

const entries: JournalEntry[] = [
  {
    date: "2025-01-03",
    text: "Simplified and fixed the business signup flow in MarryBirds by implementing a location matching system that connects business profiles with venue listings.",
  },
  {
    date: "2025-01-02",
    text: "Fixed RLS policies and implemented explicit update/insert operations for business profile settings in MarryBirds.",
  },
  {
    date: "2025-01-01",
    text: "Added a journal to my website.",
  },
];

export default function JournalEntries() {
  return (
    <div className="space-y-8">
      {entries.map((entry, index) => (
        <div key={index} className="border-l-2 border-[var(--color-txt)] pl-4">
          <time className="text-sm opacity-80">{entry.date}</time>
          <p className="mt-2">{entry.text}</p>
        </div>
      ))}
    </div>
  );
}
