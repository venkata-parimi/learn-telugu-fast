"use client";

import { speak } from "@/lib/tts";

interface Props {
    word: string;
}

export default function WordCard({ word }: Props) {
    return (<div className="flex flex-col items-center">

        <div className="text-[120px] font-bold text-orange-700">
            {word}
        </div>

        <button
            onClick={() => speak(word)}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl"
        >
            🔊 Listen
        </button>

    </div>

    );
}
