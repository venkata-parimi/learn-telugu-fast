import ModuleCard from "@/components/home/ModuleCard";
import { curriculum } from "@/data/curriculum";

export default function Home() {
  return (<div className="min-h-screen bg-sky-50 flex flex-col items-center p-10">
    <h1 className="text-5xl font-bold mb-12 text-blue-700">
      Akshara
    </h1>

    <div className="grid grid-cols-2 gap-8">

      {curriculum.map((module) => (
        <ModuleCard
          key={module.id}
          title={module.title}
          href={module.route}
          color="bg-blue-500"
        />
      ))}

    </div>

  </div>

  );
}
