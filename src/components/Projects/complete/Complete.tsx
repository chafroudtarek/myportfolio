import React from "react";
import { ProjectItem } from "../../Home/Project/Project";
import Points from "../../../assets/icons/rectangleOfPoints.png";
import Square from "../../../assets/icons/rectangle.png";

const Complete = () => {
  return (
    <div className="complete_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">/</span>
            Projects
          </div>
          <div className="line"></div>
        </div>
        <span className="subheader">List of my projects.</span>
      </div>

      <div className="second-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Complete-apps
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="complete_projects_container">
        {/* <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem /> */}
      </div>
      <img src={Points} alt="points" className="points" />
      <img src={Square} alt="square" className="square" />
    </div>
  );
};

export default Complete;
