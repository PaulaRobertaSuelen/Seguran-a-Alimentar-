import Navbar from "../../components/Navbar/navbar"
import Main from "../../components/main/Main"
 import Section1 from "./components/Section1/section1"
import Section2 from "./components/Section2/section2"

export default function Home(){
    return(
        <>
        <Navbar/>
          {/** esse foi um botao que eu criei com ananias */}
        {/* <button onClick={() => navigation('/login')}>login</button> */}
        <Main/>
         <Section1/> 
        <Section2/>
        </>
    )
}