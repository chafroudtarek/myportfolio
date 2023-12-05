import Points from "../../../assets/icons/rectangleOfPoints.png";
import Squares from "../../../assets/icons/bluesquares.png";
const FunFacts = () => {
  return (
    <div className="funfacts_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            My-fun-facts
          </div>
          <div className="line"></div>
        </div>
      </div>
      <div className="funfacts_container_info">
        <div className="leftPart">
          <div className="quote">
            I like <span>winter</span> more than summer
          </div>
          <div className="quote">I enjoy coding in the late hours </div>
          <div className="quote">
            Teaches people on <span>weekends.</span>
          </div>
          <div className="quote">
            <span>Volunteering </span>and community <span>impact</span>{" "}
          </div>
          <div className="quote">
            Balancing work and personal projects keeps my schedule dynamic{" "}
          </div>
          <div className="quote">
            Achieving my master's degree this <span>year.</span>
          </div>
        </div>

        <div className="rightPart">
          <img src={Points} alt="points" style={{ marginLeft: "-12rem" }} />
          <img src={Squares} alt="squares" />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
