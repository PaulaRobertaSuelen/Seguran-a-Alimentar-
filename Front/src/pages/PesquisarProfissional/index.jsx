import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbarlogin from '../../components/Navbarlogin/index';
import Fernanda from '../../assets/foto-perfil-fernanda-silva.png';
import Marta from '../../assets/Marta.png';
import Carlos from '../../assets/Carlos.png';
//import ModalPesquisa from '../../components/ModalPesquisar';
import * as S from './styles';

export default function PesquisarProfissional() {
    const [Nutricionista, setNutricionista] = useState('');
    const [nome, setNome] = useState('');
    // const [isModalPesquisarOpen, setIsModalPesquisarOpen] = useState(false);
    // const [searchResultado, setSearchResultado] = useState([]);

    const handleBuscarClick = () => {
        // Simula uma pesquisa
        //const resultado = [
        // `Nutricionista: ${Nutricionista}`,
        // `Nome: ${nome}`
        // ];
        // setSearchResultado(resultado);
        // setIsModalPesquisarOpen(true);
    };

    const handleVerMaisClick = () => {
        alert('Ver Perfil!');
    };

    return (
        <>
            <Navbarlogin />

            <S.OndasEstilo>
                <p> </p>
            </S.OndasEstilo>

            <S.Cabercario>
                <S.DivFiltro>
                    <h1>Filtro</h1>
                    <input
                        type="text"
                        placeholder="Nutricionista"
                        value={Nutricionista}
                        onChange={(e) => setNutricionista(e.target.value)}
                    />
                </S.DivFiltro>

                <S.DivPesq>
                    <h1>Pesquisar por nome</h1>
                    <input
                        type="text"
                        placeholder=" "
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </S.DivPesq>

                <S.Butao>
                    <button onClick={handleBuscarClick}>Buscar</button>
                </S.Butao>
            </S.Cabercario>

            <S.ConteinerUm>
                <S.ConteinerImagemP src={Fernanda} alt="foto da Profissional" />

                <S.TituloUm>
                    <h1>Fernanda Santos</h1>
                </S.TituloUm>

                <S.SubTituloUM>
                    <p>Nutrição materno infantil</p>
                </S.SubTituloUM>

                <S.TituloSegubd>
                    <p>Comportamento alimentar</p>
                </S.TituloSegubd>

                <S.TituloDois>
                    <h1>Conteúdo:</h1>
                </S.TituloDois>

                <S.TextoUm>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA). Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoUm>

                <S.ButaoVerPerfilsUm>
                    <button onClick="submit">Ver Perfil</button>
                </S.ButaoVerPerfilsUm>
            </S.ConteinerUm>

            {/* segunda parte do profissional */}

            <S.ConteinerDois>
                <S.ConteinerImagemD src={Carlos} alt="foto do Profissional" />

                <S.TituloPrimeiro>
                    <h1>Carlos Aschoff</h1>
                </S.TituloPrimeiro>

                <S.SubTituloPrimeiro>
                    <p>Nutrição materno infantil</p>
                </S.SubTituloPrimeiro>

                <S.TituloSegundo>
                    <p>Comportamento alimentar</p>
                </S.TituloSegundo>

                <S.TituloD>
                    <h1>Conteúdo:</h1>
                </S.TituloD>

                <S.TextoU>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA). Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoU>

                <S.ButaoVerPerfilsU>
                    <button onClick={handleVerMaisClick}>Ver Perfil</button>
                </S.ButaoVerPerfilsU>
            </S.ConteinerDois>

            {/* treceira parte do Profissional */}

            <S.ConteinerTres>
                <S.ConteinerImagemTres src={Marta} alt="foto da Profissional" />

                <S.TituloTerceiro>
                    <h1>Marta Portela</h1>
                </S.TituloTerceiro>

                <S.SubTituloTer>
                    <p>Nutrição materno infantil</p>
                </S.SubTituloTer>

                <S.TituloTres>
                    <p>Comportamento alimentar</p>
                </S.TituloTres>

                <S.TituloTre>
                    <h1>Conteúdo:</h1>
                </S.TituloTre>

                <S.TextoTres>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA). Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoTres>

                <S.ButaoVerPerfilsTres>
                    <button>Ver Perfil</button>
                </S.ButaoVerPerfilsTres>
            </S.ConteinerTres>

            <Footer />

            {/* <ModalPesquisa isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}searchResults={searchResults}/> */}
        </>
    );
}
