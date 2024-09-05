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
                    <button onClick={() => navigate('/perfil/profissional')}>
                        Ver Perfil
                    </button>
                </S.ButaoVerPerfilsUm>
            </S.ConteinerUm>

            {/* Segunda parte do profissional */}

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
                    <button
                        onClick={() => navigate('/Perfil/profissional/carlos')}
                    >
                        Ver Perfil
                    </button>
                </S.ButaoVerPerfilsU>
            </S.ConteinerDois>

            {/* Terceira parte do profissional */}

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
                    <button
                        onClick={() => navigate('/Perfil/profissional/marta')}
                    >
                        Ver Perfil
                    </button>
                </S.ButaoVerPerfilsTres>
            </S.ConteinerTres>

            <Footer />

        </>
    );
}
