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
          <a href="https://www.linkedin.com/in/tarek-chafroud-6725711bb/">
            <div className="item" style={{ cursor: "pointer" }}>
              <img src={Linkedin} alt="linkedin" /> <span>tarek chafroud</span>
            </div>
          </a>
          <a href="https://www.facebook.com/tarek.chaf/">
            <div className="item" style={{ cursor: "pointer" }}>
              <img src={Facebook} alt="facebook" height={25} />{" "}
              <span>chafourd tarek</span>
            </div>
          </a>
          <a href="https://www.instagram.com/chafroudtarek/">
            <div className="item" style={{ cursor: "pointer" }}>
              <img src={Instgram} alt="instgram" height={25} />{" "}
              <span>tarek chafourd</span>
            </div>
          </a>
          <a
            href="https://twitter.com/tarekchafroud1"
            style={{ cursor: "pointer" }}
          >
            <div className="item">
              <img src={Twitter} alt="twitter" /> <span>chafourd tarek </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
