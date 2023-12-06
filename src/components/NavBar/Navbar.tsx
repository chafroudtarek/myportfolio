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
          <NavLink to="/projects" className="link" onClick={playEnter as any}>
            <span>#</span>works
          </NavLink>
          <NavLink to="/about" className="link" onClick={playEnter as any}>
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink to="/contact" className="link" onClick={playEnter as any}>
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
          <NavLink
            className={({ isActive }) => (isActive ? "link" : "activeLink")}
            to="/"
          >
            <span>#</span>home
          </NavLink>
          <NavLink
            to="/works"
            className={({ isActive }) => (isActive ? "link" : "activeLink")}
          >
            <span>#</span>works
          </NavLink>
          <NavLink
            to="/aboutme"
            className={({ isActive }) => (isActive ? "link" : "activeLink")}
          >
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink
            to="contacts"
            className={({ isActive }) => (isActive ? "link" : "activeLink")}
          >
            <span>#</span>contacts
          </NavLink>
        </ul>
        <div className="socialmedia">
          <img src={Linkedin} alt="linkedin" />
          <img src={Email} alt="email" />
          <img src={Github} alt="github" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
