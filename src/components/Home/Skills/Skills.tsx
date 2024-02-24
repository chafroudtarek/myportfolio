import React from "react";
import Points from "../../../assets/icons/rectangleOfPoints.png";
import Rectangle from "../../../assets/icons/rectangle.png";
import Shape from "../../../assets/icons/shape.png";
import ShootingStar from "../../ShootingStar/ShootingStar";
const Skills = () => {
  return (
    <div className="skills_container" data-aos="fade-up">
      <ShootingStar />

      <div className="skills-header">
        <div className="title">
          <span className="hashtag">#</span>
          skills
        </div>
        <div className="line"></div>
      </div>
      <div className="main_part">
        <div
          className="shapes"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div className="top_part">
            <img src={Points} alt="points" />
            <img src={Rectangle} alt="rectangle" className="rectangle" />
          </div>
          <div className="bottom_part">
            <img src={Shape} alt="shape" className="shape" />
            <img src={Points} alt="points" className="points" />
            <img src={Rectangle} alt="rectangle" height={"50px"} />
          </div>
        </div>
        <div
          className="skills_items"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div>
            <div className="item_container">
              <div className="col_title">
                <p>Languages</p>
              </div>
              <div className="col_content">
                <p>Javascript typescript</p>
              </div>
            </div>
          </div>

          <div className="skills_item">
            <div className="item_container first">
              <div className="col_title">
                <p>Databases</p>
              </div>
              <div className="col_content">
                <p>SQLite Postgres Mongodb SQl</p>
              </div>
            </div>
            <div className="item_container second">
              <div className="col_title">
                <p>Other</p>
              </div>
              <div className="col_content">
                <p>Html Css Nodejs Git Jira Clickup Problem-solving </p>
              </div>
            </div>
          </div>
          <div className="skills_item">
            <div className="item_container first">
              <div className="col_title">
                <p>Tools</p>
              </div>
              <div className="col_content">
                <p>Grafana Prometheus Docker Jenkins Vscode</p>
              </div>
            </div>
            <div className="item_container second">
              <div className="col_title">
                <p>Frameworks & library</p>
              </div>
              <div className="col_content">
                <p>Reactjs Nestjs Expressjs Angular Nextjs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
