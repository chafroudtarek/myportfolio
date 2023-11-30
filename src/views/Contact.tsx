import React from "react";
import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/gmail.png";
import Github from "../assets/icons/Github.png";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Info from "../components/Contact/info/Info";
const Contact = () => {
  return (
    <div className="body_container">
      <div className="side_items">
        <div className="side_line"></div>
        <img src={Linkedin} alt="linkedin" height={"23px"} />
        <img src={Email} alt="email" height={"20px"} />
        <img src={Github} alt="github" height={"25px"} />
      </div>

      <Navbar />
      <Info />
      <Footer />
    </div>
  );
};

export default Contact;
