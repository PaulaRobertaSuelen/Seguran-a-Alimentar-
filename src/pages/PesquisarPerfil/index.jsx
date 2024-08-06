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

                                <S.Resultado> Resultados:</S.Resultado>
                            <S.Section>
                            <S.Container>
                                
                            <S.Conteinerimagem>
                                <S.Im src="src/assets/criaça.png" alt="imagen de uma criança " />
                            </S.Conteinerimagem>  

                                <S.Caixa>
                                    <h2> Entenda a seletividade alimentar</h2>
                                    <h1>Tags:</h1>
                            <S.Tags>
                                <input type="text" placeholder="Comportamento alimentar" />
                                <input type="text" placeholder="Sensibilidade"/>
                            </S.Tags>    
                                        {/* </S.Container>S.Imag src = "src/assets/bolhas.png" alt = " imagen de bolhas"/>  */}
                                        
                                    <h1>Conteúdo:</h1>
                                    <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). 
                                        Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito 
                                        de alimentos aceitos e resistência a pratos novos...</p>

                            <S.Btndiv>
                                    <button>Ver mais </button>
                            </S.Btndiv>          
                                </S.Caixa>
                                
                            </S.Container>
                            </S.Section>


                </>
        )
    }