import styled from 'styled-components';
import OndasDoComeco from '../../assets/ondas-do-comeco.png';

export const OndasEstilo = styled.div`
    position: absolute;
    width: 100%;
    height: 140%;
    background-image: url(${OndasDoComeco});
    background-size: cover;
    z-index: -1;
`;

export const Cabecalho = styled.div`
    display: flex;
    margin-top: 5rem;
    align-items: center;
    margin-left: 15rem;
    

    @media (max-width: 768px) {
        margin-left: 2rem;
        flex-direction: column;
        gap: 1rem;
    }
`;
export const DivFiltro = styled.div`
    width: 10rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        width: 15rem;
        margin-bottom: 0;
    }

    h1 {
        font-size: 1rem;
        margin-bottom: 1rem;
    }
`;
export const DivPesq = styled(DivFiltro)`

`;
export const FiltroContainer = styled.div`
    position: absolute;

    input {
        padding: 4px;
        font-size: 1rem;
        border-radius: 4rem;
        width: 12rem;

    @media (max-width: 768px) {
        margin-top: 10%;
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 480px) {
        margin-top: 8%;
        flex-direction: column;
        justify-content: center;
    }
    }

    div {
        display: flex;
        flex-direction: column;
        gap: 3px;
        
    }
    button {
        padding: 5px;
        width: 12rem;
        border-radius: 10px;
        color: black;
        background-color: #DEEDF5;
        color: black;
        border: none;
        cursor: pointer;
        transition: background-color 0.3s ease;

      &:hover {
        background-color: #33B44D;
      }
    }
`;



export const ConteinerUm = styled.div`
    display: flex;
    margin: 8rem;
    align-items: center;
    height: 18rem;
    width: 50rem;
    margin-left: 15rem;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;

    @media (max-width: 768px) {
        flex-direction: column;
        margin: 0rem;
        width: 100%;
        height: auto;
        padding: 1rem;
    }
`;

export const ConteinerImagemP = styled.img`
    max-width: 10rem;
    height: auto;
    margin-left: 2rem;
    margin-bottom: 5rem;

    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const TituloUm = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 11rem;
        margin-left: 1rem;
        white-space: nowrap;

        @media (max-width: 768px) {
            margin-bottom: 1rem;
            margin-left: 0;
            font-size: 20px;
        }
    }
`;

export const SubTituloUM = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -12rem;
        margin-bottom: 6rem;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
    }
`;

export const TituloSegubd = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -0.1rem;
        margin-bottom: 6rem;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-bottom: 1rem;
            font-size: 0.9rem;
        }
    }
`;

export const TituloDois = styled.div`
    h1 {
        font-size: 1rem;
        margin-left: -27rem;
        margin-top: 1rem;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 0.5rem;
            font-size: 0.9rem;
        }
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 1rem;
        color: black;
        line-height: 1.3;
        margin-left: -28rem;
        margin-top: 9rem;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 1rem;
            font-size: 0.9rem;
        }
    }
`;

export const ButaoVerPerfilsUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -46rem;
        margin-top: 12rem;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 1rem;
            width: 100%;
        }
    }
`;

export const ConteinerDois = styled(ConteinerUm)``;
export const ConteinerImagemD = styled(ConteinerImagemP)``;
export const TituloPrimeiro = styled(TituloUm)``;
export const SubTituloPrimeiro = styled(SubTituloUM)``;
export const TituloSegundo = styled(TituloSegubd)``;
export const TituloD = styled(TituloDois)``;
export const TextoU = styled(TextoUm)``;
export const ButaoVerPerfilsU = styled(ButaoVerPerfilsUm)``;

export const ConteinerTres = styled(ConteinerUm)``;
export const ConteinerImagemTres = styled(ConteinerImagemP)``;
export const TituloTerceiro = styled(TituloUm)``;
export const SubTituloTer = styled(SubTituloUM)``;
export const TituloTres = styled(TituloSegubd)``;
export const TituloTre = styled(TituloDois)``;
export const TextoTres = styled(TextoUm)``;
export const ButaoVerPerfilsTres = styled(ButaoVerPerfilsUm)``;
