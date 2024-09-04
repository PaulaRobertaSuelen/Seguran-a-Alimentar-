import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/FooterUser/index';
import Navbarlogin from '../../components/Navbarlogin/index';
import Fernanda from '../../assets/foto-perfil-fernanda-silva.png';
import Marta from '../../assets/Marta.png';
import Carlos from '../../assets/Carlos.png';
import * as S from './styles';

export default function PesquisarProfissional() {
    const navigate = useNavigate(); 
    const [especialidade, setEspecialidade] = useState('');
    const [nome, setNome] = useState('');

    const handleBuscarClick = () => {
    
        console.log('Buscar por:', { especialidade, nome });
        
    };

    return (
        <>
            <Navbarlogin />

            <S.OndasEstilo>
                <p> </p>
            </S.OndasEstilo>

            <S.Cabecalho>
                <S.DivFiltro>
                    <h1>Filtros </h1>
                    <select
                        value={especialidade}
                        onChange={(e) => setEspecialidade(e.target.value)}
                    >
                        <option value="">Selecione uma especialidade</option>
                        <option value="">Nutricionista</option>
                        <option value="">fonoaudiólogo</option>
                        <option value="">psicólogo</option>
                        <option value="">terapeuta ocupacional</option>
                    </select>
                </S.DivFiltro>

                <S.DivPesq>
                    <h1>pesquise por Nome</h1>
                    <select
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}>
                        <option value="">Selecione um nome</option>
                        <option value="">Fernanda Santos</option>
                        <option value="">Carlos Aschoff</option>
                        <option value=" ">Marta Portela</option>
                    </select>
                </S.DivPesq>

                <S.Botao>
                    <button onClick={handleBuscarClick}>Buscar</button>
                </S.Botao>
            </S.Cabecalho>

            
                    <S.ConteinerUm>
                        <S.ConteinerImagemP src={Fernanda} alt="Foto da Profissional Fernanda Santos" />
                        <S.TituloUm>
                            <h1>Fernanda Santos</h1>
                        </S.TituloUm>
                        <S.SubTituloUm>
                            <p>Nutrição Materno Infantil</p>
                        </S.SubTituloUm>
                        <S.TituloSegundo>
                            <p>Comportamento Alimentar</p>
                        </S.TituloSegundo>
                        <S.TituloConteudo>
                            <h1>Conteúdo:</h1>
                        </S.TituloConteudo>
                        <S.TextoUm>
                            <p>
                                A seletividade alimentar é comum em crianças com
                                Transtorno do Espectro Autista (TEA). Ela se caracteriza
                                pela recusa em experimentar novos alimentos, um
                                repertório restrito de alimentos aceitos e resistência a
                                pratos novos...
                            </p>
                        </S.TextoUm>
                        <S.BotaoVerPerfil>
                            <button onClick={() => navigate('/perfilprofissional')}>
                                Ver Perfil
                            </button>
                        </S.BotaoVerPerfil>
                    </S.ConteinerUm>

                    {/* Profissional 2 */}
                    <S.ConteinerDois>
                        <S.ConteinerImagemD src={Carlos} alt="Foto do Profissional Carlos Aschoff" />
                        <S.TituloPrimeiro>
                            <h1>Carlos Aschoff</h1>
                        </S.TituloPrimeiro>
                        <S.SubTituloPrimeiro>
                            <p>Nutrição Esportiva</p>
                        </S.SubTituloPrimeiro>
                        <S.TituloSegundo>
                            <p>Suplementação Alimentar</p>
                        </S.TituloSegundo>
                        <S.TituloConteudo>
                            <h1>Conteúdo:</h1>
                        </S.TituloConteudo>
                        <S.TextoDois>
                            <p>
                                A suplementação adequada é fundamental para atletas de alta performance.
                                Entender as necessidades específicas de cada modalidade esportiva ajuda
                                na escolha correta dos suplementos e na otimização do desempenho...
                            </p>
                        </S.TextoDois>
                        <S.BotaoVerPerfil>
                            <button onClick={() => navigate('/ppcarlos')}>
                                Ver Perfil
                            </button>
                        </S.BotaoVerPerfil>
                    </S.ConteinerDois>

                    {/* Profissional 3 */}
                    <S.ConteinerTres>
                        <S.ConteinerImagemTres src={Marta} alt="Foto da Profissional Marta Portela" />
                        <S.TituloTerceiro>
                            <h1>Marta Portela</h1>
                        </S.TituloTerceiro>
                        <S.SubTituloTerceiro>
                            <p>Nutrição Clínica</p>
                        </S.SubTituloTerceiro>
                        <S.TituloSegundo>
                            <p>Dietas Restritivas</p>
                        </S.TituloSegundo>
                        <S.TituloConteudo>
                            <h1>Conteúdo:</h1>
                        </S.TituloConteudo>
                        <S.TextoTres>
                            <p>
                                Dietas restritivas devem ser abordadas com cautela e acompanhamento
                                profissional. É importante garantir que todas as necessidades
                                nutricionais sejam atendidas mesmo com a exclusão de certos alimentos...
                            </p>
                        </S.TextoTres>
                        <S.BotaoVerPerfil>
                            <button onClick={() => navigate('/perfilmarta')}>
                                Ver Perfil
                            </button>
                        </S.BotaoVerPerfil>
                    </S.ConteinerTres>

                    <Footer />
        </>
    );
}
