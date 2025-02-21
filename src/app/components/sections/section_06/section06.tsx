// import { Image } from "@heroui/image";

// export default function ComponentSection06() {
//   return (
//     <section
//       id="section6"
//       className="h-screen snap-start flex  text-white text-3xl"
//     >
//       {/* GERAL */}
//       <div className="flex flex-col">
//         <div>
//           <h1 className=" flex relative top-3 left-3 pb-10 text-blue-500">
//             MEUS PROJETOS
//           </h1>
//         </div>
//         {/* Projeto 1 */}
//         <div>
//           <Image
//             alt="NextUI hero Image"
//             src="/image/projetos/projeto_iamedica.png"
//             height={350}
//             width={350}
//             className="bg-white "
//           />
//           <h1>IA médica</h1>
//           <p className="text-lg">design-frontend</p>
//         </div>
//       </div>
//     </section>
//   );
// }
import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["React", "Node.js", "MongoDB"],
    link: "https://example.com/ecommerce",
  },
  {
    title: "Weather App",
    description: "Real-time weather information using a third-party API",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["React", "API Integration", "Tailwind CSS"],
    link: "https://example.com/weather-app",
  },
  {
    title: "Task Management Tool",
    description: "A Trello-like application for managing tasks and projects",
    imageUrl: "/placeholder.svg?height=200&width=400",
    tags: ["Next.js", "TypeScript", "Prisma"],
    link: "https://example.com/task-manager",
  },
];

export function MyProjects() {
  return (
    <section className="py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
