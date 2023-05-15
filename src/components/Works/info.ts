import fairFairytaleLanding from "../../assets/fairfairytale-landing.png";
import fairFairytaleContent from "../../assets/fairfairytale-content.png";
import spacestagramLanding from "../../assets/spacestagram-landing.png";
enum WorksType {
  Job,
  Project,
}

export interface ExperienceDetailI {
  type: WorksType.Job;
  iconPath: string;
  companyName: string;
  position: string;
  location: string;
  duration: string;
  bullets: string[];
}

export interface ProjectDetailI {
  type: WorksType.Project;
  iconPath: string;
  projectName: string;
  description: string[];
  links: LinkDetailI[];
  images: string[];
}

interface LinkDetailI {
  url: string;
  name: string;
}

const experiencesList: ExperienceDetailI[] = [
  {
    type: WorksType.Job,
    iconPath: "/public/coveo_logo.svg",
    companyName: "Coveo Solutions Inc.",
    position: "Software Developer Intern",
    location: "Montreal, QC, Canada",
    duration: "2022.07 - 2022.09",
    bullets: [
      "Contributed to open source project Coveo ui-kit with front end technology Web Components during 3months internship.",
      "Researched requirements for accessibility features and built prototypes using JavaScript and WebComponents to analyze feasibility.",
      "Added accessibility features to over 10 reusable components ranging from filters, inputs, to drop-down menus and modals.",
      "Designed and developed integration tests for reusable components using Cypress testing framework.",
    ],
  },
  {
    type: WorksType.Job,
    iconPath: "/public/ubisoft_logo.svg",
    companyName: "Ubisoft",
    position: "Software Developer",
    location: "Chengdu, China",
    duration: "2019.06 - 2021.07",
    bullets: [
      "Built and maintained micro front-end, web-based load testing tool using both React and AngularJS.",
      "Reduced website’s loading speed by 60% by migrating the website from AngularJS to React.",
      "Drove and implemented websites’ new CICD pipelines, reducing the time needed for CICD process by 80%.",
      "Built and maintained reusable components for the existing components library using React.",
      "Designed and built new API servers for existing solutions using Node.js, Webpack and ECMAScript 6.",
    ],
  },
];

const projectsList: ProjectDetailI[] = [
  {
    type: 1,
    iconPath: "",
    projectName: "Fair-Fairytale-UI",
    description: ["A web UI built to display contents"],
    links: [
      {
        url: "https://moshi-li.github.io/fair-fairytale-ui/",
        name: "Live Demo",
      },
      {
        url: "https://github.com/Moshi-Li/fair-fairytale-ui",
        name: "Git Repository",
      },
    ],
    images: [fairFairytaleLanding, fairFairytaleContent],
  },
  {
    type: 1,
    iconPath: "",
    projectName: "Coveo/ui-kit",
    description: [
      "Coveo Solution's open source reusable component library. Home of @coveo/headless, @coveo/atomic.",
    ],
    links: [
      {
        url: "https://github.com/coveo/ui-kit",
        name: "Git Repository",
      },
    ],
    images: [],
  },
  {
    type: 1,
    iconPath: "",
    projectName: "Spacestagram",
    description: [
      "Image browsing web application utilizing NASA public image apis",
    ],
    links: [
      {
        url: "https://moshi-li.github.io/spacestagram/",
        name: "Demo",
      },
    ],
    images: [spacestagramLanding],
  },
];

export { experiencesList, projectsList };
