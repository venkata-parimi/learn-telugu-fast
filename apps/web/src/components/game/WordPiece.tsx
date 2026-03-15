interface Props {
    text: string
    onClick: () => void
}

export default function WordPiece({ text, onClick }: Props) {
    return (<button
        onClick={onClick}
        className="bg-blue-500 text-white text-3xl px-6 py-3 rounded-xl"
    >
        {text} </button>
    )
}
