import Image from "next/image";
import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { IconWrapper } from "../../Utilities/Icons";
import ReactOriginal from "react-devicons/react/original";
import TypescriptOriginal from "react-devicons/typescript/original";

export default function FairFairy() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-black p-2 px-3  dark:border-white">
      <div className="carousel--image">
        <Image
          className="transition duration-1000 hover:scale-110"
          src="/asset/NECE.png"
          alt="portfolio"
          style={{ objectFit: "contain" }}
          fill
        ></Image>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="hidden text-2xl font-semibold text-black dark:text-white sm:block  md:text-3xl">
          Narrative Event Chain Extraction Toolkit
        </span>
        <span className="text-2xl font-semibold text-black dark:text-white  sm:hidden md:text-3xl">
          NECE
        </span>
        <span className="font-light uppercase">Sep 2022</span>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-4 text-xl">
        <div className="flex flex-row flex-wrap gap-5 text-xl">
          <IconWrapper title="React">
            <ReactOriginal
              size={50}
              className="skill--section--icon dark--mode"
            />
          </IconWrapper>

          <IconWrapper title="Typescript">
            <TypescriptOriginal size={50} />
          </IconWrapper>
        </div>

        <div className="flex flex-row">
          <Link
            href={"https://github.com/Moshi-Li/fair-fairytale-ui"}
            target="_blank"
          >
            <span className="animate-spin text-5xl font-semibold text-black dark:text-white">
              <LuCode2 />
            </span>
          </Link>
          <Link
            href={"https://moshi-li.github.io/fair-fairytale-ui"}
            target="_blank"
            className="ml-2"
          >
            <button className="font-base btn--secondary px-4 py-2 text-xl transition">
              View Demo
            </button>
          </Link>
        </div>
      </div>

      <div className="carousel--description mt-5">
        <p className="text-2xl">
          {`Dive into the world of narrative analysis with the 
          NECE - the Narrative Event Chain Extraction Tool. NECE 
          meticulously pinpoints both subjects and direct objects 
          within a given text. By presenting its findings in a clear, 
          user-friendly interface, the website transforms complex narrative 
          structures into comprehensible insights.`}
        </p>
      </div>
    </div>
  );
}
