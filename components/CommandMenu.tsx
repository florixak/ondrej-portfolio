"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { NavLink } from "./Header";
import { useRouter } from "@/i18n/routing";
import { projects } from "@/data/data";
import { useTranslations } from "next-intl";
import { Title } from "@radix-ui/react-dialog";

type CommandMenuProps = {
  navLinks: NavLink[];
};

const CommandMenu = ({ navLinks }: CommandMenuProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();
  const cmdTranslations = useTranslations("common.commandMenu");
  const projectsTranslations = useTranslations("projects");

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const itemStyle =
    "flex cursor-pointer transition-colors p-2 text-sm text-foreground hover:bg-stone-200/10 rounded items-center gap-2";

  const translatedProjects = projects(projectsTranslations);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 backdrop-blur-sm z-50 flex items-start px-4"
      onClick={() => setOpen(false)}
      title="Global Command Menu"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-lg shadow-xl border-background border overflow-hidden w-full max-w-lg mx-auto mt-32"
      >
        <Title className="sr-only">{cmdTranslations("title")}</Title>

        <Command.Input
          autoFocus
          value={value}
          onValueChange={setValue}
          placeholder={cmdTranslations("placeholder")}
          className="relative border-b border-primary-green p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            {cmdTranslations("noResults", { value })}
          </Command.Empty>

          <Command.Group
            heading={cmdTranslations("subtitles.links")}
            className="text-sm mb-3 text-stone-400"
          >
            {navLinks.map((link) => (
              <Command.Item
                key={link.name}
                className={`${itemStyle} data-[selected=true]:bg-primary-green/20 data-[selected=true]:text-primary-green`}
                onSelect={() => {
                  router.push(link.href);
                  setOpen(false);
                }}
              >
                {link.name}
              </Command.Item>
            ))}
          </Command.Group>

          <Command.Group
            heading={cmdTranslations("subtitles.projects")}
            className="text-sm text-stone-400 mb-3"
          >
            {translatedProjects.map((project) => (
              <Command.Item
                key={project.id}
                className={`${itemStyle} data-[selected=true]:bg-primary-green/20 data-[selected=true]:text-primary-green`}
                onSelect={() => {
                  if (!project.url) return;
                  router.push(`/work/${project.id}`);
                  setOpen(false);
                }}
              >
                {project.title}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
