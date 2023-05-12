import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Modal } from "../Utils";
import "./index.scss";

const Experience: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <section className="experience">
        <button onClick={() => setOpen(true)}>Open</button>
      </section>
      <Modal open={open} closeFunction={() => setOpen(false)}>
        <p>Modal</p>
      </Modal>
    </>
  );
};

export default Experience;
