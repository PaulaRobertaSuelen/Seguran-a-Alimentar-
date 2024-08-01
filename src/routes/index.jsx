
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home/home";
import PerfilProfissional from "../pages/Perfil-profissional/perfil-profissional";

export const routes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/perfilprofissional" element={<PerfilProfissional />} />
        </Routes> 
      </BrowserRouter>
    );
  };




// FORMULA DE ROTAS ANTIGAS

// import { createBrowserRouter } from "react-router-dom";


// import Login from "../pages/Login/login.jsx";
// import Home from "../pages/Home/home.jsx";


// export const router = createBrowserRouter([
//     {
//         path: "/",
//         exact,
//         element: <Home />,
//     },
//     {
//         path: "/login",
//         element: <Login />,
//     },
// ]);
