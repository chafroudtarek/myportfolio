import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "./router/router";
import routes from "./router/router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        {renderRoutes(routes)}
        <ToastContainer />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
