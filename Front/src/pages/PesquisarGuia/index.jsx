import { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/index';
import Menino from '../../assets/criança.png';
import * as S from './styles';

export default function PesquisarGuia() {
    
    const [guia, setGuia] = useState('');
    const [nome, setNome] = useState('');

    const handleBuscarClick = () => {
        
        alert(`Buscando por Guia: ${guia}, Nome: ${nome}`);
    };

    const handleVerMaisClick = () => {
        
        alert("Ver mais conteúdo!");
    };

    return (
        <>
                        <Navbar />

                            <S.OndasEstilo>
                                <p> </p>
                            </S.OndasEstilo>

                                        <S.Cabercario>
                                            
                                                <h1>Filtro</h1>
                                                <input
                                                    type="text"
                                                    placeholder="Guia"
                                                    value={guia}
                                                    onChange={(e) => setGuia(e.target.value)} />
                                            
                                            
                                                <h1>Pesquisar por nome</h1>
                                                <input
                                                    type="text"
                                                    placeholder=" "
                                                    value={nome}
                                                    onChange={(e) => setNome(e.target.value)} />
                                            
                                            <div>
                                                <button onClick={handleBuscarClick}>Buscar</button>
                                            </div>
                                        </S.Cabercario>

                                            <S.ConteinerUm>
                                            <S.ConteinerImagem
                                                    src={Menino} alt="foto de uma criança-chupando-laranja"/>

                                                            <S.TituloUm>
                                                                <h2>Entenda a seletividade alimentar</h2>
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
                                                                    <p>A seletividade alimentar é comum em crianças com Transtorno do Espectro Autista (TEA).Ela se caracteriza pela recusa em experimentar novos alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>
                                                                </S.TextoUm>

                                                                <S.ButaoVerMaisUm>
                                                                    <button onClick={handleVerMaisClick}>Ver mais</button>
                                                                </S.ButaoVerMaisUm>
                                            </S.ConteinerUm>



                                            <S.ConteinerDois>
                                            <S.ConteinerImagemD
                                                    src={Menino} alt="foto de uma criança-chupando-laranja"/>

                                                            <S.TituloD>
                                                                <h2>Entenda a seletividade alimentar</h2>
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
                                                                    <p>A seletividade alimentar é comum em crianças com Transtorno do Espectro Autista (TEA).Ela se caracteriza pela recusa em experimentar novos alimentos, um repertório restrito de alimentos aceitos e resistência a pratos novos...</p>
                                                                </S.TextoU>

                                                                <S.ButaoVerMaisU>
                                                                    <button onClick={handleVerMaisClick}>Ver mais</button>
                                                                </S.ButaoVerMaisU>
                                            </S.ConteinerDois>

                                <Footer/>
        </>
    );
}
