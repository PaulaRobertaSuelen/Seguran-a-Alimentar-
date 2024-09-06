import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Footer from '../../components/FooterUser/index';
import Navbar from '../../components/Navbar/index';
import * as S from './styles'; 

export default function Pesquisar() {
    // const navigate = useNavigate();
    const [mostrarFiltros, setMostrarFiltros] = useState(false);
    const [mostrarNomes, setMostrarNomes] = useState(false);

    const handleEspecialidadeClick = (especialidade) => {
        setMostrarFiltros(false); 
        console.log('Especialidade selecionada:', especialidade);
    };

    const handleNomeClick = (nome) => {
        setMostrarNomes(false); 
        console.log('Nome selecionado:', nome);
    };

    return (
        <>
            <Navbar />  

            <S.OndasEstilo> 
                <p> </p>
            </S.OndasEstilo>

            <S.Cabecalho>
                <S.DivFiltro>
                    <h1>Filtros</h1>
                    <S.FiltroContainer>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            onClick={() => setMostrarFiltros(!mostrarFiltros)}
                            readOnly
                        />
                        {mostrarFiltros && (
                            <div>
                                <button onClick={() => handleEspecialidadeClick('/pesquisar/profissional')}>Nutricionista</button>
                                <button onClick={() => handleEspecialidadeClick('Fonoaudiólogo')}>Fonoaudiólogo</button>
                                <button onClick={() => handleEspecialidadeClick('Psicólogo')}>Psicólogo</button>
                            </div>
                        )}
                    </S.FiltroContainer>
                </S.DivFiltro>

                <S.DivPesq>
                    <h1>Pesquise por Nome</h1>
                    <S.FiltroContainer>
                        <input
                            type="text"
                            placeholder="Pesquisar"
                            onClick={() => setMostrarNomes(!mostrarNomes)}
                            readOnly
                        />
                        {mostrarNomes && (
                            <div>
                                <button onClick={() => handleNomeClick('Fernanda Santos')}>Fernanda Santos</button>
                                <button onClick={() => handleNomeClick('Carlos Aschoff')}>Carlos Aschoff</button>
                                <button onClick={() => handleNomeClick('Marta Portela')}>Marta Portela</button>
                            </div>
                        )}
                    </S.FiltroContainer>
                </S.DivPesq>
            </S.Cabecalho>

            <S.Conteine>
                <p>pesquise no filtro e veja os resultados..</p>
            </S.Conteine>

            <Footer />  
        </>
    );
}
