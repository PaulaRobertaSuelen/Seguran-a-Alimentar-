import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProfissional from '../pages/PesquisarProfissional';
import PerfilProfissional from '../pages/Perfil-profissional/index.jsx';
import Cadastro from '../pages/Cadastro';
import Cadastroprofissional from '../pages/Cadastroprofissional/index.jsx';
import Guia from '../pages/Guia/index.jsx';
import Paginaperfil from '../pages/Paginaperfil/index.jsx';

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
        path: '/PesquisarProfissional',
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
        element: <Cadastroprofissional />,
    },
    {
        path: '/Guia',
        element: <Guia />,
    },
    {
        path: '/Paginaperfil',
        element: <Paginaperfil />,
    },
]);
