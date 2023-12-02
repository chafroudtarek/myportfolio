import React from "react";
import Complete from "../components/Projects/complete/Complete";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/NavBar/Navbar";
import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/gmail.png";
import Github from "../assets/icons/Github.png";
import Small from "../components/Projects/small/Small";
const Projects = () => {
  return (
    <div className="body_container">
      <div className="side_items">
        <div className="side_line"></div>
        <img src={Linkedin} alt="linkedin" height={"23px"} />
        <img src={Email} alt="email" height={"20px"} />
        <img src={Github} alt="github" height={"25px"} />
      </div>

      <Navbar />
      <Complete />
      <Small />
      <Footer />
    </div>
  );
};

export default Projects;
