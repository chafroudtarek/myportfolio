import React from "react";

const Skills = () => {
  return (
    <div className="skills_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Skills{" "}
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="skills_container_info">
        <div className="table_container">
          <div className="title_part">Languages</div>
          <div className="body_part">TypeScript JavaScript</div>
        </div>
        <div className="table_container">
          <div className="title_part">Databases</div>
          <div className="body_part">SQLITE PostgreSQL Mongo</div>
        </div>
        <div className="table_container">
          <div className="title_part">Other</div>
          <div className="body_part">HTML CSS EJS</div>
        </div>
        <div className="table_container">
          <div className="title_part">Tools</div>
          <div className="body_part">Vscode Figma Linux Git Azure </div>
        </div>
        <div className="table_container">
          <div className="title_part">Frameworks</div>
          <div className="body_part">React Nestjs ExpressJs Angular</div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
