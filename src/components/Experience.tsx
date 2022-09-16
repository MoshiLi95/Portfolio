import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import "./Experience.scss";

const experienceData = [
  {
    role: `Student`,
    organization: `Northeastern University`,
    link: `https://toronto.northeastern.edu`,
    subtitle: `MPS in Informatics | September 2021 - Present | Toronto, Canada`,
    contents: [],
  },
  {
    role: `Software Developer Intern`,
    organization: `Coveo Solutions Inc.`,
    link: `https://www.coveo.com/`,
    subtitle: "July 2022 - Sep 2022| Remote | Montreal, QC, Canada",
    contents: [
      `Completed over 20 Jira stories during 3 months internship contributing to company’s open-source project.`,
      `Added accessibility features and integration tests to reusable components like filters, inputs, and modals.`,
      `Investigated web accessibility requirements and built prototypes to analyze feasibility.`,
    ],
  },
  {
    role: "Online Operation Programmer",
    organization: "Ubisoft",
    link: "https://www.ubisoft.com/en-us/company/careers/locations/chengdu",
    subtitle: "June 2019 - July 2021 | Chengdu, China",
    contents: [
      `Built and maintained micro frontend, web-based load testing tool using both ReactJS and AngularJS.`,
      `Reduced website’s loading speed by 60%, participating in website’s migration from AngularJS to ReactJS.`,
      `Drove and implemented websites’ new CICD pipelines, reducing the time needed for CICD process by 80%.`,
      `Built and maintained reusable components for the existing components library using ReactJS.`,
      `Designed and built new API servers for existing solutions using NodeJS, Webpack and ECMAScript 6.`,
      `Collaborated with UI designer and project manager, accessing designs for technical feasibility.`,
    ],
  },
  {
    role: "Software Engineer",
    organization: "SogoTrade",
    link: "https://www.sogotrade.com/",
    subtitle: "October 2018 - March 2019 | Chesterfield, USA",
    contents: [
      `Built and maintained company’s we stock trading tool with JavaScript, CSS, HTML.`,
      `Built new features for company’s existing crypto web trading tool using WebSocket, Protocol Buffer and FIX 4.2.`,
    ],
  },
  {
    role: "Student",
    organization: "Purdue University",
    link: "https://www.cs.purdue.edu/",
    subtitle:
      "BS in Computer Science | August 2014 - May 2018 | West Lafayette, USA",
    contents: [],
  },
];

interface ContentItemProps {
  role: string;
  organization: string;
  link: string;
  subtitle: string;
  contents: Array<string>;
}

const ContentItem = ({
  role,
  organization,
  link,
  subtitle,
  contents,
}: ContentItemProps) => {
  const iconClick = (link: string) => window.open(link, "_blank");

  return (
    <div className="item">
      <div className="item__title">
        <h3>
          {role}
          <span> @</span>{" "}
          <span
            className="item__title__organization"
            onClick={(e) => iconClick(link)}
          >
            {organization}
          </span>
        </h3>
        <p>{subtitle}</p>
      </div>
      {contents.map((item, index) => (
        <div className="item__content" key={index}>
          <div className="item__content__icon-container">
            <AiOutlineRight className="item__content__icon-container"></AiOutlineRight>
          </div>

          <p>{item}</p>
        </div>
      ))}
    </div>
  );
};

const Experience = () => {
  return (
    <div className="experience" id="experience">
      <div className="experience__content">
        <h2 className="experience__header">
          <span>01. </span>Experience
        </h2>
        {experienceData.map((item, index) => (
          <ContentItem key={index} {...item}></ContentItem>
        ))}
      </div>
    </div>
  );
};

export default Experience;
