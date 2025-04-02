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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 16"
            width="24"
            height="16"
          >
            <rect width="24" height="8" fill="#fff" />
            <rect y="8" width="24" height="8" fill="#d7141a" />
            <path d="M0,0 L12,8 L0,16 Z" fill="#11457e" />
          </svg>
        </span>
      ) : (
        <span className="scale-125">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 16"
            width="24"
            height="16"
          >
            <rect width="24" height="16" fill="#fff" />
            <rect y="0" width="24" height="1.23" fill="#b22234" />
            <rect y="2.46" width="24" height="1.23" fill="#b22234" />
            <rect y="4.92" width="24" height="1.23" fill="#b22234" />
            <rect y="7.38" width="24" height="1.23" fill="#b22234" />
            <rect y="9.85" width="24" height="1.23" fill="#b22234" />
            <rect y="12.31" width="24" height="1.23" fill="#b22234" />
            <rect y="14.77" width="24" height="1.23" fill="#b22234" />
            <rect width="9.6" height="8.62" fill="#3c3b6e" />
            {/* Simplified star pattern - 9 stars to represent the full 50 */}
            <circle cx="1.6" cy="1.44" r="0.5" fill="white" />
            <circle cx="4.8" cy="1.44" r="0.5" fill="white" />
            <circle cx="8.0" cy="1.44" r="0.5" fill="white" />
            <circle cx="1.6" cy="4.31" r="0.5" fill="white" />
            <circle cx="4.8" cy="4.31" r="0.5" fill="white" />
            <circle cx="8.0" cy="4.31" r="0.5" fill="white" />
            <circle cx="1.6" cy="7.18" r="0.5" fill="white" />
            <circle cx="4.8" cy="7.18" r="0.5" fill="white" />
            <circle cx="8.0" cy="7.18" r="0.5" fill="white" />
          </svg>
        </span>
      )}
    </Button>
  );
};

export default LanguageSwitch;
