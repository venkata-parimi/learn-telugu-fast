"use client";

import { useState } from "react";
import { wordBuilderLevels } from "@/data/wordBuilder";
import WordBuilder from "@/components/game/WordBuilder";
import BackButton from "@/components/layout/BackButton";

export default function GamePage() {

    const [level, setLevel] = useState(0);

    const current = wordBuilderLevels[level];

    return (<div className="flex flex-col items-center justify-center h-screen bg-green-50">

        <BackButton />
        <h1 className="text-4xl font-bold mb-10">
            Build the Word
        </h1>

        <WordBuilder word={current.word} pieces={current.pieces} />

        <button
            onClick={() =>
                setLevel((level + 1) % wordBuilderLevels.length)
            }
            className="mt-10 bg-purple-500 text-white px-6 py-3 rounded-xl"
        >
            Next Word →
        </button>

    </div>


    );
}
