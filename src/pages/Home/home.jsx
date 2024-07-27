import { useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar/navbar"
import Main from "../../components/main/Main"
import Section1 from "./components/section1"

export default function Main(){
    return(
        <>
        <Navbar/>
          {/** esse foi um botao que eu criei com ananias */}
        <button onClick={() => navigation('/login')}>login</button>
        <Main/>
        <Section1/>
        </>

    )
}