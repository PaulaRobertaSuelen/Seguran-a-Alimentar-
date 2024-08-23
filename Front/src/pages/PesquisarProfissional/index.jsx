import Navbar from '../../components/Navbar';
import * as S from './styles';

export default function PesquisarProfissional() {
    return (
        <>
            <Navbar />
                    
                            <S.Cabercario>
                                
                                <div>
                                    <h3>Filtro</h3>
                                    <input type="text" placeholder="Nutricionista"/>
                                </div>
                                <div>
                                    <h3>Pesquisar por nome</h3>
                                    <input type="text" placeholder=""/>
                                </div>
                                <button>                            
                                            <div>
                                                <span>
                                                <p>Buscar</p><p></p>
                                                </span>
                                            </div>
                                </button>
                            </S.Cabercario>


                            <S.Section>
                            <S.Container>
                                
                        <S.ConteinerIm>
                            <S.Im src="src/assets/fotoProfissional.png" alt="foto da profissional " />
                        </S.ConteinerIm>  

                                <S.Caixa>
                                    
                        
                                    <h2> Fernanda Santos</h2>
                                    <p> Nutricionista</p> 
                                    
                            <S.Tags>
                                <S.Comp><p> Nutrição materno infantil </p></S.Comp>
                                <S.Sens><p> Comportamento alimentar </p></S.Sens>
                            </S.Tags> 

                                    
                                    <h1>Conteúdo:</h1>
                                    <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                            <S.Btndiv>
                                    <button>  
                                            
                                        <p> ver Perfil </p>
                                    </button>
                            </S.Btndiv>          
                            </S.Caixa>
                                
                            </S.Container>
                            </S.Section>
                                

                                {/* segunda tela de perfil de profissional */}


                        <S.SectionDois>

                            <S.ContainerDois>
                                    <S.Conteinerimagem>
                                        <S.ImDois src="src/assets/julia.png" alt="foto do profissional " />
                                    </S.Conteinerimagem>  

                                <S.CaixaDois>

                                    <h2> Julia Mendes</h2>
                                    <p> Nutricionista</p> 

                                    <S.TagsDois>
                                    <S.Comp><p> Nutrição materno infantil </p></S.Comp>
                                    <S.SensDois><p> Comportamento alimentar </p></S.SensDois>
                                    </S.TagsDois> 


                                    <h1>Conteúdo:</h1>
                                    <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                                    <S.BtndivDois>
                                    <button>  
                                            
                                        <p> ver Perfil </p><p></p>
                                    </button>
                                    </S.BtndivDois>          
                                    </S.CaixaDois>
                            </S.ContainerDois>
                        </S.SectionDois>


                                {/* terceiro perfil do profissional */}



                                <S.SectionTres>
                                    <S.ContainerTres>

                                        <S.ConteinerImTres>
                                            <S.ImTres src="src/assets/Pedro.png" alt="foto do profissional " />
                                        </S.ConteinerImTres>  

                                        <S.CaixaTres>

                                                <h2> Pedro Aschoff</h2>
                                                <p> Nutricionista</p> 

                                                <S.TagsTres>
                                                <S.Comp><p> Nutrição materno infantil </p></S.Comp>
                                                <S.SensTres><p> Comportamento alimentar </p></S.SensTres>
                                                </S.TagsTres> 


                                                <h1>Conteúdo:</h1>
                                                <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                                            <S.BtndivTres>
                                                <button>  
                                                    <p>ver perfil</p>
                                                </button>
                                            </S.BtndivTres>          
                                        </S.CaixaTres>

                                    </S.ContainerTres>
                                </S.SectionTres>
                                
                </>
        )
    }