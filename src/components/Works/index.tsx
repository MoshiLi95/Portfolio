import React, { useState } from "react";
import Slider from "react-slick";
import { Modal } from "../Utils";
import {
  experiencesList,
  ExperienceDetailI,
  ProjectDetailI,
  projectsList,
} from "./info";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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

const Works: React.FC = () => {
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
          <ul className="works--project--table">
            {projectsList.map((item) => {
              return (
                <li
                  key={`project-${item.projectName}`}
                  className="works--project--item"
                >
                  <div>
                    <h4>{item.projectName}</h4>
                    {item.description.map((description, index) => {
                      return (
                        <p key={`project-description-${index}`}>
                          {description}
                        </p>
                      );
                    })}
                    {item.images.length > 0 && (
                      <div className="works--project--carousel">
                        <Slider dots={true}>
                          {item.images.map((imagePath, index) => {
                            return (
                              <div
                                className="carousel--item"
                                key={`project-carousel-${index}`}
                              >
                                <img src={imagePath}></img>
                              </div>
                            );
                          })}
                        </Slider>
                      </div>
                    )}
                    {item.links.length > 0 && (
                      <div className="works--project--links">
                        {item.links.map((item, index) => {
                          return (
                            <span key={`project-link-${index}`}>
                              <a href={item.url} target="blank">
                                {item.name}
                              </a>
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>
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
                  <li key={`${selectedWork.companyName}-${index}`}>
                    <span>{line}</span>
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

export default Works;
