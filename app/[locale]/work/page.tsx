import { getProjects } from "@/actions/actions";
import AnimationWrapper from "@/components/AnimationWrapper";
import Project from "@/components/Project";
import { Project as ProjectType } from "@/types/types";

const WorkPage = async () => {
  const projects: ProjectType[] = await getProjects({});

  return (
    <section className="flex-center flex-col gap-4 p-4">
      <AnimationWrapper delay={0.2}>
        <h2 className="text-2xl font-bold text-foreground">My Work</h2>
      </AnimationWrapper>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {projects.map((project, index) => (
          <AnimationWrapper key={project.id} delay={0.4 + index * 0.2}>
            <Project project={project} />
          </AnimationWrapper>
        ))}
      </div>
    </section>
  );
};

export default WorkPage;
