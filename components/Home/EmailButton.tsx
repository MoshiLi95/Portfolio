"use client";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { LuMailbox, LuCheck } from "react-icons/lu";
import { useTheme } from "next-themes";

export default function EmailButton() {
  const [display, setDisplay] = useState(false);
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (display) setTimeout(() => setDisplay(false), 5000);
  }, [display]);

  if (!mounted) return <div className="w-[307px]"></div>;

  return (
    <div className="relative flex flex-row flex-wrap gap-5">
      <button
        className="group flex h-12 border-2 border-black bg-transparent  dark:border-white"
        onClick={() => {
          setDisplay(true);
        }}
        tabIndex={-1}
      >
        <div className="flex h-full w-12 items-center justify-center bg-black dark:bg-white">
          <LuMailbox
            size="24px"
            color={resolvedTheme === "dark" ? "black" : "white"}
          />
        </div>
        <div className="email--content">
          <span>li.moshi@outlook.com</span>
        </div>
      </button>
      <div
        className={`duration-250 absolute top-full flex translate-y-2 items-center justify-center opacity-0 transition ease-in-out ${clsx(
          { "opacity-100": display },
        )}`}
      >
        <span className="mr-2 inline-block">
          <LuCheck size={24} color="green" />
        </span>
        Copied to clipboard!
        <span
          className="ml-2 cursor-pointer  underline  underline-offset-4 hover:font-semibold"
          onClick={() => {
            window.location.href = "mailto:li.moshi@outlook.com";
          }}
        >
          Email me
        </span>
      </div>
    </div>
  );
}
