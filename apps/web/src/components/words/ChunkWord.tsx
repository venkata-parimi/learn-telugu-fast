interface Props {
    word: string;
}

export default function ChunkWord({ word }: Props) {

    const chunks = word.split("");

    return (<div className="flex gap-4 text-[120px] font-bold text-orange-700">
        {chunks.map((c, i) => (<span key={i}>{c}</span>
        ))} </div>
    );
}
