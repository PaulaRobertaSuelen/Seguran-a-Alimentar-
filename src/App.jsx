import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import Home  from "./pages/Home/home";


export default function App() {

  return (
    <>
        <RouterProvider router={router}/>
        <Home/>
    </>
  )
}


