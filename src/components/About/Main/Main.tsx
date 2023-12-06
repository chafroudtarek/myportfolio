import Avatar from "../../../assets/images/hero.png";

const Main = () => {
  return (
    <section className="main_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            About-me
          </div>
          <div className="line"></div>
        </div>
        <span className="subheader">Who am i?</span>
      </div>

      <div className="main_container_info">
        <div className="leftSide">
          <p>Hello, i’m Tarek!</p>
          <p>
            I am a proficient full-stack JavaScript developer based in Sousse,
            Tunisia. Crafting responsive web applications is my expertise, and I
            specialize in building seamless user experiences. Transforming
            creativity into functional websites has been my passion for the past
            year. I take pride in my ability to develop robust back-end
            functionalities and intuitive front-end designs. I am dedicated to
            staying updated with the latest technologies and frameworks,
            ensuring that I deliver cutting-edge solutions.
          </p>
          <p>
            My commitment to excellence extends to collaborating with clients
            and contributing to their online presence. Whether it's coding,
            problem-solving, or learning new technologies, I am always eager to
            tackle challenges and bring innovation to full-stack development.
          </p>
        </div>
        <div className="rightSide">
          <img src={Avatar} alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Main;
