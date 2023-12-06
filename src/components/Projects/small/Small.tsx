import Shape from "../../../assets/icons/shape.png";
const Small = () => {
  return (
    <div className="small_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Small Projects
          </div>
          <div className="line"></div>
        </div>
      </div>

      <div className="small_container_items">
        <SmallProjectItem />
        <SmallProjectItem />
        <SmallProjectItem />
        <SmallProjectItem />
        <SmallProjectItem />
        <SmallProjectItem />
      </div>
      <img src={Shape} alt="shape" className="shape" />
    </div>
  );
};

export default Small;

export const SmallProjectItem = () => {
  return (
    <div className="smallProjectItem">
      <div className="title"> <p>Discord , ts, js</p></div>
      <div className="body">
        <h3>Bot Boilerplate</h3>
        <p>Start creating scalable discord.js bot with typescript in seconds</p>
        <div className="button">{"Github <~>"}</div>
      </div>
    </div>
  );
};
