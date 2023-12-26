import React from "react";
import { ProjectItem, projectProps } from "../../Home/Project/Project";
import Points from "../../../assets/icons/rectangleOfPoints.png";
import Square from "../../../assets/icons/rectangle.png";
import Eunoia from "../../../assets/images/eunoia.jpg";
import Sea from "../../../assets/images/sea.png";
import Salone from "../../../assets/images/salone.png";
import Migrate from "../../../assets/images/migrate.png";
import Jci from "../../../assets/images/jci.png";
import Video from "../../../assets/images/video.png";
import Education from "../../../assets/images/education.png";
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
  {
    title: "Migradata",
    tech: "reactjs, nestjs, expressjs,postgres, docker, stapi",
    img: Migrate,
    desc: "Created a MED-HIMS-aligned app for Tunisia's migration data, enhancing governance decisions.",
    location: "Tunisia 🇹🇳 ",
  },
  {
    title: "JCI OLM",
    tech: "reactjs, nodejs, expressjs, mongodb",
    img: Jci,
    desc: "This website is designed to showcase the organization's objectives, events, location, and team...",
    location: "Tunisia 🇹🇳 ",
  },
  {
    title: "Video chat",
    tech: "reactjs, nodejs, expressjs, mongodb",
    img: Video,
    desc: "Developed an app enabling smooth video and text communication implementing  WEB RTC.",
    location: "Tunisia 🇹🇳 ",
  },
  {
    title: "Ostedhy",
    tech: "reactjs, nodejs, expressjs, mongodb",
    img: Education,
    desc: "An educational app tailored for both teachers and students, featuring a seamless design and an intuitive user experience",
    location: "Tunisia 🇹🇳 ",
  },
];

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
      <img src={Points} alt="points" className="points" />
      <img src={Square} alt="square" className="square" />
    </div>
  );
};

export default Complete;
