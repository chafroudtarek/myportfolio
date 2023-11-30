import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";
import Contact from "./views/Contact";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      {/* <Home />  */}
      <Contact/>
    </BrowserRouter>
  );
}

export default App;
