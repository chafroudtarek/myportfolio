import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./views/Home";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Home />
    </BrowserRouter>
  );
}

export default App;
