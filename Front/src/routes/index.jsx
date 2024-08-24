import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProfissional from '../pages/PesquisarProfissional';
import PerfilProfissional from '../pages/Perfil-profissional/index.jsx';
import Cadastro from '../pages/Cadastro';
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
]);
