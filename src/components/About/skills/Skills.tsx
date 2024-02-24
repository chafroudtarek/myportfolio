import React from "react";

const Skills = () => {
  return (
    <section className="skills_container" data-aos="fade-up">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Skills{" "}
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div
        className="skills_container_info"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="table_container">
          <div className="title_part">
            <p>Languages</p>
          </div>
          <div className="body_part">
            <p>TypeScript JavaScript</p>
          </div>
        </div>
        <div className="table_container">
          <div className="title_part">
            <p>Databases</p>
          </div>
          <div className="body_part">
            <p>SQLITE PostgreSQL Mongo</p>
          </div>
        </div>
        <div className="table_container">
          <div className="title_part">
            <p>Other</p>
          </div>
          <div className="body_part">
            <p>HTML CSS EJS</p>
          </div>
        </div>
        <div className="table_container">
          <div className="title_part">
            <p>Tools</p>
          </div>
          <div className="body_part">
            <p>Vscode Figma Linux Git Azure</p>{" "}
          </div>
        </div>
        <div className="table_container">
          <div className="title_part">
            <p>Frameworks</p>
          </div>
          <div className="body_part">
            <p>React Nestjs ExpressJs Angular</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
