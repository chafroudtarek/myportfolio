import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/gmail.png";
import Github from "../assets/icons/Github.png";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Main from "../components/About/Main/Main";
import Skills from "../components/About/skills/Skills";
import FunFacts from "../components/About/facts/FunFacts";
import { StarField } from "../components/StarryBackground/StarryBackground";
import ShootingStar from "../components/ShootingStar/ShootingStar";
import ThunderStorm from "../assets/sounds/thunderstorm.mp3";
import useSound from "use-sound";

const Aboutme = () => {
  const [playSound, { stop }] = useSound(ThunderStorm);
  playSound();
  return (
    <div className="body_container">
      <StarField numStars={200} />
      <ShootingStar />

      <div className="side_items">
        <div className="side_line"></div>
        <img src={Linkedin} alt="linkedin" height={"23px"} />
        <img src={Email} alt="email" height={"20px"} />
        <img src={Github} alt="github" height={"25px"} />
      </div>

      <Navbar />
      <Main />
      <Skills />
      <FunFacts />
      <Footer />
    </div>
  );
};

export default Aboutme;
