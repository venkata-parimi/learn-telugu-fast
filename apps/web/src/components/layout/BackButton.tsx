"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.push("/")}
            className="absolute top-20 left-6 bg-gray-200 px-4 py-2 rounded cursor-pointer hover:bg-gray-300 transition"
        >
            ← Home </button>
    );
}
