import { createBrowserRouter } from "react-router-dom";

import Home from "../pages/Home/home";
import Login from "../pages/Login/login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
   
])  