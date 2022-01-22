import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import "./Menu.scss";

const Menu = () => {
  const [open, setOpen] = useState<boolean | string>("");
  return (
    <React.Fragment>
      <AiOutlineMenu
        className={`menu__btn menu__btn--${
          open === "" ? "" : open ? "ccw" : "cw"
        }`}
        onClick={() => setOpen(!!!open)}
      ></AiOutlineMenu>
      <div
        className={`menu menu--${open === "" ? "" : open ? "open" : "close"}`}
      >
        <span className="menu__link" onClick={() => setOpen(!!!open)}>
          <a href="#about">
            <span>{"00. "}</span>About Me
          </a>
        </span>

        <span className="menu__link" onClick={() => setOpen(!!!open)}>
          <a href="#experience">
            <span>{"01. "}</span>Experience
          </a>
        </span>
        <span className="menu__link" onClick={() => setOpen(!!!open)}>
          <a href="#skill">
            <span>{"02. "}</span>Skills
          </a>
        </span>
        <span className="menu__link" onClick={() => setOpen(!!!open)}>
          <a href="#contact">
            <span>{"03. "}</span>Contact
          </a>
        </span>

        <a href="/resume.pdf" target="_blank">
          <button>Resume</button>
        </a>
      </div>
      {open && <div className="menu__overlay"></div>}
    </React.Fragment>
  );
};

export default Menu;
