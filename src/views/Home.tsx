import React, { useState } from "react";
import Logo from "../assets/icons/logo-white.png";
import { NavLink } from "react-router-dom";
import Linkedin from "../assets/icons/Linkedin.svg";
import Github from "../assets/icons/Github.png";
import Email from "../assets/icons/gmail.png";
const Home = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="app_container">
      <div className="navbar_container">
        <div className="logo_container">
          <img src={Logo} alt="logo" className="logo" />
          <span>hafroud</span>
        </div>
        <ul>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "activeLink" : "link")}
          >
            <span>#</span>home
          </NavLink>
          <NavLink to="/works" className="link">
            <span>#</span>works
          </NavLink>
          <NavLink to="/aboutme" className="link">
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink to="contacts" className="link">
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
      </div>
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
          <NavLink to="/works" className="link">
            <span>#</span>works
          </NavLink>
          <NavLink to="/aboutme" className="link">
            <span>#</span>about me{" "}
          </NavLink>
          <NavLink to="contacts" className="link">
            <span>#</span>contacts
          </NavLink>
        </ul>

        <div className="socialmedia">
          <img src={Linkedin} alt="linkedin" />
          <img src={Email} alt="email" />
          <img src={Github} alt="github" />
        </div>
      </div>
    </div>
  );
};

export default Home;
