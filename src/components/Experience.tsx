import React from "react";
import { AiOutlineRight } from "react-icons/ai";

import "./Experience.scss";

const experienceData = [
  {
    role: "Student",
    organization: "Northeastern University",
    link: "https://toronto.northeastern.edu",
    subtitle: "MPS in Informatics | September 2021 - Present | Toronto, Canada",
    contents: [],
  },
  {
    role: "Online Operation Programmer",
    organization: "Ubisoft",
    link: "https://www.ubisoft.com/en-us/company/careers/locations/chengdu",
    subtitle: "June 2019 - July 2021 | Chengdu, China",
    contents: [
      "Collaborated with UX&UI designer and product manager within the team on over 20 new features, assessing designs for technical feasibility",
      "Built new features and maintained the websites using both ReactJS and Angular utilizing REST APIs provided",
      "Proposed, drove and implemented migration plan of existing website’s deployment from local servers to Cloud. Upon completion, the new deployment of the website not only fitted the existing feature delivery process smoothly but also reduced the time of the CI/CD process by 80%",
      "Impacted website performance by migrating the existing website from Angular to ReactJS, aiming to reduce website’s load time. Upon completion, the usability of the website is increased and the load time of the website is reduced by 60%",
      "Identified innovative ideas; researched potential solutions and built proofs of concepts",
    ],
  },
  {
    role: "Software Engineer",
    organization: "SogoTrade",
    link: "https://www.sogotrade.com/",
    subtitle: "October 2018 - March 2019 | Chesterfield, USA",
    contents: [
      "Maintained company’s existing stock and options web trading tool",
      "Drove designed and developed company’s new cryptocurrency web trading tool with WebSocket and FIX 4.2 protocol",
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
    <div className="experience">
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
