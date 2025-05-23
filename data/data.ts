import BuffetImage from "@/assets/buffet/buffet.png";
import BuffetImage2 from "@/assets/buffet/buffet2.png";
import BuffetImage3 from "@/assets/buffet/buffet3.png";
import BuffetImage4 from "@/assets/buffet/buffet4.png";
import BuffetImage5 from "@/assets/buffet/buffet5.png";
import BuffetImage6 from "@/assets/buffet/buffet6.png";
import { Project, Experience } from "@/types/types";
import { Star, School } from "lucide-react";
import React from "react";

export const projects = (t: any): Project[] => [
  {
    id: "1",
    title: t("buffet.title"),
    translationTitle: "buffet",
    description: t("buffet.description"),
    detailedDescription: t("buffet.detailedDescription"),
    technologies: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Axios",
      "Zustand",
      "React Router",
      "React Query",
    ],
    featured: true,
    url: "https://buffet.vlastas.cc/",
    images: [
      BuffetImage,
      BuffetImage2,
      BuffetImage3,
      BuffetImage4,
      BuffetImage5,
      BuffetImage6,
    ],
    github: "https://github.com/Web-Projekty/buffet-rezervace",
    createdAt: "2024-09-13",
    lastUpdated: "2024-09-13",
  },
];

export const experience = (t: any): Experience[] => [
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
    date: "2021 - 2025",
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
