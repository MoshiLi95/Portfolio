import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "./(Utilities)/Icons";
import { EmailButton, TypingHeader } from "./(Home)";
//import Elephant from "./(Elephant)";
import ElephantModel from "./(Elephant)";

import "./style.css";

export default function Home() {
  return (
    <>
      <main className="md:p10 flex min-h-screen flex-col items-center justify-center p-5 pt-24 dark:bg-zinc-800  md:flex-row">
        <div className="flex justify-center md:w-6/12">
          <div className="inline-block">
            <div className="flex flex-row">
              <h1 className="text-4xl font-semibold">
                <span className="font-light">Hi, I am </span>
                <TypingHeader />
              </h1>
            </div>
            <p className="mt-5 text-4xl font-light">
              I am a Software Developer,
              <br />
              in Toronto, Canada.
            </p>
            <div className="mt-8 flex flex-row flex-wrap gap-8">
              <Link
                href={"https://www.linkedin.com/in/moshi-li/"}
                target="_blank"
              >
                <LinkedInIcon
                  size="text-5xl"
                  svgClassName="fill-sky-700 dark:fill-white"
                />
              </Link>
              <Link href={"https://github.com/Moshi-Li"} target="_blank">
                <GithubIcon
                  size="text-5xl"
                  svgClassName="fill-black dark:fill-white"
                />
              </Link>
              <EmailButton />
            </div>
            <div className="mt-5 flex flex-col justify-center gap-2 sm:mt-10">
              <Link href={"/resume"} className="mt-5 w-52 lg:mt-0">
                <button className="h-14 w-52 bg-blue-600 px-4 py-2 text-xl font-semibold text-white transition hover:bg-blue-500 hover:font-medium focus:ring dark:bg-green-500 dark:hover:bg-green-400">
                  See my resume
                </button>
              </Link>
              <Link
                href={"/about"}
                className="h-8 w-52  px-4 py-2 text-center text-base text-blue-600 transition hover:font-semibold hover:text-blue-500 dark:text-green-500 dark:hover:text-green-400 "
              >
                more about me
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 aspect-video w-full sm:mt-0 md:w-6/12">
          <ElephantModel />
        </div>
      </main>
    </>
  );
}
