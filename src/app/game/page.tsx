"use client";

import { useRouter } from "next/navigation";
import MemoryGame from "../_components/MemoryGame";
import { ArrowLeft } from "lucide-react";

export default function Game() {
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
      <MemoryGame />
    </main>
  );
}
