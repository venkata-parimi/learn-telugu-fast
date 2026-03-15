"use client";

import { useState } from "react";
import { useTimer } from "@/lib/useTimer";
import FlashCard from "@/components/flashcards/FlashCard";
import { letters } from "@/data";

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [speed, setSpeed] = useState(2000);

  useTimer(() => {
    setIndex((prev) => (prev + 1) % letters.length);
  }, speed);

  return (<div className="flex flex-col items-center justify-center h-screen bg-yellow-50">


    <FlashCard letter={letters[index].letter} />

    <div className="mt-10 flex gap-4">

      <button
        onClick={() => setSpeed(1000)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        1s
      </button>

      <button
        onClick={() => setSpeed(2000)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        2s
      </button>

      <button
        onClick={() => setSpeed(3000)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        3s
      </button>

      <button
        onClick={() => setSpeed(5000)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        5s
      </button>

    </div>

  </div>

  );
}
