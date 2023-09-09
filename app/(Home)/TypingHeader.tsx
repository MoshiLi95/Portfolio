"use client";
import { Ma_Shan_Zheng } from "next/font/google";
import { useState } from "react";
import Typed from "react-typed";

const LOOP_COUNT = 2;
const maShanZheng = Ma_Shan_Zheng({ weight: "400", subsets: ["latin"] });

export default function TypingHeader() {
  const [completedCount, setCompletedCount] = useState(0);

  return completedCount === LOOP_COUNT ? (
    <span className="text-5xl font-medium text-blue-600 dark:text-green-500 sm:tracking-widest">
      Moshi Li
    </span>
  ) : (
    <Typed
      className={`text-5xl font-medium text-blue-600 dark:text-green-500 sm:tracking-widest`}
      strings={[
        `<span class="${maShanZheng.className} text-blue-900 dark:text-green-300">李 墨 石</span>`,
        "Moshi Li",
      ]}
      typeSpeed={50}
      backSpeed={50}
      showCursor
      loop
      loopCount={LOOP_COUNT}
      onComplete={() => {
        setCompletedCount(completedCount + 1);
      }}
    ></Typed>
  );
}
