import Points from "../../../assets/icons/points.png";
import PorjectImg from "../../../assets/images/project.jpg";

const Project = () => {
  return (
    <div className="projects_container">
      <img className="points" src={Points} alt="points" />
      <div className="square"></div>
      <div className="header_part">
        <div className="right_part">
          <div className="title">
            <span className="hashtag">#</span>
            projects
          </div>
          <div className="line"></div>
        </div>

        <div className="details">{"View all ~~>"} </div>
      </div>
      <div className="project_items">
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </div>
    </div>
  );
};

export default Project;

export const ProjectItem = () => {
  return (
    <div className="project_container">
      <div className="img_container">
        <img src={PorjectImg} alt="image" />
      </div>
      <div className="technologies">
        html css react ,javascript html css react ,javascript
      </div>
      <div className="details">
        <div className="title">SCHOOL MANAGEMENT</div>
        <div className="description">
          app for school manegement,app for school manegement
        </div>
        <div className="status_container">
          <div className="status"> {"Private <~>"}</div>
          <div className="location"> {"Softylines 📍"}</div>
        </div>
      </div>
    </div>
  );
};
