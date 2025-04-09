"use client";

import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FiEye, FiLink, FiPhone, FiPlus } from "react-icons/fi";
import * as Dialog from "@radix-ui/react-dialog";
import { NavLink } from "./Header";
import { useRouter } from "@/i18n/routing";

type CommandMenuProps = {
  navLinks: NavLink[];
};

const CommandMenu = ({ navLinks }: CommandMenuProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  // Toggle the menu when ⌘K is pressed
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

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
      title="Global Command Menu"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-background rounded-lg shadow-xl border-background border overflow-hidden w-full max-w-lg mx-auto mt-32"
      >
        <Dialog.Title className="sr-only">Command Menu</Dialog.Title>

        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative border-b border-stone-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-primary-green">"{value}"</span>
          </Command.Empty>

          <Command.Group
            heading="Links"
            className="text-sm mb-3 text-stone-400"
          >
            {navLinks.map((link) => (
              <Command.Item
                key={link.name}
                className="flex cursor-pointer transition-colors p-2 text-sm text-foreground hover:bg-stone-200 rounded items-center gap-2"
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
            heading="Projects"
            className="text-sm text-stone-400 mb-3"
          >
            {[
              { name: "New Project", icon: FiPlus, href: "/work/new" },
              { name: "View Projects", icon: FiEye, href: "/work" },
            ].map((link) => (
              <Command.Item
                key={link.name}
                className="flex cursor-pointer transition-colors p-2 text-sm text-foreground hover:bg-stone-200 rounded items-center gap-2"
                onSelect={() => {
                  router.push(link.href);
                  setOpen(false);
                }}
              >
                {link.name}
              </Command.Item>
            ))}
          </Command.Group>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};

export default CommandMenu;
