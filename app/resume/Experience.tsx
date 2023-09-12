import { IconWrapper, WebComponentIcon } from "../(Utilities)/Icons";
import Html5PlainWordmark from "react-devicons/html5/plain-wordmark";
import Css3PlainWordmark from "react-devicons/css3/plain-wordmark";
import ReactOriginal from "react-devicons/react/original";
import GitlabOriginal from "react-devicons/gitlab/original";
import DockerOriginal from "react-devicons/docker/original";
import SalesforceOriginal from "react-devicons/salesforce/original";
import ExpressOriginal from "react-devicons/express/original";
import MaterialuiOriginal from "react-devicons/materialui/original";
import NginxOriginal from "react-devicons/nginx/original";
import MongodbOriginal from "react-devicons/mongodb/original";
import TypescriptOriginal from "react-devicons/typescript/original";
import PythonOriginal from "react-devicons/python/original";

export default function Experience() {
  return (
    <section className="min-h-screen  sm:pt-12" section-name="experience">
      <div className="w-full max-w-6xl">
        <h2 className="mb-5 text-4xl font-semibold tracking-wider text-blue-600 dark:text-green-400">
          Experience
        </h2>
        {/* Coveo Solutions*/}
        <div className="text-base sm:text-lg">
          {/* Meta */}
          <div className="flex flex-row flex-wrap justify-between text-xl">
            <div>
              <h3 className="font-semibold">Software Developer Intern</h3>
              <span className="mt-2  italic">
                Coveo Solutions - Montreal, Quebec
              </span>
            </div>

            <span className="mt-2 font-light uppercase">
              July 2022 - September 2022
            </span>
          </div>

          {/* Content */}
          <div className="mt-3 flex flex-row flex-wrap justify-between gap-2 leading-relaxed sm:gap-12 md:flex-nowrap">
            <div className="w-full ">
              <h3 className="mb-2 text-xl font-medium">Description:</h3>
              <p>
                {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many`}
              </p>
            </div>

            <div className="w-full ">
              <h3 className="mb-2 text-xl font-medium">
                Achievement highlights:
              </h3>
              <ul className="list-inside list-disc">
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is `}
                </li>
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.`}
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack*/}
          <div className="mt-3">
            <h3 className="mb-2 text-xl font-medium">Relevant Technologies:</h3>
            <div className="flex flex-row flex-wrap gap-5">
              <IconWrapper title="Web Components">
                <WebComponentIcon />
              </IconWrapper>

              <IconWrapper title="HTML">
                <Html5PlainWordmark size={50} />
              </IconWrapper>

              <IconWrapper title="CSS">
                <Css3PlainWordmark size={50} />
              </IconWrapper>

              <IconWrapper title="Salesforce">
                <SalesforceOriginal size={50} />
              </IconWrapper>
            </div>
          </div>
        </div>

        {/* Ubisoft*/}
        <div className="mt-10 text-base sm:text-lg">
          {/* Meta */}
          <div className="flex flex-row flex-wrap justify-between text-xl">
            <div>
              <h3 className="font-bold">Online Operation Programmer</h3>
              <span className="mt-2  italic">
                Ubisoft - Chengdu, Sichuan, China
              </span>
            </div>
            <span className="mt-2 font-light uppercase">
              June 2019 - July 2021
            </span>
          </div>

          {/* Content */}
          <div className="mt-3 flex flex-row flex-wrap justify-between gap-2 leading-relaxed sm:gap-12 md:flex-nowrap">
            <div className="w-full">
              <h3 className="mb-2 text-xl font-medium">Description:</h3>
              <p>
                {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many`}
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-2 text-xl font-medium">
                Achievement highlights:
              </h3>
              <ul className="list-inside list-disc">
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is `}
                </li>
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.`}
                </li>
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.`}
                </li>
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.`}
                </li>
                <li>
                  {`It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.`}
                </li>
              </ul>
            </div>
          </div>

          {/* Tech Stack*/}
          <div className="mt-3">
            <h3 className="mb-2 text-xl font-medium">Relevant Technologies:</h3>
            <div className="flex flex-row flex-wrap gap-5">
              <IconWrapper title="React">
                <ReactOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Typescript">
                <TypescriptOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Material UI">
                <MaterialuiOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Python">
                <PythonOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Express">
                <ExpressOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="MongoDB">
                <MongodbOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Docker">
                <DockerOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Nginx">
                <NginxOriginal size={50} />
              </IconWrapper>
              <IconWrapper title="Gitlab">
                <GitlabOriginal size={50} />
              </IconWrapper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
