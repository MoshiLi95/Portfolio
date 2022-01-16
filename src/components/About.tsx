import React from "react";
import Selfie from "../selfie.jpeg";
import "./About.scss";

const links = {
  neu: "https://toronto.northeastern.edu",
  purdue: "https://www.cs.purdue.edu/",
  ubisoft: "https://www.ubisoft.com/en-us/company/careers/locations/chengdu",
  sogotrade: "https://www.sogotrade.com/",
  soccer: "https://space.bilibili.com/4116",
};

const About = () => {
  const iconClick = (link: string) => window.open(link, "_blank");
  return (
    <div className="about">
      <div className="about__header">
        <div className="about__header__divider"></div>
        <h2>
          <span>00. </span>About
        </h2>
        <div className="about__header__divider"></div>
      </div>
      <div className="about__content">
        <div className="about__content__text">
          <p>
            Hello, I am Moshi Li, and I like creating things. I found my
            interest in putting things together at an early age when I was
            introduced to Mini 4WD and Lego. During my undergraduate computer
            science program at{" "}
            <span onClick={(e) => iconClick(links.purdue)}>
              Purdue University
            </span>
            , I grew a passion for web development through courses and group
            projects.
          </p>
          <p>
            Fast forward to today, I appreciate the fact that I had the
            opportunity to work as a programmer in both{" "}
            <span onClick={(e) => iconClick(links.sogotrade)}>
              finance industry
            </span>{" "}
            and{" "}
            <span onClick={(e) => iconClick(links.ubisoft)}>game industry</span>
            . Currently I am pursuing master of professional studies in
            informatics at{" "}
            <span onClick={(e) => iconClick(links.neu)}>NEU</span>.
          </p>
          <p>
            I started to ride snowboard a few years ago and I have been playing
            soccer on weekly basis since high school. You are welcome to check
            out our team’s match highlights{" "}
            <span onClick={(e) => iconClick(links.soccer)}>here</span>
          </p>
        </div>
        <div className="about__content__img">
          <div className="selfie">
            <img src={Selfie}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
