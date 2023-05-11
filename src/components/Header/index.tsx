import React, { useRef, useCallback, useEffect } from "react";
import gsap from "gsap";
import "./index.scss";

interface HeaderPropsI {
  toggleMenu: () => void;
}

const Header: React.FC<HeaderPropsI> = ({ toggleMenu }) => {
  const btnUpper = useRef<HTMLDivElement | null>(null);
  const btnLower = useRef<HTMLDivElement | null>(null);
  const gsapRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (btnUpper.current && btnLower.current) {
      gsapRef.current = gsap.timeline({ paused: true });
      gsapRef.current
        .add("kick")
        .to(
          btnUpper.current,
          {
            translateY: "-75%",
            backgroundColor: "#FFFF66",
            duration: 0.1,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "kick"
        )
        .to(
          btnLower.current,
          {
            backgroundColor: "#FFFF66",
            translateY: "75%",
            duration: 0.1,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "kick"
        );
    }
  }, []);

  return (
    <header className="header">
      <button
        onMouseEnter={() => {
          if (gsapRef.current) gsapRef.current.play();
        }}
        onMouseLeave={() => {
          if (gsapRef.current) gsapRef.current.reverse();
        }}
        className="header--button"
        onClick={() => {
          toggleMenu();
        }}
      >
        <div ref={btnUpper} className="header--dot "></div>
        <div className="header--dot header--dot--mid"></div>
        <div ref={btnLower} className="header--dot "></div>
      </button>
      <h1>Moshi Li</h1>
    </header>
  );
};

export default Header;
