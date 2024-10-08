import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importando o useNavigate
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/index';
import Menino from '../../assets/criança.png';
import Feliz from '../../assets/Feliz.png';
import * as S from './styles';

export default function PesquisarGuia() {
    const [guia, setGuia] = useState('');
    const [nome, setNome] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleBuscarClick = () => {
        alert(`Buscando por Guia: ${guia}, Nome: ${nome}`);
    };

    const handleVerMaisClick = () => {
        navigate('/guia'); // Redireciona para a rota /guia
    };

    const handleVerMaisComoLidarClick = () => {
        navigate('/guia/seletividade'); // Redireciona para a rota /GuiaSeletividadeComoLidar
    };

    return (
        <>
            <Navbar />

            <S.OndasEstilo>
                <p> </p>
            </S.OndasEstilo>

            <S.ConteinerUm>
                <S.ConteinerImagem
                    src={Menino}
                    alt="foto de uma criança-chupando-laranja"
                />

                <S.TituloUm>
                    <h1>Entenda a seletividade alimentar</h1>
                </S.TituloUm>

                <S.TitulUM>
                    <p>Comportamento Alimentar, Seletividade</p>
                </S.TitulUM>

                <S.TituloTres>
                    <h1>Conteúdo:</h1>.
                </S.TituloTres>

                <S.TextoUm>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA).Ela se caracteriza
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
                    <p>Comportamento alimentar, Seletividade</p>
                </S.TitulD>

                <S.TituloT>
                    <h1>Conteúdo:</h1>
                </S.TituloT>

                <S.TextoU>
                    <p>
                        A seletividade alimentar é comum em crianças com
                        Transtorno do Espectro Autista (TEA).Ela se caracteriza
                        pela recusa em experimentar novos alimentos, um
                        repertório restrito de alimentos aceitos e resistência a
                        pratos novos...
                    </p>
                </S.TextoU>

                <S.ButaoVerMaisU>
                    <button onClick={handleVerMaisComoLidarClick}>
                        Ver mais
                    </button>
                </S.ButaoVerMaisU>
            </S.ConteinerDois>

            <Footer />
        </>
    );
}
