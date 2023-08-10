import Links from "./Links";
import Link from "next/link";
import { LinkedInIcon, GithubIcon } from "../(Utilities)/icons";

export default function Navigation() {
  return (
    <nav className="fixed left-0 top-0 flex w-screen flex-row justify-between border-b border-black p-5">
      <h1
        className="text-2xl font-bold uppercase tracking-wider 
      md:text-xl lg:text-2xl lg:tracking-widest"
      >
        Moshi Li
      </h1>
      <Links></Links>
      <div className="flex flex-row gap-2 ">
        <Link href={"https://www.linkedin.com/in/moshi-li/"} target="_blank">
          <LinkedInIcon
            size="text-4xl"
            svgClassName="group-hover:fill-sky-800 fill-gray-600"
          />
        </Link>

        <Link href={"  https://github.com/Moshi-Li"} target="_blank">
          <GithubIcon
            size="text-4xl"
            svgClassName="group-hover:fill-black fill-gray-600"
          />
        </Link>
      </div>
    </nav>
  );
}
