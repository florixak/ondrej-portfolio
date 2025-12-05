"use client";

import { useLocale } from "next-intl";
import React from "react";

import { usePathname, useRouter } from "@/i18n/routing";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Languages } from "lucide-react";

const LanguageSwitch = () => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = locale === "en" ? "cs" : "en";
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleLanguageChange}>
      <SelectTrigger>
        <SelectValue>
          {locale === "en" ? "EN" : "CS"}
          <Languages />
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="en">EN</SelectItem>
          <SelectItem value="cs">CS</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitch;
