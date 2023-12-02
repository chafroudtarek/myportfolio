import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Aboutme from "./views/AboutMe";
import Projects from "./views/Projects";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Projects />
      {/* <Aboutme /> */}
      {/* <Home />  */}
      {/* <Contact/> */}
    </BrowserRouter>
  );
}

export default App;
