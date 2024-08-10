import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"
import PesquisarGia from "../pages/PesquisarGia/index.jsx";
import PesquisarProficional from "../PesquisarProficional/index.jsx";

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
    path: "/pesquisarGia",
    element: <PesquisarGia/>
  },
  {
      path: "/pesquisarproficional",
      element: <PesquisarProficional/> 

  },
  
]);
