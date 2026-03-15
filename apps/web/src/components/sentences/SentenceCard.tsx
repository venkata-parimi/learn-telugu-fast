"use client";

import { speak } from "@/lib/tts";

export default function SentenceCard({ sentence }: { sentence: string }) {
    return (<div className="flex flex-col items-center">

        <div className="text-[80px] font-bold text-blue-700 text-center max-w-4xl">
            {sentence}
        </div>

        <button
            onClick={() => speak(sentence)}
            className="mt-8 bg-green-500 text-white px-6 py-3 rounded-xl"
        >
            🔊 Listen
        </button>

    </div>

    );
}
