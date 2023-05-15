import ImageReact from "../../assets/react.svg";
import ImageNode from "../../assets/nodejs.svg";
import ImageWebpack from "../../assets/webpack.svg";
import ImageES6 from "../../assets/es6.svg";
import ImageRedux from "../../assets/redux.svg";
import ImageWebComponent from "../../assets/webcomponents.svg";
import ImageCypress from "../../assets/cypress.svg";
import ImageThreejs from "../../assets/threejs.svg";
import ImageNextjs from "../../assets/nextjs.svg";

import ImagePython from "../../assets/python.svg";
import ImageDocker from "../../assets/docker.svg";
import ImageMongo from "../../assets/mongodb.svg";
import ImageAWS from "../../assets/aws.svg";
import ImageGithub from "../../assets/github.svg";
import ImageGCP from "../../assets/gcp.svg";

export interface ImageInfoI {
  image: string;
  scale: number;
}

const itemList: ImageInfoI[] = [
  {
    image: ImageReact,
    scale: 1.1,
  },
  {
    image: ImageNode,
    scale: 0.06,
  },
  {
    image: ImageWebpack,
    scale: 0.4,
  },
  {
    image: ImageES6,
    scale: 0.1,
  },
  {
    image: ImageRedux,
    scale: 0.02,
  },
  {
    image: ImageWebComponent,
    scale: 1,
  },
  {
    image: ImageCypress,
    scale: 1,
  },
  {
    image: ImageThreejs,
    scale: 0.4,
  },
  {
    image: ImageNextjs,
    scale: 0.4,
  },
  {
    image: ImagePython,
    scale: 0.5,
  },
  {
    image: ImageDocker,
    scale: 0.4,
  },
  {
    image: ImageMongo,
    scale: 0.12,
  },
  {
    image: ImageAWS,
    scale: 0.1,
  },
  {
    image: ImageGCP,
    scale: 0.11,
  },
  {
    image: ImageGithub,
    scale: 0.05,
  },
];

export function* imageIterator() {
  let i = 0;
  while (i < itemList.length) {
    yield itemList[i];
    i = i + 1;
    if (i === itemList.length) i = 0;
  }
}
