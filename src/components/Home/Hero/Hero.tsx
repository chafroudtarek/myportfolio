import HeroImg from "../../../assets/images/hero.png";

const Hero = () => {
  return (
    <section className="hero_container">
      <div className="left_part">
        <h3>
          Tarek is a <span>web developer</span> and an{" "}
          <span>AWS Certified professional</span>
        </h3>
        <p>He crafts responsive websites where technologies meet creativity</p>
        <button>Download my cv</button>
      </div>
      <div className="hero_img_container">
        <img src={HeroImg} alt="heroimg" />
        <span className="currentwork">
          <div></div>
          currently working on softylines
        </span>
      </div>
    </section>
  );
};

export default Hero;
