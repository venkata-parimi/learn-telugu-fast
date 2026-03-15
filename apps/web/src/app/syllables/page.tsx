"use client";

import { useState } from "react";
import { syllables } from "@/data/syllables";
import { speak } from "@/lib/tts";
import { useTimer } from "@/lib/useTimer";

export default function SyllablesPage() {

    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(2000);

    useTimer(() => {
        setIndex((prev) => (prev + 1) % syllables.length);
    }, speed);

    const current = syllables[index];

    return (<div className="flex flex-col items-center justify-center h-screen bg-purple-50">


        <div className="text-[160px] font-bold text-purple-700">
            {current}
        </div>

        <button
            onClick={() => speak(current)}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl cursor-pointer hover:bg-green-600 transition"
        >
            🔊 Listen
        </button>

        <div className="flex gap-4 mt-10">

            <button
                onClick={() => setSpeed(1000)}
                className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600 transition"
            >
                1s
            </button>

            <button
                onClick={() => setSpeed(2000)}
                className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600 transition"
            >
                2s
            </button>

            <button
                onClick={() => setSpeed(3000)}
                className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600 transition"
            >
                3s
            </button>

            <button
                onClick={() => setSpeed(5000)}
                className="bg-purple-500 text-white px-4 py-2 rounded cursor-pointer hover:bg-purple-600 transition"
            >
                5s
            </button>

        </div>

    </div>


    );
}
