import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import "./Footer.scss";

const links = {
  ml: "https://github.com/Moshi-Li/portfolio",
  bc: "https://github.com/bchiang7/v4",
};

const Footer = () => {
  const iconClick = (link: string) => window.open(link, "_blank");
  return (
    <div className="footer">
      <div className="footer__section" onClick={(e) => iconClick(links.bc)}>
        <p>Deigned by Brittany Chiang</p>{" "}
        <AiOutlineGithub className="footer__section__icon"></AiOutlineGithub>
      </div>
      <div className="footer__section" onClick={(e) => iconClick(links.ml)}>
        <p>Built by Moshi Li</p>{" "}
        <AiOutlineGithub className="footer__section__icon"></AiOutlineGithub>
      </div>
    </div>
  );
};

export default Footer;
