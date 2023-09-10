"use client";
import { useState } from "react";
import Typed from "react-typed";

export default function TypingHeader() {
  return (
    <Typed
      className={`text-4xl font-medium text-blue-600 dark:text-green-500 sm:tracking-widest`}
      strings={["$whoami"]}
      typeSpeed={50}
      backSpeed={50}
      showCursor
      cursorChar="<_"
    ></Typed>
  );
}
