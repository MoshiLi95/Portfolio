import Image from "next/image";
import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { IconWrapper } from "../../(Utilities)/Icons";
import TypescriptOriginal from "react-devicons/typescript/original";
import ReactOriginal from "react-devicons/react/original";
import DockerOriginal from "react-devicons/docker/original";

export default function Spacestagram() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-black p-2 px-3 dark:border-white ">
      <div className="carousel--image">
        <Image
          className="transition duration-1000 hover:scale-110"
          src="/asset/spacestagram.png"
          alt="spacestagram"
          objectFit="contain"
          fill
        ></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="text-2xl font-semibold text-black dark:text-white md:text-3xl">
          Spacestagram
        </span>
        <span className="font-light uppercase">June 2023</span>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-4 text-xl ">
        <div className="flex flex-row flex-wrap gap-5 text-xl">
          <IconWrapper title="Typescript">
            <ReactOriginal
              size={50}
              className="skill--section--icon dark--mode"
            />
          </IconWrapper>

          <IconWrapper title="Typescript">
            <TypescriptOriginal size={50} />
          </IconWrapper>

          <IconWrapper title="GraphQL">
            <Image
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg"
              alt="graphQL"
              width={50}
              height={50}
            />
          </IconWrapper>

          <IconWrapper title="Docker">
            <DockerOriginal size={50} />
          </IconWrapper>
        </div>

        <div className="flex flex-row">
          <Link
            href={"https://github.com/Moshi-Li/spacestagram"}
            target="_blank"
          >
            <span className="animate-spin text-5xl font-semibold text-black dark:text-white">
              <LuCode2 />
            </span>
          </Link>
          <Link
            href={"https://moshi-li.github.io/spacestagram/"}
            className="ml-2"
            target="_blank"
          >
            <button className=" font-base  btn--secondary px-4 py-2  text-xl transition">
              View Demo
            </button>
          </Link>
        </div>
      </div>

      <div className="carousel--description mt-5">
        <p className="text-2xl">
          {`Spacestagram is a website dedicated to showcasing mesmerizing 
            images from outer space, utilizing `}
          <Link href={`https://api.nasa.gov/`} target={"_blank"}>
            <span className="text-blue-500">NASA API</span>
          </Link>
          {` featuring: Infinite Scroll, Anonymous comment thread,
          and sharing functionalities.`}
        </p>
      </div>
    </div>
  );
}
