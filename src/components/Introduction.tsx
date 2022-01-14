import React from "react";
import "./introduction.scss";

const Introduction = () => {
  return (
    <section className="intro">
      <p className="intro__first-line">Hi, my name is</p>
      <h2>Moshi Li</h2>
      <h2>I like building things, especially websites.</h2>
      <p className="intro__content">
        I am a Software Programmer with 2 years of professional experience.
        Currently I am pursuing master of Informatics at Northeastern
        University.
      </p>
    </section>
  );
};

export default Introduction;
