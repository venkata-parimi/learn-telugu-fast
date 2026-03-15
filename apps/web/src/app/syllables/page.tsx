"use client";

import { useState } from "react";
import { syllableSeries } from "@/data/syllables";
import SyllableCard from "@/components/syllables/SyllableCard";
import SeriesSelector from "@/components/syllables/SeriesSelector";
import { useTimer } from "@/lib/useTimer";

export default function SyllablesPage() {

    const seriesKeys = Object.keys(syllableSeries);

    const [series, setSeries] = useState(seriesKeys[0]);
    const [index, setIndex] = useState(0);
    const [speed, setSpeed] = useState(2000);

    const syllables = syllableSeries[series as keyof typeof syllableSeries];

    useTimer(() => {
        setIndex((prev) => (prev + 1) % syllables.length);
    }, speed);

    return (<div className="flex flex-col items-center justify-center h-screen bg-purple-50">


        <SeriesSelector
            series={seriesKeys}
            current={series}
            setCurrent={(s) => {
                setSeries(s);
                setIndex(0);
            }}
        />

        <SyllableCard text={syllables[index]} />

        <div className="flex gap-4 mt-8">

            <button
                onClick={() => setSpeed(1000)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                1s
            </button>

            <button
                onClick={() => setSpeed(2000)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                2s
            </button>

            <button
                onClick={() => setSpeed(3000)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                3s
            </button>

            <button
                onClick={() => setSpeed(5000)}
                className="bg-purple-500 text-white px-4 py-2 rounded"
            >
                5s
            </button>

        </div>

    </div>


    );
}
