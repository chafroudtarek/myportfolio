import React from "react";
import Logo from "../../assets/icons/logo-white.png";
import Linkedin from "../../assets/icons/Linkedin.svg";
import Email from "../../assets/icons/gmail.png";
import Github from "../../assets/icons/Github.png";

const Footer = () => {
  return (
    <section className="footer_container">
      <div className="main_part">
        <div className="main_part_content">
          <div className="right_part">
            <div className="top_part">
              <div className="logo_container">
                <img src={Logo} alt="logo" height={50} />
                <span>hafroud</span>
              </div>
              <span className="email">chafroudtarek3@gmail.com</span>
            </div>
            <div className="bottom_part">
              <span>full stack developer and freelancer</span>
            </div>
          </div>
          <div className="left_part">
            <span>Media</span>
            <div className="media_items">
              <a href="https://www.linkedin.com/in/tarek-chafroud-6725711bb/">
                <img src={Linkedin} alt="linkedin" />
              </a>
              <img src={Email} height={30} alt="linkedin" />
              <a href="https://github.com/chafroudtarek">
                <img src={Github} height={35} alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <span>© Copyright 2022. Made by Tarek</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
