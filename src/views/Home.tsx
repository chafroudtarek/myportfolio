import { useState } from "react";

import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Quote from "../components/Home/quote/Quote";
import Project from "../components/Home/Project/Project";
import Skills from "../components/Home/Skills/Skills";
import Aboutme from "../components/Home/AboutMe/Aboutme";
import Contacts from "../components/Home/Contacts/Contacts";
import Footer from "../components/Footer/Footer";
const Home = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="app_container">
      <Navbar />
      <Hero />
      <Quote />
      <Project />
      <Skills />
      <Aboutme />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
