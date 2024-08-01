// import { RouterProvider } from "react-router-dom";
import { routes as RoutesReact } from "./routes";
// import { router } from "./routes";
import GlobalStyles from "./styles/GlobalStyles";

export default function App() {
  return (
    <>
    <GlobalStyles/>
    

    <RoutesReact />
    </>
  );
}
