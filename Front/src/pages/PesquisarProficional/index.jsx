import Navbar from "../../components/Navbar/navbar"
import * as S from "./styles" 

export default function PesquisarProficional(){

        return(
            
                <>
                    <Navbar/>
                            <S.Cabercario>
                                
                                <div>
                                    <p>Filtro</p>
                                    <input type="text" placeholder="Nutricionista"/>
                                </div>
                                <div>
                                    <p>Pesquisar por nome</p>
                                    <input type="text" placeholder=""/>
                                </div>
                                <button>                            
                                            <div>
                                                <span>
                                                <p>Buscar</p><p></p>
                                                </span>
                                            </div>
                                            <div>
                                                <span>
                                                <p> Buscar </p><p></p>
                                                </span>
                                            </div>
                                </button>
                            </S.Cabercario>

                                <S.Resultado><p>Resultados:</p></S.Resultado>

                            <S.Section>
                            <S.Container>
                                
                            <S.Conteinerimagem>
                                <S.Im src="src/assets/fotoProficional.png" alt="foto da proficional " />
                                
                            </S.Conteinerimagem>  

                            <S.Caixa>

                                    <h2> Fernanda Santos</h2>
                                    <h1> Nutricionista</h1> 
                                    
                            <S.Tags>
                                <S.Comp><p> Nutrição materno infantil </p></S.Comp>
                                <S.Sens><p> Comportamento alimentar </p></S.Sens>
                            </S.Tags> 

                                    
                                    <h1>Conteúdo:</h1>
                                    <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                            <S.Btndiv>
                                    <button>  
                                            
                                        <p>ver mais</p><p></p>
                                    </button>
                            </S.Btndiv>          
                            </S.Caixa>
                                
                            </S.Container>
                            </S.Section>



                </>
        )
    }