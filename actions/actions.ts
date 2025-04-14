"use server";

import { Project } from "@/types/types";
import BuffetImage from "@/assets/buffet/buffet.png";
import BuffetImage2 from "@/assets/buffet/buffet2.png";
import BuffetImage3 from "@/assets/buffet/buffet3.png";
import BuffetImage4 from "@/assets/buffet/buffet4.png";
import BuffetImage5 from "@/assets/buffet/buffet5.png";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";

const projects = (t: any): Project[] => [
  {
    id: "1",
    title: t("buffet.title"),
    translationTitle: "buffet",
    description: t("buffet.description"),
    detailedDescription: t("buffet.detailedDescription"),
    technologies: ["React", "TypeScript", "TailwindCSS"],
    featured: true,
    url: "https://buffet.vlastas.cc/",
    images: [
      BuffetImage,
      BuffetImage2,
      BuffetImage3,
      BuffetImage4,
      BuffetImage5,
    ],
    github: "https://github.com/Web-Projekty/buffet-rezervace",
    createdAt: "2024-09-13",
    lastUpdated: "2024-09-13",
  },
];

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
