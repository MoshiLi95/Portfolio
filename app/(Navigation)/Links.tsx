"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="hidden flex-row gap-x-4 md:flex">
      <li>
        <Link
          href={"/"}
          className={clsx({
            "nav--link": true,
            selected: pathname === "/",
          })}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/resume"}
          className={clsx({
            "nav--link": true,
            selected: pathname === "/resume",
          })}
        >
          Resume
        </Link>
      </li>
      <li>
        <Link
          href={"/about"}
          className={clsx({
            "nav--link": true,
            selected: pathname === "/about",
          })}
        >
          About
        </Link>
      </li>
      <li>
        <span
          className="nav--link cursor-pointer"
          onClick={() => {
            window.scrollTo({
              top: document.body.scrollHeight,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          Contact
        </span>
      </li>
    </ul>
  );
}
