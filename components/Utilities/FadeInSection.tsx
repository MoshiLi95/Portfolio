"use client";
import React, { useState, useRef, useEffect } from "react";
import "./FadeInSection.css";

export default function FadeInSection({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setVisible] = useState(true);

  const domRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });

    observer.observe(domRef.current);

    return () => {
      if (domRef.current !== null) observer.unobserve(domRef.current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`fade-in-section ${isVisible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
}
