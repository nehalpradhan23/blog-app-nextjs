"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");
  const { setTheme } = useTheme();
  useEffect(() => {
    setTheme("dark");
    setCurrentTheme("dark");
  }, [setTheme]);

  const handleThemeChange = () => {
    if (currentTheme === "dark") {
      setTheme("light");
      setCurrentTheme("light");
    } else {
      setTheme("dark");
      setCurrentTheme("dark");
    }
  };
  return (
    <div
      onClick={handleThemeChange}
      className="p-2 hover:bg-blue-500 rounded-md hover:text-white"
    >
      {currentTheme === "dark" ? <Sun /> : <Moon />}
    </div>
  );
};

export default ThemeToggle;
