import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbarlogin from '../../components/Navbarlogin';
import Menino from '../../assets/criança.png';
import Feliz from '../../assets/Feliz.png';
import FooterUser from '../../components/FooterUser/index';
import * as S from './styles';

export default function Pguialogin() {
    const [guia, setGuia] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate();

    const handleBuscarClick = () => {
        alert(`Buscando por Guia: ${guia}, Nome: ${nome}`);
    };

    const handleVerMaisClick = () => {
        navigate('/guia/login');
    };

    const handleVerMaisComoLidarClick = () => {
        navigate('/GuiaSCLUser');
    };

    return (
        <>
            <Navbarlogin />

            <S.OndasEstilo>
                <p> </p>
            </S.OndasEstilo>

            <S.Cabercario>
                <S.DivFil>
                    <h1>Filtro</h1>
                    <input
                        type="text"
                        placeholder="Guia"
                        value={guia}
                        onChange={(e) => setGuia(e.target.value)}
                    />
                </S.DivFil>

                <S.DivPesq>
                    <h1>Pesquisar por nome</h1>
                    <input
                        type="text"
                        placeholder=" "
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </S.DivPesq>

                <S.But>
                    <button onClick={handleBuscarClick}>Buscar</button>
                </S.But>
            </S.Cabercario>

            <S.ConteinerUm>
                <S.ConteinerImagem
                    src={Menino}
                    alt="foto de uma criança chupando laranja"
                />

                <S.TituloUm>
                    <h1>Entenda a seletividade alimentar</h1>
                </S.TituloUm>

                <S.TitulUM>
                    <p>Comportamento alimentar</p>
                </S.TitulUM>

                <S.TituloSegundo>
                    <p>Seletividade</p>
                </S.TituloSegundo>

                <S.TituloTres>
                    <h1>Conteúdo:</h1>
                </S.TituloTres>

                <S.TextoUm>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA). Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoUm>

                <S.ButaoVerMaisUm>
                    <button type="submit" onClick={handleVerMaisClick}>
                        Ver Mais
                    </button>
                </S.ButaoVerMaisUm>
            </S.ConteinerUm>

            <S.ConteinerDois>
                <S.ConteinerImagemD
                    src={Feliz}
                    alt="foto de uma criança feliz"
                />

                <S.TituloD>
                    <h1>Seletividade Alimentar, como lidar</h1>
                </S.TituloD>

                <S.TitulD>
                    <p>Comportamento alimentar</p>
                </S.TitulD>

                <S.TituloS>
                    <p>Seletividade</p>
                </S.TituloS>

                <S.TituloT>
                    <h1>Conteúdo:</h1>
                </S.TituloT>

                <S.TextoU>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA). Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoU>

                <S.ButaoVerMaisU>
                    <button onClick={handleVerMaisComoLidarClick}>
                        Ver Mais
                    </button>
                </S.ButaoVerMaisU>
            </S.ConteinerDois>

            <FooterUser />
        </>
    );
}
