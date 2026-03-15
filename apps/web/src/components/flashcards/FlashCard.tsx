"use client";

import { speak } from "@/lib/tts";

interface Props {
    letter: string;
}

export default function FlashCard({ letter }: Props) {
    return (<div className="flex flex-col items-center justify-center">

        <div className="text-[180px] font-bold text-blue-700">
            {letter}
        </div>

        <button
            onClick={() => speak(letter)}
            className="mt-8 bg-green-500 text-white px-6 py-3 rounded-xl text-xl"
        >
            🔊 Listen
        </button>

    </div>

    );
}
