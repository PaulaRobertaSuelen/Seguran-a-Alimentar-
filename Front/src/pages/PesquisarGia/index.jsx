import Navbar from '../../components/Navbar';
import * as S from './styles';

export default function PesquisarGia() {
    return (
        <>
            <Navbar />
            <S.Cabercario>
                <div>
                    <p>Filtro</p>
                    <input type="text" placeholder="Mãe" />
                </div>
                <div>
                    <p>Pesquisar por nome</p>
                    <input type="text" placeholder=" Maria da Silva" />
                </div>
                <button>
                    <div>
                        <span>
                            <p>Buscar</p>
                            <p></p>
                        </span>
                    </div>
                    <div>
                        <span>
                            <p>Buscar</p>
                            <p></p>
                        </span>
                    </div>
                </button>
            </S.Cabercario>

            <S.Resultado>
                <p>Resultados:</p>
            </S.Resultado>

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
                            {' '}
                            A seletividade alimentar é comum em crianças com
                            Transtorno do Espectro Autista (TEA). Ela se
                            caracteriza pela recusa em experimentar novos
                            alimentos, um repertório restrito de alimentos
                            aceitos e resistência a pratos novos...
                        </p>

                        <S.Btndiv>
                            <button>Ver mais </button>
                        </S.Btndiv>
                    </S.Caixa>
                </S.Container>
            </S.Section>
        </>
    );
}
