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
        <span>{"00. "}</span>About Me
      </span>
      <span className="header__nav__link">
        <span>{"01. "}</span>Experience
      </span>
      <span className="header__nav__link">
        <span>{"02. "}</span>Skills
      </span>
      <span className="header__nav__link">
        <span>{"03. "}</span>Contact
      </span>

      <a href="/resume.pdf" target="_blank">
        <button className="header_nav_btn">Resume</button>
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
