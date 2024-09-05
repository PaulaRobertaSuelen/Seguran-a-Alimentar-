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
    margin-top: 80px; /* 5rem */
    align-items: center;
    margin-left: 15rem;
    margin-left: 240px; /* 15rem */

    @media (max-width: 768px) {
        margin-left: -30px;
        margin-top: 20px;
        margin-left: 32px; /* 2rem */
        flex-direction: column;
        gap: -30px;
        gap: 16px; /* 1rem */
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
export const DivPesq = styled(DivFiltro)``;
export const FiltroContainer = styled.div`
    position: relative;
    width: 160px; /* 10rem */
    margin-bottom: 32px; /* 2rem */

    @media (min-width: 768px) {
        width: 240px; /* 15rem */
        margin-bottom: 0;
    }

    h1 {
        font-size: 16px; /* 1rem */
        margin-bottom: 16px; /* 1rem */
    }
`;

export const DivPesq = styled(DivFiltro)``;

export const FiltroContainer = styled.div`
    position: relative;

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
        padding: 4px;
        font-size: 16px; /* 1rem */
        border-radius: 64px; /* 4rem */
        width: 192px; /* 12rem */

        @media (max-width: 768px) {
            margin-top: 10%;
        }

        @media (max-width: 480px) {
            margin-top: 8%;
        }
    }

    div {
        display: flex;
        color: black;
        flex-direction: column;
        margin-top: 0.3rem;
        position: absolute;
        width: 12rem;
        z-index: 1;
    }
`;
//Butao de buscar
export const Botao = styled.div`
    margin-top: 20px;

    div {
        display: flex;
        color: black;
        flex-direction: column;
        margin-top: 4.8px; /* 0.3rem */
        position: absolute;
        width: 192px; /* 12rem */
        z-index: 1;
    }
`;

export const Botao = styled.div`
    margin-top: 20px;

    button {
        width: 80px; /* 5rem */
        height: 32px; /* 2rem */
        align-items: center;
        padding: 2px 10px;
        padding: 2px 10px;
        border: unset;
        border-radius: 10px;
        color: #888888;
        z-index: 1;
        background: #ffffff;
        position: relative;
        font-size: 1rem;
        position: relative;
        font-size: 16px; /* 1rem */
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
        overflow: hidden;

        &:hover {
            background-color: #33b44d;
            color: #ffffff;

        &:hover {
            background-color: #33B44D;
            color: #ffffff;
        }
    }
`;
// fim do botao

export const ConteinerUm = styled.div`
    display: flex;
    margin: 8rem;
    margin: 128px; /* 8rem */
    align-items: center;
    height: 288px; /* 18rem */
    width: 800px; /* 50rem */
    margin-left: 240px; /* 15rem */
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 300px;
        margin: 0 auto;
        padding: 10px;
        margin: 0;
        width: 100%;
        height: auto;
        margin-top: 40px;
        margin-bottom: 60px;
        padding: 16px; /* 1rem */
    }
`;

export const ConteinerImagemP = styled.img`
    max-width: 160px; /* 10rem */
    height: auto;
    margin-left: 32px; /* 2rem */
    margin-bottom: 80px; /* 5rem */

    @media (max-width: 900px) {
        margin: 0;
        max-width: 100px;
    }
`;

export const TituloUm = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px; /* 11rem */
        margin-left: 16px; /* 1rem */
        white-space: nowrap;

        @media (max-width: 900px) {
            margin: -10px 0;
            font-size: 18px;
        @media (max-width: 768px) {
            margin-bottom: 16px; /* 1rem */
            margin-left: 0;
            font-size: 20px;
        }
    }
`;

export const SubTituloUM = styled.div`
    p {
        font-size: 16px; /* 1rem */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -192px; /* -12rem */
        margin-bottom: 96px; /* 6rem */

        @media (max-width: 768px) {
            margin-left: 0;
            margin-bottom: -20px;
            font-size: 0.9rem;
            margin-bottom: 16px; /* 1rem */
            font-size: 14.4px; /* 0.9rem */
        }
    }
`;

export const TituloSegubd = styled.div`
    p {
        font-size: 16px; /* 1rem */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -1.6px; /* -0.1rem */
        margin-bottom: 96px; /* 6rem */

        @media (max-width: 768px) {
            margin-left: 0;
            margin-bottom: -20px;
            font-size: 0.9rem;
            margin-bottom: 16px; /* 1rem */
            font-size: 14.4px; /* 0.9rem */
        }
    }
`;

export const TituloDois = styled.div`
    h1 {
        font-size: 16px; /* 1rem */
        margin-left: -432px; /* -27rem */
        margin-top: 16px; /* 1rem */

        @media (max-width: 768px) {
            display: none;
            margin-left: 0;
            margin-top: 8px; /* 0.5rem */
            font-size: 14.4px; /* 0.9rem */
        }
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 16px; /* 1rem */
        color: black;
        line-height: 1.3;
        margin-left: -448px; /* -28rem */
        margin-top: 144px; /* 9rem */

        @media (max-width: 768px) {
            display: none;
            margin-left: 0;
            margin-top: 16px; /* 1rem */
            font-size: 14.4px; /* 0.9rem */
        }
    }
`;

export const ButaoVerPerfilsUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -736px; /* -46rem */
        margin-top: 192px; /* 12rem */
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: -20px;
            margin-top: 16px; /* 1rem */
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

