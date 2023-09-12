import MenuItem from "./MenuItem";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import Skills from "./Skills";

import "./style.css";

export default function Resume() {
  return (
    <div className="resume--container">
      <aside className="sticky left-0 flex h-screen flex-col flex-wrap items-center justify-between sm:w-2/12">
        <h1 className="hidden text-3xl font-semibold tracking-widest text-blue-600 dark:text-green-400 sm:block">
          Resume
        </h1>
        <MenuItem />
        <button className="hidden sm:block">See my Resume</button>
      </aside>

      <main className="w-full sm:w-10/12">
        <Experience />
        <Projects />
        <Education />
        <Skills />
      </main>
    </div>
  );
}
