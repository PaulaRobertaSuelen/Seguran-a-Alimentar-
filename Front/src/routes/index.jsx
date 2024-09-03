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
import PaginaPerfil from '../pages/Paginaperfil/index';
import Homelogin from '../pages/Homelogin/index';
import Pguialogin from '../pages/Pguialogin/index';
import SobreNos from '../pages/SobreNos/index';
import GuiaSeletividadeComolida from '../pages/GuiaSeletividadeComoLida/index';
import Homepro from '../pages/Homepro/index';
import Pppro from '../pages/Pppro/index';
import Pgpro from '../pages/Pgpro/index';
import Ppcarlos from '../pages/Ppcarlos/index';
import { Pagamento } from '../components/Assinatura/styles';
import SNosUser from '../pages/SNosUser/index';
import SNosPro from '../pages/SNosPro/index';

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
        path: '/Cadastro',
        element: <Cadastro />,
    },
    {
        path: '/CadastroDoProfissional',
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
        path: '/PaginaPerfil',
        element: <PaginaPerfil />,
    },
    {
        path: '/HomeLogin',
        element: <Homelogin />,
    },
    {
        path: '/PaginaGuiaLogin',
        element: <Pguialogin />,
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
        path: '/Guialogin',
        element: <Guialogin />,
    },
    {
        path: '/GuiaSeletividadeComolida',
        element: <GuiaSeletividadeComolida />,
    },
    {
        path: '/HomeDoProfissional',
        element: <Homepro />,
    },
    {
        path: '/PesquisaDoProfissional',
        element: <Pppro />,
    },
    {
        path: '/PaginaGuiaDoProfissional',
        element: <Pgpro />,
    },
    {
        path: '/PaginaDoCarlos',
        element: <Ppcarlos />,
    },
    {
        path: '/SobreNosUser',
        element: <SNosUser />,
    },
    {
        path: '/SobreNosProfissional',
        element: <SNosPro />,
    },
]);
