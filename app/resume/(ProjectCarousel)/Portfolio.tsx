import Image from "next/image";
import { IconWrapper } from "../../(Utilities)/Icons";
import NextjsOriginal from "react-devicons/nextjs/original";

import TypescriptOriginal from "react-devicons/typescript/original";

export default function Portfolio() {
  return (
    <div className="flex h-full w-full flex-col border-2 border-blue-600 p-2 px-3 dark:border-green-400">
      <div className="carousel--image ">
        <Image
          src="https://web-components-resources.appspot.com/static/logo.svg"
          alt="web component"
          fill
        ></Image>
      </div>
      <div className="mt-5 flex flex-row flex-wrap items-center justify-between text-xl">
        <span className="mt-2">Name</span>
        <span className="font-light uppercase">Sep 2023</span>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-between text-xl">
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
        </div>

        <div>View</div>
      </div>
      <div className="carousel--description mt-5">
        <p>
          {`It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many
            It is a long established fact that a reader will be distracted
            by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content
            here, content here', making it look like readable English. Many`}
        </p>
      </div>
    </div>
  );
}
