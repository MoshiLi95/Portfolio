import Link from "next/link";
import ScrollProgress from "./ScrollProgress";
import MenuItem from "./MenuItem";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";
import DownloadBtn from "./DownloadBtn";

import "./style.css";

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="resume--container">
      <ScrollProgress />
      <aside className="sticky left-0 flex h-screen flex-col flex-wrap items-center justify-between xl:w-2/12">
        <h1 className="hidden text-3xl font-semibold tracking-widest text-blue-600 dark:text-green-400 xl:block">
          Resume
        </h1>
        <MenuItem />

        <div className="flex flex-col items-center justify-center">
          <Link
            href={"/pdf/Moshi%20Li%20Resume.pdf"}
            target="_blank"
            className="hidden xl:block"
          >
            <button className="h-14 w-52 rounded bg-blue-600 px-4 py-2 text-base font-semibold text-white transition hover:bg-blue-500 hover:font-medium focus:ring dark:bg-green-500 dark:hover:bg-green-400">
              Preview in Browser
            </button>
          </Link>
          <DownloadBtn />
        </div>
      </aside>

      <main className="w-full overflow-y-hidden sm:w-10/12">
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
