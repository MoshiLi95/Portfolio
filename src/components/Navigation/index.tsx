import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./index.scss";

const MenuItem = ["#", "About", "Skill", "Works", "Contact"];

interface NavigationPropsI {
  open: boolean;
  closeFunction: () => void;
}

const Navigation: React.FC<NavigationPropsI> = ({ open, closeFunction }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const backdropRef = useRef<HTMLDivElement | null>(null);
  const gsapRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (containerRef.current && menuRef.current && backdropRef.current) {
      gsapRef.current = gsap.timeline({
        paused: true,
        onStart: () => {
          containerRef.current!.style.display = "block";
        },
        onReverseComplete: () => {
          containerRef.current!.style.display = "none";
        },
      });
      gsapRef.current
        .add("fade in")
        .from(
          menuRef.current,
          {
            translateX: "-75%",
            opacity: 0,
            duration: 0.5,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "fade in"
        )
        .to(
          menuRef.current,
          {
            translateX: "0%",
            opacity: 1,
          },
          "fade in"
        )
        .from(
          backdropRef.current,
          {
            translateX: "-75%",
            opacity: 0,
            duration: 0.5,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "fade in"
        )
        .to(
          backdropRef.current,
          {
            translateX: "0",
            opacity: 1,
            duration: 0.5,
            ease: "0.3, 0.1, 0.1, 1",
          },
          "fade in"
        );

      gsapRef.current.play();
    }
  }, [menuRef]);

  useEffect(() => {
    if (
      menuRef.current &&
      containerRef.current &&
      backdropRef.current &&
      gsapRef.current
    ) {
      if (open) {
        gsapRef.current.play();
      } else {
        gsapRef.current.reverse();
      }
    }
  }, [open]);

  return (
    <nav
      className="navigation"
      ref={containerRef}
      onWheel={(e) => e.stopPropagation()}
    >
      <div
        ref={backdropRef}
        className="backdrop"
        onClick={() => closeFunction()}
      ></div>
      <div ref={menuRef} className="menu">
        <ul className="menu--list">
          {MenuItem.map((item: string, index: number) => {
            return (
              <li
                className="menu--list--item"
                key={index}
                onClick={() => {
                  document.getElementById(item.toLowerCase())?.scrollIntoView({
                    behavior: "auto",
                    block: "center",
                    inline: "center",
                  });

                  closeFunction();
                }}
              >
                <span>{item}</span>

                <p>{index}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
