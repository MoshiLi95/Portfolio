import Links from "./Links";
import IconLinks from "./IconLinks";
import Sidebar from "./Sidebar";
import ThemeSwitch from "../(Utilities)/ThemeSwitch";

import "./styles.css";

export default function Navigation() {
  return (
    <nav className="fixed left-0 top-0 z-10 flex w-full flex-row justify-between bg-white px-10 py-5 transition-shadow hover:shadow-md dark:bg-zinc-800">
      <h1 className="text-2xl font-bold uppercase tracking-wider md:text-xl lg:text-2xl lg:tracking-widest ">
        Moshi Li
      </h1>
      <Links></Links>
      <div className="hidden flex-row gap-5 md:flex">
        <IconLinks />
        <ThemeSwitch />
      </div>
      <Sidebar />
    </nav>
  );
}
