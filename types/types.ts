import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { StaticImageData } from "next/image";

export type Project = {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  technologies: string[];
  featured?: boolean;
  url?: string;
  image: string | StaticImport | StaticImageData;
  github: string;
  createdAt?: string;
};
