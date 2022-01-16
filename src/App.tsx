import React, { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import About from "./components/About";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

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
    <div className="app" onScroll={handleScroll}>
      <Header scrollDirection={scrollDirection}></Header>

      <div className="content">
        <Introduction></Introduction>
        <About></About>
        <Experience></Experience>
        <Skill></Skill>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default App;
