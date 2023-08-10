"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

import "./styles.css";

export default function Links() {
  const pathname = usePathname();

  return (
    <ul className="flex flex-row gap-x-4">
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
    </ul>
  );
}
