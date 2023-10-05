import { IconWrapper } from "../Utilities/Icons";
import TypescriptOriginal from "react-devicons/typescript/original";
import ReactOriginal from "react-devicons/react/original";
import Html5PlainWordmark from "react-devicons/html5/plain-wordmark";
import Css3PlainWordmark from "react-devicons/css3/plain-wordmark";
import GithubOriginal from "react-devicons/github/original";
import AngularjsOriginal from "react-devicons/angularjs/original";
import FlaskOriginal from "react-devicons/flask/original";
import ExpressOriginal from "react-devicons/express/original";
import GitlabOriginal from "react-devicons/gitlab/original";
import PythonOriginalWordmark from "react-devicons/python/original-wordmark";
import SassOriginal from "react-devicons/sass/original";
import ThreejsOriginal from "react-devicons/threejs/original";
import UbuntuPlain from "react-devicons/ubuntu/plain";
import TailwindcssPlain from "react-devicons/tailwindcss/plain";
import WebpackOriginal from "react-devicons/webpack/original";
import SocketioOriginal from "react-devicons/socketio/original";
import RedisOriginalWordmark from "react-devicons/redis/original-wordmark";
import GooglecloudOriginalWordmark from "react-devicons/googlecloud/original-wordmark";
import JiraOriginal from "react-devicons/jira/original";
import MaterialuiOriginal from "react-devicons/materialui/original";
import RaspberrypiOriginal from "react-devicons/raspberrypi/original";
import UwsgiOriginal from "react-devicons/uwsgi/original";
import VuejsOriginal from "react-devicons/vuejs/original";

export default function Skills() {
  return (
    <section className="flex min-h-screen flex-col" section-name="skills">
      <h2 className="mb-5 text-4xl font-semibold tracking-wider ">Skills</h2>

      <div className="flex flex-grow flex-col justify-center">
        <div>
          <h3 className="mb-3 text-xl">Tools I used on regular basis</h3>
          <div className="flex flex-row flex-wrap gap-5">
            <IconWrapper title="Typescript">
              <TypescriptOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="React">
              <ReactOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="HTML">
              <Html5PlainWordmark size={50} />
            </IconWrapper>
            <IconWrapper title="CSS">
              <Css3PlainWordmark size={50} />
            </IconWrapper>
            <IconWrapper title="Github">
              <GithubOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="mb-3 text-xl">
            Tools I had been working comfortably with...
          </h3>
          <div className="flex flex-row flex-wrap gap-5">
            <IconWrapper title="AngularJs">
              <AngularjsOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="SocketIo">
              <SocketioOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
            <IconWrapper title="Python">
              <PythonOriginalWordmark size={50} />
            </IconWrapper>
            <IconWrapper title="Flask">
              <FlaskOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
            <IconWrapper title="Threejs">
              <ThreejsOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
            <IconWrapper title="Express">
              <ExpressOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
            <IconWrapper title="Material UI">
              <MaterialuiOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="Tailwind">
              <TailwindcssPlain size={50} />
            </IconWrapper>
            <IconWrapper title="Webpack">
              <WebpackOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="GitLab">
              <GitlabOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="Ubuntu">
              <UbuntuPlain size={50} />
            </IconWrapper>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="mb-3 text-xl">
            Tools I would like to learn or get more into...
          </h3>
          <div className="flex flex-row flex-wrap gap-5 text-xl">
            <IconWrapper title="VueJs">
              <VuejsOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="Redis">
              <RedisOriginalWordmark size={50} />
            </IconWrapper>
            <IconWrapper title="Uwsgi">
              <UwsgiOriginal
                size={50}
                className="skill--section--icon dark--mode"
              />
            </IconWrapper>
            <IconWrapper title="GCP">
              <GooglecloudOriginalWordmark size={50} />
            </IconWrapper>
            <IconWrapper title="Jira">
              <JiraOriginal size={50} />
            </IconWrapper>
            <IconWrapper title="Raspberrypi">
              <RaspberrypiOriginal size={50} />
            </IconWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
