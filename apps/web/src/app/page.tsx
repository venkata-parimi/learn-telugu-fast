import ModuleCard from "@/components/home/ModuleCard";

export default function Home() {
  return (<div className="min-h-screen bg-sky-50 flex flex-col items-center p-10">

    <h1 className="text-5xl font-bold mb-12 text-blue-700">
      Akshara
    </h1>

    <div className="grid grid-cols-2 gap-8">

      <ModuleCard
        title="Learn Letters"
        href="/flashcards"
        color="bg-blue-500"
      />

      <ModuleCard
        title="Learn Syllables"
        href="/syllables"
        color="bg-purple-500"
      />

      <ModuleCard
        title="Read Words"
        href="/words"
        color="bg-orange-500"
      />

      <ModuleCard
        title="Build Words"
        href="/game"
        color="bg-green-500"
      />
      <ModuleCard
        title="Read Sentences"
        href="/sentences"
        color="bg-teal-500"
      />

    </div>

  </div>

  );
}
