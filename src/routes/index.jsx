import { createBrowserRouter } from "react-router-dom";

import Guia from "../pages/Guia/index.jsx"
import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"

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
    path: "/Guia",
    element: <Guia />
  }
]);
