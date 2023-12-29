import { NavLink } from "react-router-dom";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Github from "../../assets/icons/Github.png";
import Email from "../../assets/icons/gmail.png";
import Logo from "../../assets/icons/logo-white.png";
import Enter from "../../assets/sounds/enter.mp3";

import { useState } from "react";
import useSound from "use-sound";

const Navbar = () => {
  const [playEnter] = useSound(Enter);

  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <>
      <section className="navbar_container">
        <div className="logo_container">
          <img src={Logo} alt="logo" className="logo" />
          <span>hafroud</span>
        </div>
        <ul>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
            onClick={playEnter as any}
          >
            <span>#</span>home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
            onClick={playEnter as any}
          >
            <span>#</span>works
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
            onClick={playEnter as any}
          >
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
            onClick={playEnter as any}
          >
            <span>#</span>contacts
          </NavLink>
        </ul>
        <div
          className={` menu ${isActiveMenu ? "active-menu" : ""}`}
          onClick={() => setIsActiveMenu(!isActiveMenu)}
        >
          <span className="firstline"></span>
          <span className="secondline"></span>
        </div>
      </section>
      <div className={` mobile_navs ${isActiveMenu ? "active-navs" : ""}`}>
        <div className="logo_container">
          <img src={Logo} alt="logo" className="logo" />
          <span>hafroud</span>
        </div>
        <ul>
          <NavLink className="link" to="/home">
            <span>#</span>home
          </NavLink>
          <NavLink to="/projects" className="link">
            <span>#</span>works
          </NavLink>
          <NavLink to="/about" className="link">
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink to="/contact" className="link">
            <span>#</span>contacts
          </NavLink>
        </ul>
        <div className="socialmedia">
          <a href="https://www.linkedin.com/in/tarek-chafroud-6725711bb/">
            <img src={Linkedin} alt="linkedin" />
          </a>
          <img src={Email} alt="email" />
          <a href="https://github.com/chafroudtarek">
            <img src={Github} alt="github" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
