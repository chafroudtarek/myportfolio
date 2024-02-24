import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Aboutme from "./views/AboutMe";
import Projects from "./views/Projects";
import NotFound from "./components/notFound/NotFound";
import { UnsplashScreen } from "./components/unsplash/UnsplashScreen";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <Router>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<UnsplashScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about" element={<Aboutme />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
