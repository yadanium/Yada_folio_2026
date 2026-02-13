import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      onClick={() => {
        sessionStorage.setItem("homeScrollY", String(window.scrollY));
      }}
      className="group block overflow-hidden bg-transparent"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-[#0BA29A]">{project.category.join(" / ")}</p>
        <div className="mt-1 flex items-baseline justify-between gap-2">
          <h3 className="text-lg">{project.title}</h3>
          <span className="text-sm text-gray-400">{project.year}</span>
        </div>
      </div>
    </Link>
  );
}