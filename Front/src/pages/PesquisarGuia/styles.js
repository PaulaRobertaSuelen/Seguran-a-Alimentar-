import styled from 'styled-components';
import OndasDoComeco from '../../assets/ondas-do-comeco.png';

export const OndasEstilo = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    background-image: url(${OndasDoComeco});
    background-size: cover;
    z-index: -1;
`;

export const Cabercario = styled.div`
    display: flex;
    margin-top: 80px; // 5rem = 80px
    align-items: center;
    margin-left: 288px; // 18rem = 288px
    gap: 32px; // 2rem = 32px

    @media (max-width: 768px) {
        margin-left: 32px; // 2rem = 32px
        flex-direction: column;
        gap: 16px; // 1rem = 16px
    }
`;

export const DivFil = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px; // 1rem = 16px
        font-size: 16px; // 1rem = 16px
        font-weight: 160px; // 10rem = 160px
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 64px; // 4rem = 64px
        width: 200px;

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const DivPesq = styled(DivFil)``;

export const But = styled.div`
    display: flex;
    margin-top: 32px; // 2rem = 32px

    button {
        width: 80px; // 5rem = 80px
        height: 32px; // 2rem = 32px
        align-items: center;
        padding: 5px 10px;
        border: unset;
        border-radius: 10px;
        color: #888888;
        z-index: 1;
        background: #ffffff;
        position: relative;
        font-size: 12px;
        box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
        transition: all 250ms;
        overflow: hidden;
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
    margin: 80px;
    align-items: center;
    height: 288px;
    width: 800px;
    margin-left: 288px;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 32px;
    position: relative;

    @media (max-width: 900px) {
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
        padding: 10px;
        height: auto;
        margin-top: 40px;
        margin-bottom: 60px;
    }
`;

export const ConteinerImagem = styled.img`
    max-width: 144px;
    height: auto;
    margin-left: 32px;
    margin-bottom: 80px;

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
        margin-bottom: 176px;
        margin-left: 16px;
        white-space: nowrap;

        @media (max-width: 900px) {
            margin: -10px 0;
            font-size: 18px;
            white-space: normal;
        }
    }
`;

export const TitulUM = styled.div`
    p {
        font-size: 16px;
        color: #101066;
        font-weight: 700;
        margin-left: -384px;
        margin-bottom: 96px;

        @media (max-width: 900px) {
            margin: -10px 30px;
        }
    }
`;

export const TituloSegundo = styled(TitulUM)``;

export const TituloTres = styled.div`
    h1 {
        font-size: 16px;
        margin-left: -416px;
        margin-top: 16px;

        @media (max-width: 900px) {
            display: none;
        }
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 16px;
        color: black;
        line-height: 1.3;
        margin-left: -448px;
        margin-top: 144px;

        @media (max-width: 900px) {
            display: none;
        }
    }
`;

export const ButaoVerMaisUm = styled.div`
    button {
        padding: 10px 22px;
        margin-left: -740px;
        margin-top: 160px;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;

        @media (max-width: 900px) {
            margin: -1px 0;
            padding: 10px 22px;
            position: absolute;
            top: 240px;
            left: 105px;
        }
    }
`;

export const ConteinerDois = styled(ConteinerUm)``;

export const ConteinerImagemD = styled(ConteinerImagem)``;

export const TituloD = styled(TituloUm)``;

export const TitulD = styled(TitulUM)``;

export const TituloS = styled(TitulUM)``;

export const TituloT = styled(TituloTres)``;

export const TextoU = styled(TextoUm)``;

export const ButaoVerMaisU = styled(ButaoVerMaisUm)``;
