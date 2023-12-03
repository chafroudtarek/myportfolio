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
          <div className="quote">I like winter more than summer</div>
          <div className="quote">I often bike with my friends </div>
          <div className="quote">
            I like <span>pizza</span> and <span>pasta</span>
          </div>
          <div className="quote">I was in Egypt, Poland and Turkey </div>
          <div className="quote">My favorite movie is The Green Mile </div>
          <div className="quote">I am still in school</div>
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
