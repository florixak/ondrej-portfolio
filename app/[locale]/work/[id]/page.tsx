import { getProjectById } from "@/actions/actions";
import ProjectButtons from "@/components/ProjectButtons";
import ProjectImages from "@/components/ProjectImages";
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
        <div className="flex flex-col text-center">
          <h2 className="text-2xl font-bold text-foreground">
            {project.title}
          </h2>
          <p className="mt-2 text-sm">{project.technologies.join(", ")}</p>
          <p className="text-sm text-muted-foreground">{project.createdAt}</p>
        </div>
        <ProjectImages images={project.images} />
        {/* <Image
          src={project.image}
          alt={project.title}
          className="object-cover rounded-lg max-w-3xl w-full group-hover:scale-105 transition-transform duration-300 ease-in-out shadow-lg"
        /> */}
        <p className="mt-2 text-base max-w-2xl">
          {project.detailedDescription}
        </p>

        <ProjectButtons project={project} />
      </div>
    </section>
  );
};

export default WorkInfoPage;
