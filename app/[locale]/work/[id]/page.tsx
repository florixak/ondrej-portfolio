import { getProjectById } from "@/actions/actions";
import ProjectContent from "@/components/project/project-content";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);
  const t = await getTranslations("metadata");
  return {
    title: `${project.title} ${t("projectTitle")}`,
    description: project.description,
  };
};

// export const generateStaticParams = async () => {
//   const projects = await getProjects({});
//   return projects.map((project) => ({ id: project.id }));
// };

const WorkInfoPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const project = await getProjectById(id);

  return <ProjectContent project={project} />;
};

export default WorkInfoPage;
