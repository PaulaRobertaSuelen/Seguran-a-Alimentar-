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
export const Cabercario = styled.div`
    display: flex;
    margin-top: 80px; /* 5rem = 80px */
    align-items: center;
    margin-left: 240px; /* 15rem = 240px */
    gap: 32px; /* 2rem = 32px */
`;
export const DivFiltro = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px; /* 1rem = 16px */
        font-size: 16px; /* 1rem = 16px */
        font-weight: 160px; /* 10rem = 160px */
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 64px; /* 4rem = 64px */
        width: 200px;
    }
`;

export const DivPesq = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px; /* 1rem = 16px */
        font-size: 16px; /* 1rem = 16px */
        font-weight: 160px; /* 10rem = 160px */
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 64px; /* 4rem = 64px */
        width: 200px;
    }
`;

export const Butao = styled.div`
    display: flex;
    margin-top: 32px; /* 2rem = 32px */

    button {
        width: 80px; /* 5rem = 80px */
        height: 32px; /* 2rem = 32px */
        align-items: center;
        padding: 5px 10px;
        border: unset;
        border-radius: 10px;
        color: #888888;
        z-index: 1;
        background: #ffffff;
        position: relative;
        font-size: 12px;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
        overflow: hidden;
    }

    div {
        display: flex;
    }

    button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        background-color: #33b44d;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
    }

    button:hover {
        color: #e8e8e8;
    }

    button:hover::before {
        width: 100%;
    }
`;

export const ConteinerUm = styled.div`
    display: flex;
    margin: 80px; /* 5rem = 80px */
    align-items: center;
    height: 288px; /* 18rem = 288px */
    width: 800px; /* 50rem = 800px */
    margin-left: 240px; /* 15rem = 240px */
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagemP = styled.img`
    max-width: 160px; /* 10rem = 160px */
    height: auto;
    margin-left: 32px; /* 2rem = 32px */
    margin-bottom: 80px; /* 5rem = 80px */
`;

export const TituloUm = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px; /* 11rem = 176px */
        margin-left: 16px; /* 1rem = 16px */
        white-space: nowrap;
    }
`;

export const SubTituloUM = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -208px; /* -13rem = -208px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloSegubd = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -16px; /* -1rem = -16px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloDois = styled.div`
    h1 {
        font-size: 16px; /* 1rem = 16px */
        margin-left: -464px; /* -29rem = -464px */
        margin-top: 16px; /* 1rem = 16px */
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: black;
        line-height: 1.3;
        margin-left: -480px; /* -30rem = -480px */
        margin-top: 144px; /* 9rem = 144px */
    }
`;

export const ButaoVerPerfilsUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -736px; /* -46rem = -736px */
        margin-top: 192px; /* 12rem = 192px */
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const ConteinerDois = styled.div`
    display: flex;
    margin: -48px; /* -3rem = -48px */
    align-items: center;
    height: 288px; /* 18rem = 288px */
    width: 800px; /* 50rem = 800px */
    margin-left: 240px; /* 15rem = 240px */
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagemD = styled.img`
    max-width: 144px; /* 9rem = 144px */
    height: auto;
    margin-left: 32px; /* 2rem = 32px */
    margin-bottom: 80px; /* 5rem = 80px */
`;

export const TituloPrimeiro = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px; /* 11rem = 176px */
        margin-left: 16px; /* 1rem = 16px */
        white-space: nowrap;
    }
`;

export const SubTituloPrimeiro = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -190.4px; /* -11.9rem = -190.4px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloSegundo = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: 16px; /* 1rem = 16px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloD = styled.div`
    h1 {
        font-size: 18px;
        margin-left: -448px; /* -28rem = -448px */
        margin-top: 16px; /* 1rem = 16px */
    }
`;

export const TextoU = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: black;
        line-height: 1.3;
        margin-left: -464px; /* -29rem = -464px */
        margin-top: 144px; /* 9rem = 144px */
    }
`;

export const ButaoVerPerfilsU = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -736px; /* -46rem = -736px */
        margin-top: 192px; /* 12rem = 192px */
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export const ConteinerTres = styled.div`
    display: flex;
    margin: 80px; /* 5rem = 80px */
    align-items: center;
    height: 288px; /* 18rem = 288px */
    width: 800px; /* 50rem = 800px */
    margin-left: 240px; /* 15rem = 240px */
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagemTres = styled.img`
    max-width: 144px; /* 9rem = 144px */
    height: auto;
    margin-left: 32px; /* 2rem = 32px */
    margin-bottom: 80px; /* 5rem = 80px */
`;

export const TituloTerceiro = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px; /* 11rem = 176px */
        margin-left: 16px; /* 1rem = 16px */
        white-space: nowrap;
    }
`;

export const SubTituloTer = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -174.4px; /* -10.9rem = -174.4px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloTres = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: 16px; /* 1rem = 16px */
        margin-bottom: 96px; /* 6rem = 96px */
    }
`;

export const TituloTre = styled.div`
    h1 {
        font-size: 16px; /* 1rem = 16px */
        margin-left: -448px; /* -28rem = -448px */
        margin-top: 16px; /* 1rem = 16px */
    }
`;

export const TextoTres = styled.div`
    p {
        font-size: 16px; /* 1rem = 16px */
        color: black;
        line-height: 1.3;
        margin-left: -464px; /* -29rem = -464px */
        margin-top: 144px; /* 9rem = 144px */
    }
`;

export const ButaoVerPerfilsTres = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -736px; /* -46rem = -736px */
        margin-top: 192px; /* 12rem = 192px */
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;
