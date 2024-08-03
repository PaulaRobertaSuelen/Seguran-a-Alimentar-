import Navbar from "../../components/Navbar/navbar";
import * as S from "./styles" 

export default function Pesquisar(){

        return(
            
                <>
                    <Navbar/> 
                            <S.Cabercario>
                                
                                <div>
                                    <p>Filtro</p>
                                    <input type="text" placeholder="Mãe"/>
                                </div>
                                <div>
                                    <p>Pesquisar por nome</p>
                                    <input type="text" placeholder=" Maria da Silva"/>
                                </div>
                                <button>Buscar</button>
                                <img src="src/assets/logoSemLetra.png" alt=" Logo" />
                            </S.Cabercario>

                           <S.Resultado>
                                <p>Resultados:</p>
                           </S.Resultado>
                           
                           <div>
                                <h2> Entenda a seletividade alimentar</h2>
                                <p>Tags:</p>
                                <img src="src/assets/criaça.png" alt="imagen de uma criança " />
                                <input type="text" placeholder="Comportamento alimentar" />
                                <input type="text" placeholder="Sensibilidade"/>
                                <img src="src/assets/bola(1).png" alt="bolha" />
                                <img src="src/assets/bola(2) .png" alt="bolha" />
                                <p>Conteúdo:</p>
                                <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>
                                <button>Ver mais </button>
                           </div>


                </>
        )
    }