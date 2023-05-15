import React, { useRef, useEffect } from "react";
import SkillPlayground from "../../matter";

import "./index.scss";

const Skill: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      const playground = new SkillPlayground(containerRef.current);
      playground.resize();
    }
  }, []);

  return (
    <section className="skill--section" id="skill">
      <div ref={containerRef} className="skill--container"></div>
    </section>
  );
};

export default Skill;
