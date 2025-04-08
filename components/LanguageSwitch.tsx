"use client";

import { useLocale } from "next-intl";
import React from "react";
import { Button } from "./ui/button";
import CSFlag from "../assets/cs-flag.svg";
import USFlag from "../assets/us-flag.svg";

import { usePathname, useRouter } from "@/i18n/routing";
import Image from "next/image";

const LanguageSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "cs" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <button onClick={handleLanguageChange} className="cursor-pointer h-5">
      {locale === "en" ? (
        <Image
          src={CSFlag}
          alt="Czech flag"
          width={32}
          height={32}
          className="size-full"
        />
      ) : (
        <Image
          src={USFlag}
          alt="US flag"
          width={32}
          height={32}
          className="size-full"
        />
      )}
    </button>
  );
};

export default LanguageSwitch;
