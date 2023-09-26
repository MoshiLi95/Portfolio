import Image from "next/image";
import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { IconWrapper } from "../../(Utilities)/Icons";
import TypescriptOriginal from "react-devicons/typescript/original";
import ReactOriginal from "react-devicons/react/original";
import DockerOriginal from "react-devicons/docker/original";

export default function Spacestagram() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-blue-600 p-2 px-3 dark:border-green-400">
      <div className="carousel--image">
        <Image
          src="/asset/spacestagram.png"
          alt="spacestagram"
          objectFit="contain"
          fill
        ></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="text-2xl font-semibold text-blue-600 dark:text-green-400 md:text-3xl">
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
            <span className="animate-spin text-5xl font-semibold text-blue-600 dark:text-green-400">
              <LuCode2 />
            </span>
          </Link>
          <Link
            href={"https://moshi-li.github.io/spacestagram/"}
            className="ml-2"
            target="_blank"
          >
            <button className=" font-base bg-blue-600 px-4 py-2 text-xl text-white transition hover:bg-blue-500 focus:ring dark:bg-green-500 dark:hover:bg-green-400">
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
