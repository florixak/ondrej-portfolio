"use client";

// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion as m } from "motion/react";
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
    return <Button variant="ghost" className="cursor-pointer w-5 h-5 p-0" />;
  }

  return (
    <Button
      variant="ghost"
      className="cursor-pointer w-5 h-5 p-0"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? (
        <span className="scale-125">
          <Sun />
        </span>
      ) : (
        <span className="scale-125">
          <Moon />
        </span>
      )}
    </Button>
  );
};

export default ThemeSwitch;
