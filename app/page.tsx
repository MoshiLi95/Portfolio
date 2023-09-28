import Link from "next/link";
import Image from "next/image";
import { LinkedInIcon, GithubIcon } from "../components/(Utilities)/Icons";
import { EmailButton, TypingHeader, Elephant } from "../components/Home/";

import "./style.css";

export default function Home() {
  return (
    <>
      <main className="md:p10 flex min-h-screen flex-col items-center justify-center p-5 pt-24 dark:bg-black  md:flex-row">
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
            <div className="mt-8 flex flex-row flex-wrap items-center gap-8">
              <Link
                href={"https://www.linkedin.com/in/moshi-li/"}
                target="_blank"
              >
                <LinkedInIcon size="text-4xl" className="h-14 w-14" />
              </Link>
              <Link href={"https://github.com/Moshi-Li"} target="_blank">
                <GithubIcon size="text-4xl" className="h-14 w-14" />
              </Link>
              <EmailButton />
            </div>
            <div className="mt-5 flex flex-col justify-center gap-2 sm:mt-10">
              <Link href={"/resume"} className="mt-5 w-52 lg:mt-0">
                <button className="btn--primary  h-14 w-52">
                  See my resume
                </button>
              </Link>
              <Link
                href={"/about"}
                className="h-8 w-52  px-4 py-2 text-center text-base  underline-offset-4 transition hover:font-semibold hover:underline "
              >
                more about me
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 aspect-video w-full sm:mt-0 md:w-6/12">
          <Elephant />
        </div>
      </main>
    </>
  );
}
