import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  translationTitle: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  featured?: boolean;
  url?: string;
  images: string[] | StaticImport[] | StaticImageData[];
  github: string;
  createdAt?: string;
  lastUpdated?: string;
};
