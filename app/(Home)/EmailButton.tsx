"use client";
import { useEffect, useState } from "react";
import { clsx } from "clsx";
import { LuMailbox, LuCheck } from "react-icons/lu";

export default function EmailButton() {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if (display) setTimeout(() => setDisplay(false), 5000);
  }, [display]);

  return (
    <div className="relative flex flex-row flex-wrap gap-5">
      <button
        className="group flex h-12 border-2 border-blue-600 focus:ring dark:border-green-500"
        onClick={() => {
          setDisplay(true);
        }}
      >
        <div className="flex h-full w-12 items-center justify-center bg-blue-600 dark:bg-green-500">
          <LuMailbox size="24px" color="white" />
        </div>
        <div className="flex h-full items-center justify-center px-5 text-xl font-semibold text-blue-600 group-hover:bg-blue-600 group-hover:text-white dark:text-green-500 dark:group-hover:dark:bg-green-500">
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
          className="ml-2 cursor-pointer text-blue-600 hover:font-semibold dark:text-green-500"
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
