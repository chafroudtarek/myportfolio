import Email from "../../../assets/icons/gmail.png";
import Linkedin from "../../../assets/icons/Linkedin.svg";
const Contacts = () => {
  return (
    <div className="contact_container">
      <div className="contact_body">
        <div className="contact-header">
          <div className="title">
            <span className="hashtag">#</span>
            Contacts
          </div>
          <div className="line"></div>
        </div>
        <div className="main_part">
          <p>
            If you have any inquiries or if there's something specific on your
            mind, I'd love to hear from you. Feel free to reach out.
          </p>
          <div className="details_container">
            <span>Message me here</span>
            <div className="media_container">
              <img src={Email} alt="email" height={20} />
              <span>chafroudtarek3@</span>
            </div>
            <div className="media_container">
              <img src={Linkedin} alt="email" height={24} />
              <span>chafroudtarek</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
