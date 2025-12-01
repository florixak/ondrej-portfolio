import { Project } from "@/types/types";
import ProjectImages from "./ProjectImages";
import ProjectButtons from "./ProjectButtons";
import ProjectTech from "./project-tech";

type ProjectContentProps = {
  project: Project;
};

const ProjectContent = ({ project }: ProjectContentProps) => {
  return (
    <section className="flex-center flex-col gap-4 p-4 max-w-3xl mx-auto">
      <div className="flex flex-col text-center gap-1">
        <h2 className="text-2xl font-bold text-foreground">{project.title}</h2>
        <ProjectTech technologies={project.technologies} />
        <p className="text-sm text-muted-foreground">
          {project.createdAt
            ? new Date(project.createdAt).toLocaleDateString()
            : null}
        </p>
      </div>
      <ProjectImages images={project.images} />

      <ProjectButtons github={project.github} url={project.url} />
      <p className="text-base">{project.detailedDescription}</p>
    </section>
  );
};

export default ProjectContent;
