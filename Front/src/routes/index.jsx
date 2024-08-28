import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home/index';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProfissional from '../pages/PesquisarProfissional';
import Cadastro from '../pages/Cadastro';
import CadastroProfissional from '../pages/Cadastroprofissional/index';
import PerfilPrivado from '../pages/PerfilPrivado/index';
import PerfilProfissional from '../pages/Perfilprofissional/index';
import Guia from '../pages/Guia/index';
import PaginaPerfil from '../pages/Paginaperfil/index';
import SobreNos from '../pages/SobreNos/index';
import Pagamento from '../pages/Pagamento/index';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/redefinirsenha/:id',
        element: <Redefinirsenha />,
    },
    {
        path: '/pesquisarguia',
        element: <PesquisarGuia />,
    },
    {
        path: '/pesquisarprofissional',
        element: <PesquisarProfissional />,
    },
    {
        path: '/perfilprofissional',
        element: <PerfilProfissional />,
    },
    {
        path: '/cadastro',
        element: <Cadastro />,
    },
    {
        path: '/cadastroprofissional',
        element: <CadastroProfissional />,
    },
    {
        path: '/perfilprivado',
        element: <PerfilPrivado />,
    },
    {
        path: '/guia',
        element: <Guia />,
    },
    {
        path: '/paginaperfil',
        element: <PaginaPerfil />,
    },
    {
        path: '/sobrenos',
        element: <SobreNos/>,
    },
    {
        path: '/pagamento',
        element: <Pagamento/>,
    },
]);
