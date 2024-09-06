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
import SobreNos from '../pages/SobreNos/index';
import GuiaSeletividade from '../pages/GuiaSeletividade/index';
import Ppcarlos from '../pages/Ppcarlos/index';
import Perfilmarta from '../pages/Perfilmarta/index';
import { Pagamento } from '../components/Assinatura/styles';

import Paginaperfil from '../pages/Paginaperfil';

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
        path: '/redefinirsenha',
        element: <Redefinirsenha />,
    },
    {
        path: '/pesquisarguia',
        element: <PesquisarGuia />,
    },
    {
        path: '/pesquisar/profissional',
        element: <PesquisarProfissional />,
    },
    {
        path: '/perfil/profissional',
        element: <PerfilProfissional />,
    },
    {
        path: '/Cadastro',
        element: <Cadastro />,
    },
    {
        path: '/cadastro/profissional',
        element: <CadastroProfissional />,
    },
    {
        path: '/PerfilPrivado',
        element: <PerfilPrivado />,
    },
    {
        path: '/Guia',
        element: <Guia />,
    },
    {
        path: '/SobreNos',
        element: <SobreNos />,
    },
    {
        path: '/pagamento',
        element: <Pagamento />,
    },
    {
        path: '/guia/seletividade',
        element: <GuiaSeletividade />,
    },
    {
        path: '/perfil/profissional/Carlos',
        element: <Ppcarlos />,
    },
    {
        path: '/perfil/profissional/Marta',
        element: <Perfilmarta />,
    },
    {
        path: '/perfil/usuario',
        element: <Paginaperfil />,
    },
]);
