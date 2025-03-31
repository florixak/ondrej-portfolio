"use client";

// import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // Only show the UI after component has mounted to avoid hydration errors
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return <button className="w-6" />;
  }

  return (
    <button
      className="bg-background cursor-pointer"
      onClick={handleThemeChange}
    >
      {theme === "dark" ? (
        <span className="text-2xl">☀️</span>
      ) : (
        <span className="text-xl">🌙</span>
      )}
    </button>
    // <button className="bg-background" onClick={handleThemeChange}>
    //   {theme === "dark" ? (
    //     <span className="text-2xl">
    //       <Moon />
    //     </span>
    //   ) : (
    //     <span className="text-2xl">
    //       <Sun />
    //     </span>
    //   )}
    // </button>
  );
};

export default ThemeSwitch;
