import React from "react";
import CardTilt from "./CardTilt";
import { Project as ProjectType } from "@/types/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

type ProjectProps = {
  project: ProjectType;
};

const Project = ({ project }: ProjectProps) => {
  const t = useTranslations("projects");
  return (
    <CardTilt
      disableTilt
      className="relative w-full max-w-2xl overflow-hidden"
      href={`/work/${project.id}`}
    >
      <Image
        src={project.image}
        alt={project.title}
        className="object-cover rounded-lg w-full h-full"
      />
      <div className="absolute inset-0 bg-black/50 rounded-lg transition-opacity duration-300 ease-in-out" />
      <div className="gap-4 p-4 absolute -translate-y-32 group-hover:-translate-y-46 flex flex-col items-start justify-center rounded-lg transition-all duration-300 ease-in-out">
        <div>
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <p className="mt-2 text-sm">{project.technologies.join(", ")}</p>
          <p className="mt-2 text-sm">{project.description}</p>
        </div>

        <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
          {t("buttonText")}
        </Button>
      </div>
    </CardTilt>
  );
};

export default Project;
