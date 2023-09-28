"use client";
import React, { useEffect, useState } from "react";
import { clsx } from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeSwitch from "../(Utilities)/ThemeSwitch";
import { GithubIcon, LinkedInIcon } from "../(Utilities)/Icons";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    if (!open) document.body.style.overflow = "";
  }, [open]);

  return (
    <>
      <div
        className={`fixed right-2 top-5   transition-transform  md:hidden`}
        onClick={() => setOpen(!open)}
      >
        <button
          className="relative h-9 w-11 rounded-sm"
          aria-label="Open main menu"
        >
          <div className="transfor absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={` ${clsx({
                "rotate-45": open,
                "translate-y-0": open,
                "-translate-y-1.5": !open,
              })} duration-800 absolute block h-0.5 w-6  transform bg-current transition ease-in-out`}
            ></span>

            <span
              aria-hidden="true"
              className={` ${clsx({
                "opacity-0": open,
              })} duration-800 absolute block h-0.5 w-6 transform bg-current transition ease-in-out`}
            ></span>

            <span
              aria-hidden="true"
              className={` ${clsx({
                "-rotate-45": open,
                "translate-y-0": open,
                "translate-y-1.5": !open,
              })} duration-800 absolute block h-0.5 w-6  transform bg-current transition ease-in-out`}
            ></span>
          </div>
        </button>
      </div>

      <div
        className={`duration-800 fixed -right-full bottom-0 flex h-[calc(100%_-_4.5rem)] w-full flex-col 
        items-center justify-around border-[6px] border-black bg-white p-5 
        transition-transform ease-in-out dark:border-white dark:dark:bg-black md:hidden
         ${clsx({
           "-translate-x-full": open,
         })}`}
      >
        <ul className="w-full p-5 text-4xl">
          <li>
            <Link
              href="/"
              className={`relative mb-5 block w-full font-mono tracking-[1px] ${clsx(
                {
                  "font-bold underline underline-offset-4": pathname === "/",
                },
              )}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={`relative mb-5 block w-full font-mono tracking-[1px] ${clsx(
                {
                  "font-bold underline underline-offset-4":
                    pathname === "/resume",
                },
              )}`}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`relative mb-1 mb-5 block w-full font-mono tracking-[1px] ${clsx(
                {
                  "font-bold underline underline-offset-4":
                    pathname === "/about",
                },
              )}`}
            >
              About
            </Link>
          </li>
          <li>
            <span
              className="relative block w-full cursor-pointer font-mono tracking-[1px]"
              onClick={() => {
                const container =
                  document.getElementsByClassName("main--content");
                if (container[0]) {
                  setOpen(false);
                  container[0].scrollTo({
                    top: container[0].scrollHeight,
                    left: 0,
                    behavior: "smooth",
                  });
                }
              }}
            >
              Contact
            </span>
          </li>
        </ul>

        <div className="mt-5 w-full text-xl">
          <Link href="https://github.com/Moshi-Li" target="_blank">
            <div className="flex flex-row border-2 border-black dark:border-white">
              <div className=" p-2">
                <GithubIcon size="text-2xl" className="h-8 w-8" />
              </div>
              <div className="flex  items-center justify-center p-2 text-black dark:text-white">
                <span>See me on GihHub</span>
              </div>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/moshi-li/" target="_blank">
            <div className="mt-2 flex flex-row border-2 border-black dark:border-white">
              <div className=" p-2">
                <LinkedInIcon size="text-2xl" className="h-8 w-8" />
              </div>

              <div className="flex  items-center justify-center p-2 text-black dark:text-white">
                <span> See me on LinkedIn</span>
              </div>
            </div>
          </Link>
        </div>

        <div className="absolute bottom-2 right-2">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
