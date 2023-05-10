import { useState, useRef, useEffect } from "react";
import Earth from "./earth";
import Header from "./components/Header";

import "./App.css";

function App() {
  const canvasPointer = useRef<null | HTMLDivElement>(null);
  const [canvasControl, setCanvasControl] = useState<null | Earth>(null);

  useEffect(() => {
    if (!canvasPointer.current || canvasControl !== null) return;
    const earth = new Earth(canvasPointer.current);

    setCanvasControl(earth);
  }, [canvasControl]);

  return (
    <>
      <div
        ref={canvasPointer}
        className="three--container"
        id="scene-container"
      ></div>

      <div className="portfolio">
        <Header />
      </div>
    </>
  );
}

export default App;
