import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"
import PesquisarPerfil from"../pages/PesquisarPerfil/index.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/pesquisarperfil",
    element: <PesquisarPerfil/>
  }
]);
