"use client";

import { NavLink as NavLinkType } from "./Header";
import ThemeSwitch from "./ThemeSwitch";
import MobileNavButton from "./MobileNavButton";
import { useState } from "react";
import NavLink from "./NavLink";

type MobileNavProps = {
  navLinks: NavLinkType[];
};

const MobileNav = ({ navLinks }: MobileNavProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="md:hidden flex gap-4 items-center">
      <ThemeSwitch />
      <MobileNavButton handleOpenMenu={handleOpenMenu} />
      <div
        className={`fixed top-0 left-0 h-screen w-full bg-background text-foreground flex flex-col items-center justify-center gap-4 z-50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            name={link.name}
            href={link.href}
            onClick={handleOpenMenu}
          />
        ))}
      </div>
    </nav>
  );
};

export default MobileNav;
