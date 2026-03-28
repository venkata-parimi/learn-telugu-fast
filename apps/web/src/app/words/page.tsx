"use client";

import { useState } from "react";
import {
    wordsLevel1,
    wordsLevel2,
    wordsLevel3
} from "@/data/wordsDataset";
import BackButton from "@/components/layout/BackButton";
import WordCard from "@/components/words/WordCard";
import ChunkWord from "@/components/words/ChunkWord";
import { useTimer } from "@/lib/useTimer";

export default function WordsPage() {

    const allWords = [
        ...wordsLevel1,
        ...wordsLevel2,
        ...wordsLevel3
    ];

    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(2000);
    const [chunkMode, setChunkMode] = useState(false);

    useTimer(() => {
        setIndex((prev) => (prev + 1) % allWords.length);
    }, speed);

    return (<div className="flex flex-col items-center justify-center h-screen bg-orange-50">

        <BackButton />
        {chunkMode ? (
            <ChunkWord word={allWords[index]} />
        ) : (
            <WordCard word={allWords[index]} />
        )}

        <div className="flex gap-4 mt-8">

            <button
                onClick={() => setChunkMode(!chunkMode)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                Toggle Chunk
            </button>

            <button
                onClick={() => setSpeed(1000)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
            >
                1s
            </button>

            <button
                onClick={() => setSpeed(2000)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
            >
                2s
            </button>

            <button
                onClick={() => setSpeed(3000)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
            >
                3s
            </button>

            <button
                onClick={() => setSpeed(5000)}
                className="bg-orange-500 text-white px-4 py-2 rounded"
            >
                5s
            </button>

        </div>

    </div>


    );
}
