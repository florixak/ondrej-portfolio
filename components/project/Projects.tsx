import React from "react";
import AnimationWrapper from "../AnimationWrapper";
import ProjectCard from "./ProjectCard";
import { getProjects } from "@/actions/actions";
import { type Project as ProjectType } from "@/types/types";

type ProjectsProps = {
  featured?: boolean;
};

const Projects = async ({ featured }: ProjectsProps) => {
  const projects: ProjectType[] = await getProjects({ featured });

  return (
    <div className="flex gap-4 mt-4 flex-wrap justify-center">
      {projects.map((project, index) => (
        <AnimationWrapper key={project.id} delay={0.4 + index * 0.2}>
          <ProjectCard project={project} />
        </AnimationWrapper>
      ))}
    </div>
  );
};

export default Projects;
