import React from "react";
import CardTilt from "../CardTilt";
import { Project as ProjectType } from "@/types/types";
import Image from "next/image";
import { Button } from "../ui/button";
import Technology from "../Technology";
import { getTranslations } from "next-intl/server";

type ProjectProps = {
  project: ProjectType;
};

const Project = async ({ project }: ProjectProps) => {
  const t = await getTranslations("projects");

  return (
    <CardTilt
      disableTilt
      className="relative w-full max-w-xl overflow-hidden border-none"
      href={`/work/${project.id}`}
    >
      <Image
        src={project.images[0] || "/placeholder.png"}
        alt={project.title}
        width={400}
        height={300}
        className="object-cover rounded-lg w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/50 to-black/30 rounded-lg transition-opacity duration-300 ease-in-out" />

      <div className="gap-4 p-4 absolute -translate-y-56 md:-translate-y-34 group-hover:-translate-y-46 flex flex-col items-start justify-center rounded-b-lg transition-transform duration-300 ease-in-out text-white">
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold">{project.title}</h3>
          <ul className="flex gap-2 flex-wrap mt-2">
            {project.technologies.slice(0, 3).map((technology) => (
              <Technology key={technology} technology={technology} />
            ))}
            {project.technologies.length > 3 && (
              <Technology technology={`...`} />
            )}
          </ul>
          <p className="mt-2 text-sm dark:text-muted-foreground text-white line-clamp-2">
            {project.description}
          </p>
        </div>

        <Button className="md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer">
          {t("buttonText")}
        </Button>
      </div>
    </CardTilt>
  );
};

export default Project;
