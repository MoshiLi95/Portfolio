import React from "react";
import "./index.scss";

const About: React.FC = () => {
  return (
    <section className="about--section" id="about">
      <div className="about--content">
        <span>About</span>
        <p>
          Hi there, my name is Moshi and I like to build all kinds of things. I
          specialize in front end development and have completed many back end
          tasks as well when needed. My passion as a front end developer is to
          bring ideas to reality with excellent usability, creative aesthetics
          and a lot of polish – all in the name of offering fluid and pleasing
          experiences for users.
          <br />
          <br /> But most importantly, I have been a soccer fan for decades and
          I never take myself too seriously.
          <br />
        </p>
      </div>
      <div className="about--img">
        <div className="selfie">
          <img src={"selfie.jpeg"} alt="blank"></img>
        </div>
      </div>
    </section>
  );
};

export default About;
