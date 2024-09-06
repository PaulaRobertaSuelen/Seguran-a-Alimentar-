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
import Guialogin from '../pages/Guialogin';
import Homelogin from '../pages/Homelogin/index';
import LoginGuia from '../pages/LoginGuia/index';
import SobreNos from '../pages/SobreNos/index';
import GuiaSeletividade from '../pages/GuiaSeletividade/index';
import HomeProfissional from '../pages/HomeProfissional/index';
import Pppro from '../pages/Pppro/index';
import Pgpro from '../pages/Pgpro/index';
import Ppcarlos from '../pages/Ppcarlos/index';
import Perfilmarta from '../pages/Perfilmarta/index';
import { Pagamento } from '../components/Assinatura/styles';
import SNosUser from '../pages/SNosUser/index';
import SNosPro from '../pages/SNosPro/index';
import Guiapro from '../pages/Guiapro/index';
import GuiaSCLUser from '../pages/GuiaSCLUser/index';
import GuiaSCLPro from '../pages/GuiaSCLPro/index';
import Pguialogin from '../pages/Pguialogin/index';
import Paginaperfil from '../pages/Paginaperfil';
import Pesquisar from '../pages/Pesquisar';

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
        path: '/Home/login',
        element: <Homelogin />,
    },
    {
        path: '/login/guia',
        element: <LoginGuia />,
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
        path: '/Guia/login',
        element: <Guialogin />,
    },
    {
        path: '/guia/seletividade',
        element: <GuiaSeletividade />,
    },
    {
        path: '/Home/profissional',
        element: <HomeProfissional />,
    },
    {
        path: '/pesquisar/perfil/profissional',
        element: <Pppro />,
    },
    {
        path: '/pesquisar/login/guia',
        element: <Pgpro />,
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
        path: '/SNosUser',
        element: <SNosUser />,
    },
    {
        path: '/SobreNosProfissional',
        element: <SNosPro />,
    },
    {
        path: '/Guiapro',
        element: <Guiapro />,
    },
    {
        path: '/GuiaSCLUser',
        element: <GuiaSCLUser />,
    },
    {
        path: '/GuiaSCLPro',
        element: <GuiaSCLPro />,
    },
    {
        path: '/pesquisar/guia/login',
        element: <Pguialogin />,
    },
    {
        path: '/perfil/usuario',
        element: <Paginaperfil />,
    },
    {
        path: '/Pesquisar',
        element: <Pesquisar/>,
    },
]);
