// // import { RouterProvider } from "react-router-dom";
// import { routes as RoutesReact } from "./routes";
// // import { router } from "./routes";
// import GlobalStyles from "./styles/GlobalStyles";

// export default function App() {
//     return (
//     <>
//         <GlobalStyles/>
    

//         <RoutesReact />
//     </>
//     );
// }

// import { createBrowserRouter } from "react-router-dom";

// import Home from "../src/pages/Home/home";


// export const router = createBrowserRouter([
//     {
//         path: '/',
//         element: <Home/>
//     },
// ])

import { RouterProvider } from "react-router-dom";

import { router } from "./routes";

import GlobalStyles from "./styles/GlobalStyles"


export default function App() {

    return (
        <>
            <GlobalStyles />
            <RouterProvider router={router}/>
        </>
    )
}