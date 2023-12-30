// app/components/ThemeSwitcher.tsx
"use client";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Button
        onClick={() => setTheme("light")}
        variant="light"
        isIconOnly
        aria-label="Light theme"
      >
        <CiLight className="text-4xl" />
      </Button>
      <Button
        onClick={() => setTheme("dark")}
        variant="light"
        isIconOnly
        aria-label="Dark theme"
      >
        <MdDarkMode className="text-4xl" />
      </Button>
    </div>
  );
}
