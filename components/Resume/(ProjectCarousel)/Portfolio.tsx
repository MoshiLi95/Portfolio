import Image from "next/image";
import { IconWrapper } from "../../../components/(Utilities)/Icons";
import NextjsOriginal from "react-devicons/nextjs/original";
import TailwindcssPlain from "react-devicons/tailwindcss/plain";
import DockerOriginal from "react-devicons/docker/original";

import TypescriptOriginal from "react-devicons/typescript/original";

export default function Portfolio() {
  return (
    <div className="flex h-full w-full flex-col border-2  border-black p-2 px-3 dark:border-white ">
      <div className="carousel--image ">
        <Image
          className="transition duration-1000 hover:scale-110"
          src="/asset/portfolio.png"
          alt="portfolio"
          style={{ objectFit: "contain" }}
          sizes="50vw"
          fill
        ></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="text-2xl font-semibold text-black dark:text-white md:text-3xl">
          li-moshi.com
        </span>
        <span className="font-light uppercase">Sep 2023</span>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-4 text-xl">
        <div className="flex flex-row flex-wrap gap-5 text-xl">
          <IconWrapper title="NextJs">
            <NextjsOriginal
              size={50}
              className="skill--section--icon dark--mode"
            />
          </IconWrapper>
          <IconWrapper title="Typescript">
            <TypescriptOriginal size={50} />
          </IconWrapper>
          <IconWrapper title="Tailwind">
            <TailwindcssPlain size={50} />
          </IconWrapper>
          <IconWrapper title="Docker">
            <DockerOriginal size={50} />
          </IconWrapper>
        </div>

        <div className="flex flex-row">
          <span className="font-bold text-black dark:text-white">
            You are here!
          </span>
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
