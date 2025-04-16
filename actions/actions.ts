"use server";

import { Experience, Project } from "@/types/types";
import BuffetImage from "@/assets/buffet/buffet.png";
import BuffetImage2 from "@/assets/buffet/buffet2.png";
import BuffetImage3 from "@/assets/buffet/buffet3.png";
import BuffetImage4 from "@/assets/buffet/buffet4.png";
import BuffetImage5 from "@/assets/buffet/buffet5.png";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { School, Star } from "lucide-react";
import React from "react";

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

const experience = (t: any): Experience[] => [
  {
    id: "1",
    date: "2020 - present",
    title: t("ownprojects.title"),
    subtitle: t("ownprojects.subtitle"),
    description: t("ownprojects.description"),
    icon: React.createElement(Star),
  },
  {
    id: "2",
    date: "2021 - present",
    title: t("education.highschool.title"),
    subtitle: t("education.highschool.subtitle"),
    description: t("education.highschool.description"),
    icon: React.createElement(School),
  },
  {
    id: "3",
    date: "2024 - present",
    title: t("projects.buffet.title"),
    subtitle: t("projects.buffet.subtitle"),
    description: t("projects.buffet.description"),
    icon: React.createElement(School),
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
