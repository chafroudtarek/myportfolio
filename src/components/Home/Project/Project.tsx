import Points from "../../../assets/icons/points.png";
import Eunoia from "../../../assets/images/eunoia.jpg";
import Sea from "../../../assets/images/sea.png";
import Salone from "../../../assets/images/salone.png";
import { useNavigate } from "react-router-dom";

export interface projectProps {
  tech: string;
  desc: string;
  img: string;
  title: string;
  location: string;
}
const projects: projectProps[] = [
  {
    title: "eunoia academy",
    tech: "angular, nodejs, expressjs,mongodb, docker, kafka, azure",
    img: Eunoia,
    desc: "SaaS app for LMS, HR management, accounting management, and identity.",
    location: "Tunisia 🇹🇳 ",
  },
  {
    title: "Salone Carthage",
    tech: "astro ,shopify, sql ,scss, vercel, tailwind",
    img: Salone,
    desc: "Marketing app, adept at product administration, and proficient in leveraging Astro for an elevated user experience",
    location: "France 🇫🇷",
  },
  {
    title: "Sea energy",
    tech: "reactjs, .net, sql, docker",
    img: Sea,
    desc: "Advanced e-commerce app for clients and administrators, featuring invoice management,automatic discounts, holiday scheduling,  and more",
    location: "Italy 🇮🇹",
  },
];

const Project = () => {
  const navigate = useNavigate();
  return (
    <div className="projects_container" data-aos="fade-up">
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

        <div
          className="details"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/projects")}
        >
          {"View all ~~>"}{" "}
        </div>
      </div>
      <div className="project_items">
        {projects.map((project: projectProps, index: number) => (
          <ProjectItem
            title={project.title}
            desc={project.desc}
            img={project.img}
            tech={project.tech}
            location={project.location}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;

export const ProjectItem = ({
  tech,
  desc,
  img,
  title,
  location,
}: projectProps) => {
  return (
    <div
      className="project_container"
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
    >
      <div className="img_container">
        <img src={img} alt="image" />
      </div>
      <div className="technologies">
        <p>{tech}</p>
      </div>
      <div className="details">
        <span className="title">{title.toUpperCase()}</span>
        <span className="description">{desc}</span>
        <div className="status_container">
          <div className="status"> {"Private <~>"}</div>
          <div className="location">{location}</div>
        </div>
      </div>
    </div>
  );
};
