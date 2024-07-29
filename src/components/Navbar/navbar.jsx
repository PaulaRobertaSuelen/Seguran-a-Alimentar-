import Bane from "../../assets/bane.jpg"
export default function Navbar() {

    return (

        <nav>  
                {/** esse é o bane da pagina inicial  */}
            <img src={Bane} alt="" />

                {/** essa é a nav bar  */}
            < a href="/">Entra</a>&nbsp; &nbsp; &nbsp;
            < a href="/">Inicio</a>&nbsp; &nbsp; &nbsp;
            < a href="/">Perfil</a>

        </nav>


    )
}
