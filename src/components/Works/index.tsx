import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { Modal } from "../Utils";
import {
  experiencesList,
  ExperienceDetailI,
  ProjectDetailI,
  projectsList,
} from "./info";
import "./index.scss";

const dummyWorkDetail = {
  type: 0,
  iconPath: "",
  companyName: "",
  position: "",
  duration: "",
  location: "",
  bullets: [],
};

const Experience: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState<
    ExperienceDetailI | ProjectDetailI
  >(dummyWorkDetail);

  return (
    <>
      <section className="works--section" id="works">
        <div>
          <h1>Experiences</h1>
          <ul>
            {experiencesList.map((item) => {
              return (
                <li
                  className="works--experience--item"
                  key={item.companyName}
                  onClick={() => {
                    setSelectedWork(item);
                    setOpen(true);
                  }}
                >
                  <h4>{item.companyName}</h4>
                  <p>
                    {`${item.position}`}&nbsp;&nbsp;&nbsp;
                    <span>({item.duration})</span>
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <h1>Projects</h1>
          <ul>
            {projectsList.map((item) => {
              return (
                <li
                  className="works--project--item"
                  key={item.projectName}
                  onClick={() => {
                    setSelectedWork(item);
                    setOpen(true);
                  }}
                >
                  <h4>{item.projectName}</h4>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <Modal open={open} closeFunction={() => setOpen(false)}>
        {selectedWork.type === 0 && (
          <div className="experience--modal">
            <div className="experience--modal--header">
              <h3>{selectedWork.companyName}</h3>
              <span>{`${selectedWork.position} | ${selectedWork.duration} | ${selectedWork.location}`}</span>
            </div>

            <ul>
              {selectedWork.bullets.map((line, index) => {
                return (
                  <li key={index}>
                    <span>{line}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        {selectedWork.type === 1 && (
          <div className="project--modal">
            <div className="project--modal--header">
              <h3>{selectedWork.projectName}</h3>
            </div>

            <ul>
              {selectedWork.bullets.map((line, index) => {
                return (
                  <li key={index}>
                    <span>{line}</span>
                  </li>
                );
              })}
            </ul>
            <ul>
              {selectedWork.links.map((link, index) => {
                return (
                  <li key={index}>
                    <a href={link.url}>{link.name}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Experience;
