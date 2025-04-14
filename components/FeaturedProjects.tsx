import { getProjects } from "@/actions/actions";
import { Project as ProjectType } from "@/types/types";
import { getTranslations } from "next-intl/server";
import Project from "./Project";

const FeaturedProjects = async () => {
  const t = await getTranslations("projects");
  const projects: ProjectType[] = await getProjects({
    featured: true,
    limit: 3,
  });

  return (
    <section className="flex-center flex-col gap-4 p-4">
      <div className="text-center flex-col gap-4">
        <h2 className="text-2xl font-bold text-foreground">
          {t("featured.title")}
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {t("featured.description")}
        </p>
      </div>
      <div className="flex gap-4 mt-4 flex-wrap justify-center">
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
