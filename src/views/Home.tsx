import { useState } from "react";

import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Quote from "../components/Home/quote/Quote";
import Project from "../components/Home/Project/Project";
import Skills from "../components/Home/Skills/Skills";
import Aboutme from "../components/Home/AboutMe/Aboutme";
import Contacts from "../components/Home/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/gmail.png";
import Github from "../assets/icons/Github.png";
import { StarField } from "../components/StarryBackground/StarryBackground";
import ShootingStarField from "../components/ShootingStar/ShootingStar";
import ShootingStar from "../components/ShootingStar/ShootingStar";
import ThunderStorm from "../assets/sounds/thunderstorm.mp3";
import useSound from "use-sound";
import { motion } from "framer-motion";

const Home = () => {
  const [playSound, { stop }] = useSound(ThunderStorm);
  playSound();
  const slideInFromRight = {
    hidden: { x: "100%" },
    visible: { x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromRight}
      transition={{ duration: 0.5 }}
    >
      <section className="body_container">
        <div className="side_items">
          <div className="side_line"></div>
          <a href="https://www.linkedin.com/in/tarek-chafroud-6725711bb/">
            <img src={Linkedin} alt="linkedin" height={"23px"} />
          </a>
          <img src={Email} alt="email" height={"20px"} />
          <a href="https://github.com/chafroudtarek">
            <img src={Github} alt="github" height={"25px"} />
          </a>
        </div>

        <Navbar />
        <StarField numStars={300} />

        <ShootingStar />
        <Hero />
        <Quote />
        <Project />

        <Skills />
        <Aboutme />
        <Contacts />

        <Footer />
      </section>
    </motion.div>
  );
};

export default Home;
