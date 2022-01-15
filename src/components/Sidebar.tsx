import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

import "./Sidebar.scss";

const links = {
  github: "https://github.com/MoshiLi95",
  linkedin: "https://www.linkedin.com/in/li-moshi/",
};

const Sidebar = () => {
  const iconClick = (link: string) => window.open(link, "_blank");
  return (
    <div className="sidebar">
      <AiOutlineGithub
        className="sidebar__icon"
        onClick={(e) => iconClick(links.github)}
      ></AiOutlineGithub>
      <AiOutlineLinkedin
        className="sidebar__icon"
        onClick={(e) => iconClick(links.linkedin)}
      ></AiOutlineLinkedin>
      <div className="sidebar__line"></div>
    </div>
  );
};

export default Sidebar;
