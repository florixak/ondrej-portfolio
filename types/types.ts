import { JSX } from "react";

export type Project = {
  id: string;
  title: string;
  translationTitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  featured?: boolean;
  url?: string;
  images: string[];
  github: string;
  createdAt?: string;
  lastUpdated?: string;
};

export type Experience = {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
};
