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
    const container = document.getElementsByClassName("main--content");
    const scrollListener = () => {
      sections.forEach((section, index) => {
        const { top } = section.getBoundingClientRect();
        const containerHeight = container[0].clientHeight;
        if (top > -containerHeight / 2 && top < containerHeight / 2) {
          setSelectedIndex(index);
        }
      });
    };

    container[0].addEventListener("scroll", scrollListener);
    return () => container[0].removeEventListener("scroll", scrollListener);
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
                const container =
                  document.getElementsByClassName("main--content");
                if (container[0]) {
                  container[0].scrollTo({
                    top:
                      section.getBoundingClientRect().top +
                      container[0].scrollTop -
                      80,
                    behavior: "smooth",
                  });
                }
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
