"use client";

import { speak } from "@/lib/tts";

export default function SyllableCard({ text }: { text: string }) {
    return (<div className="flex flex-col items-center">

        <div className="text-[160px] font-bold text-purple-700">
            {text}
        </div>

        <button
            onClick={() => speak(text)}
            className="mt-6 bg-green-500 text-white px-6 py-3 rounded-xl"
        >
            🔊 Listen
        </button>

    </div>

    );
}
