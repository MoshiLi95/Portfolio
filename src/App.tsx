import { useLayoutEffect, useRef, useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Earth from "./earth";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Works from "./components/Works";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

import "./App.scss";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const canvasPointer = useRef<null | HTMLDivElement>(null);
  const introPointer = useRef<null | HTMLDivElement>(null);
  const [canvasControl, setCanvasControl] = useState<null | Earth>(null);
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  const component = useRef<HTMLDivElement | null>(null);
  const slider = useRef<HTMLDivElement | null>(null);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  useEffect(() => {
    if (
      !canvasPointer.current ||
      !introPointer.current ||
      canvasControl !== null
    )
      return;
    const earth = new Earth(canvasPointer.current);
    earth.on("loaded", () => {
      document.addEventListener("mousemove", (e: MouseEvent) => {
        if (e.clientX <= window.innerWidth * 0.1) {
          earth.setKeyMap("KeyA", true);
        } else if (e.clientX >= window.innerWidth * 0.9) {
          earth.setKeyMap("KeyD", true);
        } else {
          earth.setKeyMap("KeyA", false);
          earth.setKeyMap("KeyD", false);
        }
      });

      gsap
        .to(introPointer.current, {
          opacity: "0",
          duration: 2.5,
          ease: "expo.in",
        })
        .then(() => {
          if (introPointer.current) introPointer.current.style.display = "none";
        });
    });
    setCanvasControl(earth);
  }, [canvasControl]);

  useLayoutEffect(() => {
    if (windowWidth <= 600) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray("section");

      gsap.to(panels, {
        x: -(slider.current!.scrollWidth - 1 * window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,

          end: () => "+=3500",
        },
      });
    }, component);

    return () => ctx.revert();
  }, [windowWidth]);

  return (
    <>
      <div
        ref={canvasPointer}
        className="three--container"
        id="scene-container"
      ></div>
      <div className="portfolio" ref={component}>
        <Navigation
          open={menuOpen}
          closeFunction={() => {
            setMenuOpen(false);
          }}
        ></Navigation>
        <Header toggleMenu={() => setMenuOpen(!menuOpen)} />
        <div ref={slider} className="container">
          <Landing></Landing>
          <About></About>
          <Skill></Skill>
          <Works></Works>
          <Contact></Contact>
        </div>
      </div>
      <div ref={introPointer} className="intro"></div>
    </>
  );
}
