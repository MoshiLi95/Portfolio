import React, { useState, useRef, useEffect } from "react";
import "./index.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <button
        className="header--button"
        onClick={() => {
          console.log("Navigation BTN Click");
        }}
      >
        <div className="header--dot header--dot01"></div>
        <div className="header--dot header--dot02"></div>
        <div className="header--dot header--dot03"></div>
      </button>
      <h1>Moshi Li</h1>
    </header>
  );
};

export default Header;
