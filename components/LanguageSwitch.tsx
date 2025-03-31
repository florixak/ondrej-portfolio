"use client";

import { useLocale } from "next-intl";
import React from "react";
import { Button } from "./ui/button";

import { usePathname, useRouter } from "@/i18n/routing";

const LanguageSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "cs" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Button
      onClick={handleLanguageChange}
      variant="ghost"
      className="cursor-pointer"
    >
      {locale === "en" ? (
        <span className="text-2xl">🇨🇿</span>
      ) : (
        <span className="text-2xl">🇺🇸</span>
      )}
    </Button>
  );
};

export default LanguageSwitch;
