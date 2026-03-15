"use client";

import Link from "next/link";

export default function NavBar() {
    return (<div className="w-full flex justify-between items-center p-4 bg-white shadow">

        <Link href="/">
            <div className="text-2xl font-bold text-blue-600 cursor-pointer hover:text-blue-800 transition">
                Akshara
            </div>
        </Link>

        <div className="flex gap-6 text-lg font-medium">

            <Link
                href="/flashcards"
                className="cursor-pointer hover:text-blue-600 transition"
            >
                Letters
            </Link>

            <Link
                href="/syllables"
                className="cursor-pointer hover:text-blue-600 transition"
            >
                Syllables
            </Link>

            <Link
                href="/words"
                className="cursor-pointer hover:text-blue-600 transition"
            >
                Words
            </Link>

            <Link
                href="/game"
                className="cursor-pointer hover:text-blue-600 transition"
            >
                Game
            </Link>

            <Link
                href="/sentences"
                className="cursor-pointer hover:text-blue-600 transition"
            >
                Sentences
            </Link>

        </div>

    </div>


    );
}
