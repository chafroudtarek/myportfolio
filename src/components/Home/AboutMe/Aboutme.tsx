import React from "react";
import Anonym from "../../../assets/images/anonym.png";
const Aboutme = () => {
  return (
    <div className="aboutme_container">
      <div className="aboutme-header">
        <div className="title">
          <span className="hashtag">#</span>
          about-me
        </div>
        <div className="line"></div>
      </div>

      <div className="main_part">
        <div className="description">
          <p>Hello, i’m Tarek!</p>
          <p>
            I am a proficient full-stack JavaScript developer based in Sousse,
            Tunisia. Crafting responsive web applications is my expertise, and I
            specialize in building seamless user experiences. Transforming
            creativity into functional websites has been my passion for the past
            year.
          </p>
          <p>
            I take pride in my ability to develop robust back-end
            functionalities and intuitive front-end designs. I am dedicated to
            staying updated with the latest technologies and frameworks,
            ensuring that I deliver cutting-edge solutions.
          </p>
          <div>{"Read more ->"}</div>
        </div>
        <img src={Anonym} alt="anonym" />
      </div>
    </div>
  );
};

export default Aboutme;
