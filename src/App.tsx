import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Experience from "./components/Experience";

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState("UP");
  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollDirection(
      scrollPosition > e.currentTarget.scrollTop ? "UP" : "DOWN"
    );
    setScrollPosition(e.currentTarget.scrollTop);
  };

  return (
    <div className="app">
      <Header scrollDirection={scrollDirection}></Header>

      <div className="content">
        <Introduction></Introduction>
        <Experience></Experience>
      </div>
    </div>
  );
};

export default App;
