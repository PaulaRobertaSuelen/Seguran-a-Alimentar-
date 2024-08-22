import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index.jsx'
import Home from '../pages/Home/index.jsx';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProficional from '../pages/PesquisarProficional';
import PerfilProfissional from '../pages/Perfil-profissional/index.jsx';
import Cadastro from '../pages/Cadastro';
import Cadastroprofissional from '../pages/Cadastroprofissional';
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
        path: '/PesquisarProficional',
        element: <PesquisarProficional />,
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
]);
