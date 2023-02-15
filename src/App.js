import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { renderRoutes } from "./router/router";
import routes from "./router/router";

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
      {/* {renderRoutes(routes)} */}
    </BrowserRouter>
  );
}

export default App;
