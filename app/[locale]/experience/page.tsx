import { getExperience } from "@/actions/actions";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import { getTranslations } from "next-intl/server";

export const generateMetadata = async () => {
  const tMeta = await getTranslations("metadata");
  return {
    title: `${tMeta("experienceTitle")}`,
  };
};

const ExperiencePage = async () => {
  const expierence = await getExperience();

  return <ExperienceTimeline experience={expierence} />;
};

export default ExperiencePage;
