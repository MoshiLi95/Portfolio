import Image from "next/image";
import Link from "next/link";
import { LuCode2 } from "react-icons/lu";
import { IconWrapper } from "../../(Utilities)/Icons";
import TypescriptOriginal from "react-devicons/typescript/original";

export default function MatterJs() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-black p-2 px-3 dark:border-white ">
      <div className="carousel--image ">
        <Image
          className="transition duration-1000 hover:scale-110"
          src="/asset/matterjs.png"
          alt="matterJS"
          objectFit="contain"
          fill
        ></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="text-2xl font-semibold text-black dark:text-white md:text-3xl">
          MatterJs Gadget
        </span>
        <span className="font-light uppercase">May 2023</span>
      </div>

      <div className="mt-5 flex flex-row flex-wrap items-center justify-between gap-4 text-xl">
        <div className="flex flex-row flex-wrap gap-5 text-xl">
          <IconWrapper title="Typescript">
            <TypescriptOriginal size={50} />
          </IconWrapper>
          <div
            title="MatterJS"
            className="flex items-center justify-center hover:scale-110"
          >
            <Image
              src="/asset/matterjs.svg"
              alt="MatterJs"
              width={100}
              height={50}
            />
          </div>
        </div>

        <div className="flex flex-row">
          <Link
            href={"https://codesandbox.io/p/sandbox/matter-js-gadget-g26f57"}
            target="_blank"
            className="ml-2"
          >
            <button className="font-base btn--secondary px-4 py-2 text-xl">
              View Demo
            </button>
          </Link>
        </div>
      </div>

      <div className="carousel--description mt-5">
        <p className="text-2xl">
          {`
            Venture into the dynamic realm of 2D gaming with a mini-game prototype, 
            masterfully constructed using the web's celebrated physics engine - MatterJs. 
            More than just a fleeting dalliance, this creation stands as a testament 
            to the library's prowess, challenging the boundaries of usability and performance.
            `}
        </p>
      </div>
    </div>
  );
}
