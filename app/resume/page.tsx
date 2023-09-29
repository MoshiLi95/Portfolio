import Link from "next/link";

import {
  MenuItem,
  Experience,
  Projects,
  Education,
  Skills,
  DownloadBtn,
  PreviewBtn,
} from "../../components/Resume";
import "./style.css";

export const metadata = {
  title: "Resume",
};

export default function Resume() {
  return (
    <div className="resume--container">
      <aside className="sticky left-0 flex h-[calc(100vh-80px)] flex-col flex-wrap items-center justify-between xl:w-2/12">
        <h1 className="hidden text-3xl font-semibold tracking-widest  xl:block">
          Resume
        </h1>
        <MenuItem />

        <div className="flex flex-col items-center justify-center">
          <PreviewBtn />
          <DownloadBtn />
        </div>
      </aside>

      <main className="w-full overflow-y-hidden border-l-[6px] border-black pl-5 pt-10 dark:border-white sm:w-10/12">
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
