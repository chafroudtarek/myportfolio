import Points from "../../../assets/icons/rectangleOfPoints.png";
import Squares from "../../../assets/icons/bluesquares.png";
const FunFacts = () => {
  return (
    <section className="funfacts_container" data-aos="fade-up">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            My-fun-facts
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div
        className="funfacts_container_info"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div className="leftPart">
          <div className="quote">
            <p>
              {" "}
              like <span>winter</span> more than summer
            </p>
          </div>
          <div className="quote">
            <p> I enjoy coding in the late hours</p>
          </div>
          <div className="quote">
            <p>
              {" "}
              Teaches people on <span>weekends.</span>
            </p>
          </div>
          <div className="quote">
            <p>
              {" "}
              <span>Volunteering </span>and community <span>impact</span>{" "}
            </p>
          </div>
          <div className="quote">
            <p>
              {" "}
              Balancing work and personal projects keeps my schedule dynamic{" "}
            </p>
          </div>
          <div className="quote">
            <p>
              {" "}
              Achieving my master's degree this <span>year.</span>
            </p>
          </div>
        </div>

        <div className="rightPart">
          <img src={Points} alt="points" style={{ marginLeft: "-12rem" }} />
          <img src={Squares} alt="squares" />
        </div>
      </div>
    </section>
  );
};

export default FunFacts;
