import React from "react";
import Anonym from "../../../assets/images/anonym.png";
const Aboutme = () => {
  return (
    <div className="aboutme_container">
      <div className="aboutme-header">
        <div className="title">
          <span className="hashtag">#</span>
          About-me
        </div>
        <div className="line"></div>
      </div>

      <div className="main_part">
        <div className="description">
          <p>Hello, i’m Tarek!</p>
          <p>
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.{" "}
          </p>
          <p>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div>{"Read more ->"}</div>
        </div>
        <img src={Anonym} alt="anonym" />
      </div>
    </div>
  );
};

export default Aboutme;
