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
        <span className="scale-125">
          <svg viewBox="0 0 6 4" xmlns="http://www.w3.org/2000/svg">
            <rect width="6" height="4" fill="#d7141a" />
            <rect width="6" height="2" fill="#fff" />
            <path d="M 0,0 2,2 0,4 z" fill="#11457e" />
          </svg>
        </span>
      ) : (
        <span className="scale-125">
          <svg viewBox="0 0 10 7" xmlns="http://www.w3.org/2000/svg">
            <rect width="10" height="7" fill="#fff" />
            <path
              d="M0,0.8h10 M0,2.2h10 M0,3.6h10 M0,5h10 M0,6.4h10"
              stroke="#d02f44"
              strokeWidth="0.8"
            />
            <rect width="4" height="3.8" fill="#002868" />
            <g fill="#fff">
              {/* simplified stars pattern */}
              <circle cx="0.8" cy="0.8" r="0.2" />
              <circle cx="2" cy="0.8" r="0.2" />
              <circle cx="3.2" cy="0.8" r="0.2" />
              <circle cx="0.8" cy="2" r="0.2" />
              <circle cx="2" cy="2" r="0.2" />
              <circle cx="3.2" cy="2" r="0.2" />
              <circle cx="0.8" cy="3.2" r="0.2" />
              <circle cx="2" cy="3.2" r="0.2" />
              <circle cx="3.2" cy="3.2" r="0.2" />
            </g>
          </svg>
        </span>
      )}
    </Button>
  );
};

export default LanguageSwitch;
