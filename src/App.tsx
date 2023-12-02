import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import Contact from "./views/Contact";
import Aboutme from "./views/AboutMe";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Aboutme />
      {/* <Home />  */}
      {/* <Contact/> */}
    </BrowserRouter>
  );
}

export default App;
