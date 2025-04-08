"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <Button variant="ghost" className="cursor-pointer h-10" />;
  }

  return (
    <button className="cursor-pointer w-10 h-10" onClick={handleThemeChange}>
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeSwitch;
