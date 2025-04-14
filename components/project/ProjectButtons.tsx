"use client";

import { Project } from "@/types/types";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

const ProjectButtons = ({ project }: { project: Project }) => {
  const t = useTranslations("projects");
  const { github, url } = project;
  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {github && (
        <Button asChild variant="outline">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-20 h-10 flex items-center justify-center gap-2"
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
            className="w-20 h-10 flex items-center justify-center gap-2"
          >
            {t("links.live")}
          </a>
        </Button>
      )}
    </div>
  );
};

export default ProjectButtons;
