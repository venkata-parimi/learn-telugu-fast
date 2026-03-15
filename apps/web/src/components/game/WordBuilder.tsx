"use client";

import { useState } from "react";
import { speak } from "@/lib/tts";
import WordPiece from "./WordPiece";

interface Props {
    word: string
    pieces: string[]
}

export default function WordBuilder({ word, pieces }: Props) {

    const [built, setBuilt] = useState("");

    const handleClick = (piece: string) => {
        const next = built + piece;
        setBuilt(next);


        if (next === word) {
            speak(word);
            alert("🎉 Correct!");
        }


    };

    return (<div className="flex flex-col items-center gap-10">


        <div className="text-6xl font-bold text-green-700">
            {built || "____"}
        </div>

        <div className="flex gap-6">
            {pieces.map((p, i) => (
                <WordPiece key={i} text={p} onClick={() => handleClick(p)} />
            ))}
        </div>

    </div>


    );
}
