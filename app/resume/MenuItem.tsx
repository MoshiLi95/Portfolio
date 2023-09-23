"use client";
import { useEffect, useState } from "react";
import { clsx } from "clsx";

export default function MenuItem() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sections, setSections] = useState<HTMLElement[]>([]);

  useEffect(() => {
    setSections(Array.from(document.getElementsByTagName("section")));
  }, []);

  useEffect(() => {
    const scrollListener = () => {
      sections.forEach((section, index) => {
        const { top } = section.getBoundingClientRect();
        if (window.innerHeight / 2 > top && top > 0) {
          setSelectedIndex(index);
        }
      });
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [sections]);

  return (
    <ul className="flex h-full w-10 animate-fade-right flex-col justify-around animate-delay-1000 animate-duration-1000 xl:h-auto xl:w-auto xl:items-center xl:justify-center xl:gap-10">
      {sections.map((section, index) => {
        return (
          <li
            key={index}
            className={`list--item ${clsx({
              selected: selectedIndex === index,
            })}`}
          >
            <span
              onClick={() => {
                window.scrollTo({
                  top:
                    section.getBoundingClientRect().top + window.scrollY - 74,
                  behavior: "smooth",
                });
              }}
            >
              {section.getAttribute("section-name")}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
