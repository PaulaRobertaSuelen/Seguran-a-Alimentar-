import Login from "../pages/Login/login";
import Home from "../pages/Home/home.jsx"
import Pagamento from "../pages/Pagamento/index.jsx"
import PerfilProfissional from '../pages/Perfil-profissional/perfil-profissional.jsx'

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
  {
    path: '/perfil-profissional',
    element: <PerfilProfissional/>
  }

]);
