"use client";

import { Project } from "@/types/types";
import { Button } from "./ui/button";

const ProjectButtons = ({ project }: { project: Project }) => {
  return (
    <div className="flex gap-4 mt-4 flex-wrap justify-center">
      {project.github && (
        <Button asChild variant="outline">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-10 flex items-center justify-center gap-2"
          >
            GitHub
          </a>
        </Button>
      )}

      {project.url && (
        <Button asChild variant="default">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-10 flex items-center justify-center gap-2"
          >
            Live Demo
          </a>
        </Button>
      )}
    </div>
  );
};

export default ProjectButtons;
