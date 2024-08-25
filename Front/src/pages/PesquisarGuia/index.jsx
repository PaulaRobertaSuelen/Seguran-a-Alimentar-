import Navbar from '../../components/Navbar/index';
import * as S from './styles';
//import ondas-do-comeco from './src/assets/ondas-do-comeco.png'

export default function PesquisarGuia() {
    return (
        <>
            <Navbar />
            <S.Cabercario>
                <div>
                    <h3>Filtro</h3>
                    <input type="text" placeholder="Guia" />
                </div>
                <div>
                    <h3>Pesquisar por nome</h3>
                    <input type="text" placeholder=" " />
                </div>
                    <button>
                        buscar
                    </button>
            </S.Cabercario>

            <S.Section>
                <S.Container>
                    <S.Conteinerimagem>
                        <S.Im
                            src="src/assets/criaça.png"
                            alt="imagen de uma criança "
                        />
                    </S.Conteinerimagem>

                    <S.Caixa>
                        <h2> Entenda a seletividade alimentar</h2>
                        <h1>Tags:</h1>

                        <S.Tags>
                            <S.Comp>
                                <p> Comportamento Alimentar </p>
                            </S.Comp>
                            <S.Sens>
                                <p>Sensibilidade</p>
                            </S.Sens>
                        </S.Tags>

                        <h1>Conteúdo:</h1>
                        <p>
                            A seletividade alimentar é um comportamento comum em
                            crianças, especialmente naquelas com necessidades
                            especiais, como o Transtorno do Espectro Autista
                            (TEA). Esse termo refere-se à preferência restrita
                            por certos alimentos e a recusa em consumir outros,
                            muitas vezes baseada em fatores como textura, cor,
                            sabor, ou apresentação do alimento.{' '}
                        </p>

                        <S.Btndiv>
                            <button>
                            ver mais
                            </button>
                        </S.Btndiv>
                    </S.Caixa>
                </S.Container>
            </S.Section>

            {/* segunda parte do GUIA */}

            <S.SectionDois>
                <S.ContainerDois>
                    <S.ConteinerImDois>
                        <S.ImDois
                            src="src/assets/foto-feliz.png"
                            alt="imagen de uma criança com a mae "
                        />
                    </S.ConteinerImDois>

                    <S.CaixaDois>
                        <h2>seletividade alimentar como lida</h2>
                        <h1>Tags:</h1>

                        <S.TagsDois>
                            <S.CompDois>
                                <p> Modelagem e incetivo </p>
                            </S.CompDois>
                            <S.SensDois>
                                <p> refeiçao atraente</p>
                            </S.SensDois>
                        </S.TagsDois>

                        <h1>Conteúdo:</h1>
                        <p>
                            
                            Lidar com a seletividade alimentar, especialmente em
                            crianças com necessidades especiais, pode ser
                            desafiador, mas existem várias estratégias eficazes
                            que podem ajudar. Aqui estão algumas abordagens
                            práticas:
                        </p>

                        <S.BtndivDois>
                            <button>
                                ver mais
                            </button>
                        </S.BtndivDois>
                    </S.CaixaDois>
                </S.ContainerDois>
            </S.SectionDois>
        </>
    );
}