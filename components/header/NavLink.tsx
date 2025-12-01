"use client";

import { Link, usePathname } from "@/i18n/routing";
import React from "react";
import { NavLink as NavLinkType } from "./Header";

type NavLinkProps = NavLinkType & {
  onClick?: () => void;
};

const NavLink = ({ name, href, onClick }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      key={name}
      href={href}
      className={`${isActive ? "font-bold" : ""} nav-link`}
      onClick={onClick}
    >
      {name}
    </Link>
  );
};

export default NavLink;
