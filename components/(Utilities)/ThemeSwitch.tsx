"use client";
import React, { useEffect, useState } from "react";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useTheme } from "next-themes";

import "./ThemeSwitch.css";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="theme--switch--filler"></div>;
  return (
    <button
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
    >
      {resolvedTheme === "dark" ? (
        <HiOutlineSun
          className="h-8 w-8 text-orange-400 hover:text-orange-500"
          title="Light Mode"
        />
      ) : (
        <HiOutlineMoon
          className="h-8 w-8 text-yellow-400 hover:text-yellow-500"
          title="Dark Mode"
        />
      )}
    </button>
  );
}
