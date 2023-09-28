import Links from "./Links";
import IconLinks from "./IconLinks";
import Sidebar from "./Sidebar";
import ThemeSwitch from "../(Utilities)/ThemeSwitch";

import "./styles.css";

export default function Navigation() {
  return (
    <nav className="fixed left-0 top-0 z-10 flex h-20 w-full flex-row justify-between border-[6px] border-black bg-white  dark:border-white dark:bg-black ">
      <div className="flex h-full items-center justify-center border-r-8 border-black px-8 dark:border-white">
        <h1 className="text-2xl font-bold uppercase tracking-[.75em] md:text-xl  lg:text-2xl">
          Moshi Li
        </h1>
      </div>
      <Links></Links>
      <div className="hidden flex-row items-center gap-5 border-l-[6px] border-black  px-8 dark:border-white md:flex">
        <IconLinks />
        <ThemeSwitch />
      </div>
      <Sidebar />
    </nav>
  );
}
