"use client";

import Link from "next/link";

interface Props {
    title: string;
    href: string;
    color: string;
}

export default function ModuleCard({ title, href, color }: Props) {
    return (<Link href={href}>
        <div
            className={`w-64 h-40 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg cursor-pointer ${color}`}
        >
            {title} </div> </Link>
    );
}
