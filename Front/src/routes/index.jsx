import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/index';
import Home from '../pages/Home';
import Redefinirsenha from '../pages/Redefinirsenha';
import PesquisarGuia from '../pages/PesquisarGuia';
import PesquisarProfissional from '../pages/PesquisarProfissional';
import Cadastro from '../pages/Cadastro';
import Guia from '../pages/Guia/index.jsx';
//import CadastroProfissional from '../pages/Cadastroprofissional';
import Perfilprofissional from '../pages/Perfilprofissional';
import SobreNos from '../pages/SobreNos';



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
        path: '/Redefinirsenha/:id',
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
        element: <Perfilprofissional />,
    },
    {
        path: '/cadastro',
        element: <Cadastro />,
    },
    {
        path: '/Guia',
        element: <Guia />,
    },
    {
        path: '/sobreNos',
        element: <SobreNos/>
    },
]);
