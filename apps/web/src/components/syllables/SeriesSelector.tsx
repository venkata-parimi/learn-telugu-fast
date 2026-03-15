interface Props {
    series: string[]
    current: string
    setCurrent: (value: string) => void
}

export default function SeriesSelector({ series, current, setCurrent }: Props) {
    return (<div className="flex gap-2 flex-wrap justify-center mb-8">
        {series.map((s) => (
            <button
                key={s}
                onClick={() => setCurrent(s)}
                className={`px-4 py-2 rounded-lg text-white ${current === s ? "bg-blue-600" : "bg-blue-400"
                    }`}
            >
                {s.toUpperCase()} </button>
        ))} </div>
    )
}
