"use client";

import { useState } from "react";
import {
    sentencesLevel1,
    sentencesLevel2,
    sentencesLevel3
} from "@/data/sentencesDataset";

import SentenceCard from "@/components/sentences/SentenceCard";
import { useTimer } from "@/lib/useTimer";

export default function SentencesPage() {

    const allSentences = [
        ...sentencesLevel1,
        ...sentencesLevel2,
        ...sentencesLevel3
    ];

    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(4000);

    useTimer(() => {
        setIndex((prev) => (prev + 1) % allSentences.length);
    }, speed);

    return (<div className="flex flex-col items-center justify-center h-screen bg-blue-50">

        <SentenceCard sentence={allSentences[index]} />

        <div className="flex gap-4 mt-8">

            <button
                onClick={() => setSpeed(2000)}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover transition"
            >
                2s
            </button>

            <button
                onClick={() => setSpeed(4000)}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover transition"
            >
                4s
            </button>

            <button
                onClick={() => setSpeed(6000)}
                className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer hover transition"
            >
                6s
            </button>

        </div>

    </div>

    );
}
