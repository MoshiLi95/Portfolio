import Image from "next/image";
import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { IconWrapper } from "../../(Utilities)/Icons";
import NextjsOriginal from "react-devicons/nextjs/original";
import TailwindcssPlain from "react-devicons/tailwindcss/plain";

import TypescriptOriginal from "react-devicons/typescript/original";

export default function Portfolio() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-blue-600 p-2 px-3 dark:border-green-400">
      <div className="carousel--image ">
        <Image src="/asset/portfolio.png" alt="portfolio" fill></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="text-2xl font-semibold text-blue-600 dark:text-green-400 md:text-3xl">
          li-moshi.com
        </span>
        <span className="font-light uppercase">Sep 2023</span>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-4 text-xl">
        <div className="flex flex-row flex-wrap gap-5 text-xl">
          <IconWrapper title="Typescript">
            <NextjsOriginal
              size={50}
              className="skill--section--icon dark--mode"
            />
          </IconWrapper>
          <IconWrapper title="Typescript">
            <TypescriptOriginal size={50} />
          </IconWrapper>
          <IconWrapper title="Typescript">
            <TailwindcssPlain size={50} />
          </IconWrapper>
        </div>

        <div className="flex flex-row">
          <Link href={"/"}>
            <span className="animate-spin text-5xl font-semibold text-blue-600 dark:text-green-400">
              <LuCode2 />
            </span>
          </Link>
          <Link href={"/resume"} className="ml-2">
            <button className=" font-base bg-blue-600 px-4 py-2 text-xl text-white transition hover:bg-blue-500 focus:ring dark:bg-green-500 dark:hover:bg-green-400">
              View Demo
            </button>
          </Link>
        </div>
      </div>

      <div className="carousel--description mt-5">
        <p className="text-2xl">
          {`
          li-moshi.com is my portfolio website aimed to demonstrate my capability 
          as a web developer and to showcase some of my notable works in the past.
          Embracing the expansive world of web development, I embarked on a journey 
          with Next.js and Tailwind CSS while rekindling my relationship with the novel 
          features of React. The resulting website is not just a testament to the technologies 
          I engaged with but also mirrors my user-centric focus.
          `}
        </p>
      </div>
    </div>
  );
}
