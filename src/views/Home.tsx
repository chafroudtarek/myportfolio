import { useState } from "react";

import Navbar from "../components/NavBar/Navbar";
import Hero from "../components/Home/Hero/Hero";
import Quote from "../components/Home/quote/Quote";
import Project from "../components/Home/Project/Project";
const Home = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <div className="app_container">
      <Navbar />
      <Hero />
      <Quote />
      <Project />
    </div>
  );
};

export default Home;
