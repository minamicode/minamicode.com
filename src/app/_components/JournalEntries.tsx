import React, { ReactNode } from "react";

type JournalEntry = {
  date: string;
  text: string | ReactNode;
};

const entries: JournalEntry[] = [
  {
    date: "2025-02-15",
    text: "Finished cleaning, recycling and everything after moving. Looked some shop for the new flat.",
  },
  {
    date: "2025-02-14",
    text: "Added color picking from canvas functionality to wedding mood board.",
  },
  {
    date: "2025-02-13",
    text: "Added interactive color palette generation functionality to wedding mood board.",
  },
  {
    date: "2025-02-12",
    text: "Started building mood board as a free tool.",
  },
  {
    date: "2025-02-11",
    text: "Built a first version of free tool which generates social media captions for a wedding.",
  },
  {
    date: "2025-02-10",
    text: "Enhanced the landing page and the wedding hashtag generator. Added small new features and improved UI.",
  },
  {
    date: "2025-02-09",
    text: "Cleaned the previous flat the entire day. Still have a lot to do after moving!",
  },
  {
    date: "2025-02-08",
    text: "Joined a programming competition. It was fun and challenging. Want to learn more about algorithms.",
  },
  {
    date: "2025-02-07",
    text: "Built a first version of free tool which generates hashtags for a wedding.",
  },
  {
    date: "2025-02-06",
    text: "Did further unpacking. Now, most of the things found their own place.",
  },
  {
    date: "2025-02-05",
    text: "Did unpacking and built two work desks. Moved more stuff from old flat to the new one.",
  },
  {
    date: "2025-02-04",
    text: "Moved to a new flat! Packed everything in the morning and moved them in the afternoon. Was a great workout....",
  },
  {
    date: "2025-02-03",
    text: "Fixed React Hook dependency warnings in LocationMap component and optimized image components with proper TypeScript types and required alt props.",
  },
  {
    date: "2025-02-02",
    text: "Updated a blog with a new post on Internet Garden.",
  },
  {
    date: "2025-02-01",
    text: "Took a rest as I did not feel very well. Did a workout at a gym.",
  },
  {
    date: "2025-01-31",
    text: "Finished building the free tool and wrote a January blog post for Internet Garden.",
  },
  {
    date: "2025-01-30",
    text: "Started building a free tool which calculates alcohol drinks at a wedding.",
  },
  {
    date: "2025-01-29",
    text: "Changed the file type from next.config.mjs to next.config.ts and updated the OpenAI model in MarryBirds Business. Started building a web scraper to do marketing research.",
  },
  {
    date: "2025-01-28",
    text: "Added subscription cancellation date tracking to User model and implemented UI display of active-until dates for canceled subscriptions.",
  },
  {
    date: "2025-01-27",
    text: "Implemented direct email change functionality using Supabase service role, updating both Auth and database simultaneously.",
  },
  {
    date: "2025-01-26",
    text: "Did a lot of sports. Went for a walk in the forest and did a workout with Freeletics.",
  },
  {
    date: "2025-01-25",
    text: "Enjoyed the sun and being outside after a while. Had a great discussion about Internet Garden and new business ideas with Fredd.",
  },
  {
    date: "2025-01-24",
    text: "Implemented password reset flow with Supabase Auth and complete account deletion flow, including Stripe subscription cancellation.",
  },
  {
    date: "2025-01-23",
    text: "Fixed business submission flow to allow form completion in any order. Changed location queries to use business profile ID instead of website URL, ensuring data persistence across all steps.",
  },
  {
    date: "2025-01-22",
    text: "Added support for custom tags in business venue features form, ensuring they appear alongside predefined tags in MarryBirds Business. Improved accessibility in the mobile navigation sidebar.",
  },
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
