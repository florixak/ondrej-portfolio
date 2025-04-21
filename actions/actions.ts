"use server";

import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { experience, projects } from "@/data/data";

export const getProjects = async ({
  featured = false,
  technology = "",
  limit = 0,
}: {
  featured?: boolean;
  technology?: string;
  limit?: number;
}) => {
  const t = await getTranslations("projects");
  let filteredProjects = [...projects(t)];

  if (featured) {
    filteredProjects = filteredProjects.filter((project) => project.featured);
  }

  if (technology) {
    filteredProjects = filteredProjects.filter((project) =>
      project.technologies.some(
        (tech) => tech.toLowerCase() === technology.toLowerCase()
      )
    );
  }

  if (limit > 0) {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return filteredProjects;
};

export const getProjectById = async (id: string) => {
  const t = await getTranslations("projects");
  const project = projects(t).find((project) => project.id === id);

  if (!project) {
    notFound();
  }

  return project;
};

export const getExperience = async () => {
  const t = await getTranslations("experience");
  const experienceList = experience(t);

  return experienceList;
};

export const getExperienceById = async (id: string) => {
  const t = await getTranslations("experience");
  const experienceList = experience(t);
  const exp = experienceList.find((exp) => exp.title === id);

  if (!exp) {
    notFound();
  }

  return exp;
};
