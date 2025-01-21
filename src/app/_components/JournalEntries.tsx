import React, { ReactNode } from "react";

type JournalEntry = {
  date: string;
  text: string | ReactNode;
};

const entries: JournalEntry[] = [
  {
    date: "2025-01-21",
    text: "Fixed a bug in email existence check for sign up and made website field read-only in business submission form to prevent URL modifications after initial search in MarryBirds Business.",
  },
  {
    date: "2025-01-20",
    text: "Implemented conditional dashboard UI rendering and improved business onboarding flow by adding email verification checks for MarryBirds Business.",
  },
  {
    date: "2025-01-19",
    text: "Our friend stayed over a night with us. Had a good time, and went to see a project mapping event. It was beautiful!",
  },
  {
    date: "2025-01-18",
    text: "I went out with friends, walking around the city and the lake. One of them is a C++ programmer, and we had a nice talk.",
  },
  {
    date: "2025-01-17",
    text: "Enhanced business dashboard UX by implementing persistent state management and streamlined the business submission flow, ensuring a seamless transition from dashboard to the get-listed page.",
  },
  {
    date: "2025-01-16",
    text: "Restructured onboarding flow in MarryBirds Business to reduce friction.",
  },
  {
    date: "2025-01-15",
    text: "Updated Stripe subscription configuration and added URL normalization utility to automatically format URLs in MarryBirds Business.",
  },
  {
    date: "2025-01-14",
    text: "Integrated LogSnag event tracking system for real-time monitoring in MarryBirds Business, enabling instant notifications for critical user actions.",
  },
  {
    date: "2025-01-13",
    text: "Set up DMARC and implemented PostHog, Sentry, and LogSnap for MarryBirds.",
  },
  {
    date: "2025-01-12",
    text: "Reviewed the code of MarryBirds and removed unnecessary console logs.",
  },
  {
    date: "2025-01-11",
    text: "Learned about function declaration in C++ and how to plan a sitemap structure based on SEO research.",
  },
  {
    date: "2025-01-10",
    text: "It was my birthday today! This year, I want to deepen my knowledge of JavaScript, TypeScript, React and Next.js while learning new things like SEO. I look forward to building a lot of fun projects!",
  },
  {
    date: "2025-01-09",
    text: "Implemented local storage caching for AI venue data extraction to prevent redundant API calls and improve user experience across multi-step forms in MarryBirds Business.",
  },
  {
    date: "2025-01-08",
    text: "Enhanced venue submission forms by adding Zustand state management to persist extraction state across form steps, and improving form validation in MarryBirds Business.",
  },
  {
    date: "2025-01-07",
    text: "Implemented automated venue data extraction in MarryBirds Business. Integrated GPT-4 API to automatically populate venue submission forms by analyzing websites.",
  },
  {
    date: "2025-01-06",
    text: "Implemented geocoding functionality in MarryBirds. Added fallback address-to-coordinate conversion using Mapbox API.",
  },
  {
    date: "2025-01-05",
    text: "Corrected website input editability states based on venue submission type, enhanced venue form validation, and fixed timeout errors in photo upload API in MarryBirds Business.",
  },
  {
    date: "2025-01-04",
    text: "Started learning SEO with Danny Postma. Debugged and fixed venue listing form data flow in MarryBirds Business.",
  },
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
