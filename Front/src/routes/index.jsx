import { createBrowserRouter } from 'react-router-dom';

import Login from '../pages/Login/login.jsx';
import Home from '../pages/Home/index.jsx';
import Redefinirsenha from '../pages/Redefinirsenha';

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
]);
