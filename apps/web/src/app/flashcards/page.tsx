"use client";

import { useState } from "react";

const cards = ["అ", "ఆ", "ఇ", "ఈ", "ఉ", "ఊ"];

export default function Flashcards() {
  const [index, setIndex] = useState(0);

  const speak = () => {
    const msg = new SpeechSynthesisUtterance(cards[index]);
    msg.lang = "te-IN";
    speechSynthesis.speak(msg);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellow-50">
      <div className="text-9xl font-bold">{cards[index]}</div>

      <button
        onClick={speak}
        className="mt-10 bg-blue-500 text-white px-6 py-3 rounded-xl"
      >
        🔊 Listen
      </button>

      <button
        onClick={() => setIndex((index + 1) % cards.length)}
        className="mt-4 bg-green-500 text-white px-6 py-3 rounded-xl"
      >
        Next →
      </button>
    </div>
  );
}