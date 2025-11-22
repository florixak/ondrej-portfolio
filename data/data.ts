import BuffetImage from "@/assets/buffet/buffet.png";
import BuffetImage2 from "@/assets/buffet/buffet2.png";
import BuffetImage3 from "@/assets/buffet/buffet3.png";
import BuffetImage4 from "@/assets/buffet/buffet4.png";
import BuffetImage5 from "@/assets/buffet/buffet5.png";
import BuffetImage6 from "@/assets/buffet/buffet6.png";
import { Project, Experience } from "@/types/types";
import { Star, School, Github, Mail, Linkedin, Instagram } from "lucide-react";
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
  {
    id: "2",
    title: t("pixelverse.title"),
    translationTitle: "pixelverse",
    description: t("pixelverse.description"),
    detailedDescription: t("pixelverse.detailedDescription"),
    technologies: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Sanity.io",
      "Tanstack Query",
      "Tanstack Table",
    ],
    featured: true,
    url: "https://pixel-verse-eta.vercel.app/",
    images: [
      BuffetImage,
      BuffetImage2,
      BuffetImage3,
      BuffetImage4,
      BuffetImage5,
      BuffetImage6,
    ],
    github: "https://github.com/florixak/PixelVerse",
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
    date: "2024 - 2025",
    title: t("projects.buffet.title"),
    subtitle: t("projects.buffet.subtitle"),
    description: t("projects.buffet.description"),
    icon: React.createElement(School),
  },
  {
    id: "4",
    date: "2025 - present",
    title: t("projects.pixelverse.title"),
    subtitle: t("projects.pixelverse.subtitle"),
    description: t("projects.pixelverse.description"),
    icon: React.createElement(School),
  },
  {
    id: "5",
    date: "2025 - present",
    title: t("projects.university.title"),
    subtitle: t("projects.university.subtitle"),
    description: t("projects.university.description"),
    icon: React.createElement(School),
  },
];

export const contacts = [
  {
    name: "GitHub",
    icon: Github,
    href: "https://github.com/florixak",
  },
  {
    name: "E-Mail",
    icon: Mail,
    href: "mailto:ondrej@ptakondrej.dev",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://www.linkedin.com/in/ptakondrej",
  },
];
