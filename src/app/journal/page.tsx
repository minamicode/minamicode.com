"use client";

import { useRouter } from "next/navigation";
import JournalEntries from "../_components/JournalEntries";
import { ArrowLeft } from "lucide-react";

export default function Journal() {
  const router = useRouter();

  return (
    <main className="max-w-[70ch] mx-auto p-4">
      <button
        type="button"
        onClick={() => router.back()}
        className="flex items-center gap-2"
      >
        <ArrowLeft size={20} /> Back
      </button>
      <h1 className="text-xl font-bold mb-8 mt-6">Journal</h1>
      <JournalEntries />
    </main>
  );
}
