import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./router/router";
import routes from "./router/router";
import { ToastContainer,  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
 
  return <BrowserRouter>{renderRoutes(routes)}
   <ToastContainer />
  </BrowserRouter>;
}

export default App;
