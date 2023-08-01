import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillHeart,
} from "react-icons/ai";
import "./index.scss";

const Contact: React.FC = () => {
  return (
    <section className="contact--section" id="contact">
      <h1>Contact</h1>
      <div className="contact--content">
        <a href={"https://www.linkedin.com/in/moshi-li/"} target="_blank">
          <AiFillLinkedin></AiFillLinkedin>
        </a>
        <a href={"https://github.com/Moshi-Li"} target="_blank">
          <AiFillGithub></AiFillGithub>
        </a>
        <a href={"mailto:li.moshi@outlook.com"} target="_blank">
          <AiFillMail></AiFillMail>
        </a>
      </div>
      <p>
        made with <AiFillHeart></AiFillHeart> by Moshi{" "}
      </p>
    </section>
  );
};

export default Contact;
