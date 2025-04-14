import { getProjectById } from "@/actions/actions";
import ProjectButtons from "@/components/project/ProjectButtons";
import ProjectImages from "@/components/project/ProjectImages";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);
  const t = await getTranslations("metadata");
  return {
    title: `${t("title").split("F")[0]} ${project.title}`,
    description: project.description,
  };
};

const WorkInfoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);

  return (
    <section>
      <div className="flex-center flex-col gap-4 p-4">
        <div className="flex flex-col text-center gap-1">
          <h2 className="text-2xl font-bold text-foreground">
            {project.title}
          </h2>
          <ul className="flex justify-center gap-2 flex-wrap">
            {project.technologies.map((technology) => (
              <li
                key={technology}
                className="text-sm bg-muted px-2 py-1 rounded-md"
              >
                {technology}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted-foreground">
            {project.createdAt
              ? new Date(project.createdAt).toLocaleDateString()
              : null}
          </p>
        </div>
        <ProjectImages images={project.images} />

        <ProjectButtons project={project} />
        <p className=" text-base max-w-2xl">{project.detailedDescription}</p>
      </div>
    </section>
  );
};

export default WorkInfoPage;
