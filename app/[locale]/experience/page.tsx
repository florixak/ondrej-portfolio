import { getTranslations } from "next-intl/server";
import React from "react";

export const generateMetadata = async () => {
  const tMeta = await getTranslations("metadata");
  return {
    title: `${tMeta("experienceTitle")}`,
  };
};

const ExperiencePage = () => {
  return <div>ExperiencePage</div>;
};

export default ExperiencePage;
