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
      "Conducted research on WCAG accessibility guidelines and developed prototypes to analyze integration feasibility.",
      "Integrated accessibility features and corresponding test cases into company’s open-source reusable component library Coveo/ui-kit, using Web Components and Cypress.",
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
      "Built and maintained a micro front-end load testing tool that supported over 25 internal projects using React and AngularJS.",
      "Developed custom dashboards and implemented a comparison mode for the load testing tool's custom Grafana integration.",
      "Reduced testing hours for the game QA team by developing tools that facilitated their daily operations.",
      "Designed and built new API services using Node.js, Koa, and MongoDB to support the load testing tool.",
      "Led the design and implementation of new CI/CD practices, resulting in improved cross-team code deployment with an average deployment time of 30 minutes, resolving runner race conditions and inter-pipeline delays.",
      "Reduced website’s average loading time by 60%  and enhanced its maintainability, driving and participating in the migration of the load testing tool from AngularJS to React.",
      "Reduced monetary and management costs by participating in the integration of the load testing tool into the company's standard internal services.",
    ],
  },
];

const projectsList: ProjectDetailI[] = [
  {
    type: 1,
    iconPath: "",
    projectName: "Fair-Fairytale-UI",
    description: ["A web UI built to display analyzed data from NLP models."],
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
      "Image browsing web application utilizing NASA public image apis.",
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
