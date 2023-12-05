import Avatar from "../../../assets/images/hero.png";

const Main = () => {
  return (
    <div className="main_container">
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
        </div>
        <div className="rightSide">
          <img src={Avatar} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Main;
