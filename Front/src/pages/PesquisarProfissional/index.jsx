import Navbar from '../../components/Navbar';
import * as S from './styles';

export default function PesquisarProfissional() {
    return (
        <>
            <Navbar />
            <S.Cabercario>
                <div>
                    <p>Filtro</p>
                    <input type="text" placeholder="Nutricionista" />
                </div>
                <div>
                    <p>Pesquisar por nome</p>
                    <input type="text" placeholder="" />
                </div>
                <button>
                    Buscar
                </button>
            </S.Cabercario>

                                {/* segunda tela de perfil de profissional */}


                        <S.SectionDois>

                            <S.ContainerDois>
                                    <S.ConteinerIm>
                                        <S.ImDois src="src//assets/foto-perfil-fernanda-silva.png" alt="foto do profissional " />
                                    </S.ConteinerIm>  

                                <S.CaixaDois>

                                    <h2> Fernanda Santos</h2>
                                    <p> Nutricionista</p> 

                                    <S.TagsDois>
                                    <S.CompDois><p> Nutrição materno infantil </p></S.CompDois>
                                    <S.SensDois><p> Comportamento alimentar </p></S.SensDois>
                                    </S.TagsDois> 


                                    <h1>Conteúdo:</h1>
                                    <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                                    <S.BtndivDois>
                                    <button>  
                                    ver Perfil
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
                                                <S.CompTres><p> Nutrição materno infantil </p></S.CompTres>
                                                <S.SensTres><p> Comportamento alimentar </p></S.SensTres>
                                                </S.TagsTres> 


                                                <h1>Conteúdo:</h1>
                                                <p> A seletividade alimentar é comum em crianças com Transtorno do Espectro  Autista (TEA). Ela se caracteriza pela recusa em experimentar novos  alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>

                                            <S.BtndivTres>
                                                <button>  
                                                ver perfil
                                                </button>
                                            </S.BtndivTres>          
                                        </S.CaixaTres>

                                    </S.ContainerTres>
                                </S.SectionTres>




                </>
        )
    }