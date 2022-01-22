import React from "react";

import "./Header.scss";
import Logo from "../Icon.png";

interface HeaderProps {
  scrollDirection: string;
}

const HeaderNavigation = () => {
  return (
    <div className="header__nav">
      <span className="header__nav__link">
        <a href="#about">
          <span>{"00. "}</span>About Me
        </a>
      </span>

      <span className="header__nav__link">
        <a href="#experience">
          <span>{"01. "}</span>Experience
        </a>
      </span>
      <span className="header__nav__link">
        <a href="#skill">
          <span>{"02. "}</span>Skills
        </a>
      </span>
      <span className="header__nav__link">
        <a href="#contact">
          <span>{"03. "}</span>Contact
        </a>
      </span>

      <a href="/resume.pdf" target="_blank">
        <button>Resume</button>
      </a>
    </div>
  );
};

const Header = ({ scrollDirection }: HeaderProps) => {
  return (
    <div
      className={`header header--${
        scrollDirection === "UP" ? "fade-in" : "fade-out"
      }`}
    >
      <img
        className="header__logo"
        src={Logo}
        alt="Moshi Li"
        onClick={() => window.open(window.location.origin, "_self")}
      ></img>
      <HeaderNavigation></HeaderNavigation>
    </div>
  );
};

export default Header;
