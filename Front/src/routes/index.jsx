import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index.jsx'
import Home from '../pages/Home/index.jsx';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGia from '../pages/PesquisarGia';
import PesquisarProficional from '../pages/PesquisarProficional';
import PerfilProfissional from '../pages/Perfil-profissional/perfil-profissional';
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
        path: '/PesquisarGia',
        element: <PesquisarGia />,
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
]);
