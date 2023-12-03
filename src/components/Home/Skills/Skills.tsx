import React from "react";
import Points from "../../../assets/icons/rectangleOfPoints.png";
import Rectangle from "../../../assets/icons/rectangle.png";
import Shape from "../../../assets/icons/shape.png";
import ShootingStar from "../../ShootingStar/ShootingStar";
const Skills = () => {
  return (
    <div className="skills_container">
      <ShootingStar />

      <div className="skills-header">
        <div className="title">
          <span className="hashtag">#</span>
          skills
        </div>
        <div className="line"></div>
      </div>
      <div className="main_part">
        <div className="shapes">
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
        <div className="skills_items">
          <div>
            <div className="item_container">
              <div className="col_title">Languages</div>
              <div className="col_content">Javascript typescript</div>
            </div>
          </div>

          <div className="skills_item">
            <div className="item_container first">
              <div className="col_title">Databases</div>
              <div className="col_content">SQLite Postgres Mongodb SQl</div>
            </div>
            <div className="item_container second">
              <div className="col_title">Other</div>
              <div className="col_content">HTML CSS JAVA CONCEPTION</div>
            </div>
          </div>
          <div className="skills_item">
            <div className="item_container first">
              <div className="col_title">Tools</div>
              <div className="col_content">SQLite Postgres Mongodb SQl</div>
            </div>
            <div className="item_container second">
              <div className="col_title">Frameworks</div>
              <div className="col_content">HTML CSS JAVA CONCEPTION</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
