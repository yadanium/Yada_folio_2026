import { Link } from "react-router-dom";
import { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="group block overflow-hidden bg-white"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4">
        <p className="text-sm text-[#0BA29A]">{project.category}</p>
        <h3 className="mt-1 text-lg">{project.title}</h3>
      </div>
    </Link>
  );
}