import React, { useRef, useEffect } from "react";
//@ts-expect-error accept
import Typed from "typed.js";
import "./index.scss";

const Landing = () => {
  const textContainer = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let typed: any;
    if (textContainer.current) {
      typed = new Typed(textContainer.current, {
        strings: ["Front-End Developer", "Software Engin", "Programmer"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      });
    }

    return () => {
      if (typed) typed.destroy();
    };
  }, [textContainer]);

  return (
    <section className="main--section">
      <div>
        <span>
          Hello, this is Moshi<br></br>
        </span>
        <span>{`I am a `}</span>
        <span ref={textContainer} />
      </div>
    </section>
  );
};

export default Landing;
