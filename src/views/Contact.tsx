import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/gmail.png";
import Github from "../assets/icons/Github.png";
import Navbar from "../components/NavBar/Navbar";
import Footer from "../components/Footer/Footer";
import Info from "../components/Contact/info/Info";
import { StarField } from "../components/StarryBackground/StarryBackground";
import ShootingStar from "../components/ShootingStar/ShootingStar";
import ThunderStorm from "../assets/sounds/thunderstorm.mp3";
import useSound from "use-sound";
import { motion } from "framer-motion";

const Contact = () => {
  const zoomInVariants = {
    initial: { scale: 0.5, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const [playSound, { stop }] = useSound(ThunderStorm);
  playSound();
  return (
    <motion.div
      key="zoom-in-transition"
      initial="initial"
      animate="animate"
      variants={zoomInVariants}
    >
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
        <Info />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Contact;
