import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProfissional from '../pages/PesquisarProfissional';
import Cadastro from '../pages/Cadastro';
import Guia from '../pages/Guia/index.jsx';
import CadastroProfissional from '../pages/Cadastroprofissional';
import Perfilprofissional from '../pages/Perfilprofissional/index.jsx'
import PerfilPrivado from '../pages/PerfilPrivado/index.jsx';

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
        path: '/Redefinirsenha',
        element: <Redefinirsenha />,
    },
    {
        path: '/PesquisarGuia',
        element: <PesquisarGuia />,
    },
    {
        path: '/Pesquisarprofissional',
        element: <PesquisarProfissional />,
    },
    {
        path: '/perfilprofissional',
        element: <Perfilprofissional />,
    },
    {
        path: '/cadastro',
        element: <Cadastro />,
    },
    {
        path: '/perfilprivado',
        element: <PerfilPrivado />,
    },
]);
