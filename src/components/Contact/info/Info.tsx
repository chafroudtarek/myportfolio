import Email from "../../../assets/icons/gmail.png";
import Linkedin from "../../../assets/icons/Linkedin.svg";
import Twitter from "../../../assets/icons/Twitter.svg";
import Instgram from "../../../assets/icons/instgram.png";
import Facebook from "../../../assets/icons/facebook.png";

const Info = () => {
  return (
    <div className="info_container">
      <div className="extra-header">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            Contacts
          </div>
          <div className="line"></div>
        </div>
        <span className="subheader">Who am i?</span>
      </div>

      <div className="main_part">
        <p>
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </p>
        <div className="contact_tables">
          <div className="support">
            <h5>Support me here</h5>
            <p>536346353774674</p>
          </div>
          <div className="message">
            <h5>Message me here</h5>
            <div className="message_item">
              <img src={Linkedin} alt="linkedin" />
              <span>tarek chafroud</span>
            </div>
            <div className="message_item">
              <img src={Email} alt="email" height={25} />
              <span> chafroudtarek3@gmail.com</span>
            </div>
          </div>
        </div>
      </div>

      <div className="media_part">
        <div className="info-header">
          <div className="title">
            <span className="hashtag">#</span>
            all-media
          </div>
          <div className="line"></div>
        </div>
        <div className="media_item_container">
          <div className="item">
            <img src={Linkedin} alt="linkedin" /> <span>tarek chafourd</span>
          </div>
          <div className="item">
            <img src={Facebook} alt="linkedin" height={25} />{" "}
            <span>tarek chafourd</span>
          </div>
          <div className="item">
            <img src={Instgram} alt="linkedin" height={25} />{" "}
            <span>tarek chafourd</span>
          </div>
          <div className="item">
            <img src={Twitter} alt="linkedin" /> <span>tarek chafourd</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
