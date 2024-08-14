import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"
import Pagamento from "../pages/Pagamento/index.jsx"

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
    path: "/pagamento",
    element: <Pagamento/>,
  },

]);
