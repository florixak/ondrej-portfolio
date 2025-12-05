"use client";

import { Project } from "@/types/types";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type ProjectButtonsProps = {
  github?: Project["github"];
  url?: Project["url"];
};

const ProjectButtons = ({ github, url }: ProjectButtonsProps) => {
  const t = useTranslations("projects");

  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {github && (
        <Button asChild variant="outline">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-10 flex items-center justify-center gap-2"
          >
            {t("links.github")}
          </a>
        </Button>
      )}

      {url && (
        <Button asChild variant="default">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit h-10 flex items-center justify-center gap-2"
          >
            {t("links.live")}
          </a>
        </Button>
      )}
    </div>
  );
};

export default ProjectButtons;
