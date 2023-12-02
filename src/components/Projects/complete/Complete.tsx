import React from "react";
import { ProjectItem } from "../../Home/Project/Project";

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
        <span className="subheader">List of my projects</span>
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
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Complete;
