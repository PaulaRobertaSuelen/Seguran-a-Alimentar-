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
        path: '/Homelogin',
        element: <Homelogin />,
    },
    {
        path: '/Pguialogin',
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
        path: '/Homepro',
        element: <Homepro />,
    },
    {
        path: '/Pppro',
        element: <Pppro />,
    },
    {
        path: '/Pgpro',
        element: <Pgpro />,
    },
    {
        path: '/Ppcarlos',
        element: <Ppcarlos />,
    },
    {
        path: '/SNosUser',
        element: <SNosUser />,
    },
    {
        path: '/SNosPro',
        element: <SNosPro />,
    },
]);
