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
      <div className="w-full max-w-6xl px-3">
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

            <span className="mt-5 pr-5 font-light uppercase">
              July 2022 - September 2022
            </span>
          </div>

          {/* Content */}
          <div className="mt-3 flex flex-row flex-wrap justify-between gap-2 leading-relaxed sm:gap-12 md:flex-nowrap">
            <div className="w-full ">
              <h3 className="mb-2 text-xl font-medium">Description:</h3>
              <p>
                {`In a collaborative team of developers, we delved into the WCAG accessibility guidelines. 
                After building prototypes to evaluate integration viability, we subsequently incorporated 
                accessibility features into Lightning Web Components, which are then made available to 
                customers via Salesforce. 
                `}
              </p>
            </div>

            <div className="w-full ">
              <h3 className="mb-2 text-xl font-medium">
                Achievement highlights:
              </h3>
              <ul className="list-inside list-disc">
                <li>
                  {`Conducted research on WCAG accessibility 
                  guidelines and developed prototypes to analyze integration feasibility.`}
                </li>
                <li>
                  {`Integrated accessibility features and corresponding test cases into company’s open-source 
                  reusable component library Coveo/ui-kit, using Web Components and Cypress.`}
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
            <span className="mt-2 pr-5 font-light uppercase">
              June 2019 - July 2021
            </span>
          </div>

          {/* Content */}
          <div className="mt-3 flex flex-row flex-wrap justify-between gap-2 leading-relaxed sm:gap-12 md:flex-nowrap">
            <div className="w-full">
              <h3 className="mb-2 text-xl font-medium">Description:</h3>
              <p>
                {`In a team of developers, I continually investigated, developed new features and maintained 
                a wide range of software projects that support both load testing and end-to-end testing needs of
                the internal teams. The projects I worked on include micro fronted web applications, 
                RESTful web APIs and various automation tools.`}
              </p>
            </div>

            <div className="w-full">
              <h3 className="mb-2 text-xl font-medium">
                Achievement highlights:
              </h3>
              <ul className="list-inside list-disc">
                <li>
                  {`Built and maintained a micro front-end load testing tool that supported 
                  over 25 internal projects using React and AngularJS. `}
                </li>
                <li>
                  {`Led the design and implementation of new CI/CD practices, resulting in improved 
                  cross-team code deployment with an average deployment time of 30 minutes, 
                  resolving runner race conditions and inter-pipeline delays.`}
                </li>
                <li>
                  {`Developed custom dashboards and implemented a comparison mode for the load 
                  testing tool's custom Grafana integration.`}
                </li>
                <li>
                  {`Designed and built API services using Node.js, Koa, and MongoDB to support the load testing tool.`}
                </li>
                <li>
                  {`Reduced website’s average loading time by 60% 
                  and enhanced its maintainability, driving and participating 
                  in the migration of the load testing tool from AngularJS to React.`}
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
                <ExpressOriginal
                  size={50}
                  className="skill--section--icon dark--mode"
                />
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
