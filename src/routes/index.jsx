import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login/login";
import HomeTwo from "../pages/HomeTwo/homeTwo.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeTwo />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
