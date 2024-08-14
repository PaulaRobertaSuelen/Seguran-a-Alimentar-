import { createBrowserRouter } from "react-router-dom";

// import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"
import Cadastro from "../pages/Cadastro/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
]);
