import styled from 'styled-components';
import OndasDoComeco from '../../assets/ondas-do-comeco.png';

export const OndasEstilo = styled.div`
    position: absolute;
    width: 100%;
    height: 140vh;
    background-image: url(${OndasDoComeco});
    background-size: cover;
    z-index: -1;
`;

export const Cabercario = styled.div`
    display: flex;
    margin-top: 30px;
    align-items: center;
    gap: 32px;
    margin-left: 300px;

    @media (max-width: 900px) {
        flex-direction: column;
        gap: 10px;
    }
`;

export const DivFil = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 1000;
        text-align: left;
    }

    input {
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 40px;
        width: 200px;
    }
`;

export const DivPesq = styled(DivFil)``;

export const But = styled.div`
    display: flex;
    margin-top: 32px;

    button {
        width: 80px;
        height: 32px;
        align-items: center;
        padding: 8px 16px;
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
`;

export const ConteinerImagem = styled.img`
    max-width: 144px;
    height: auto;
    margin-left: 32px;
    margin-bottom: 80px;
`;

export const TituloUm = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px;
        margin-left: 16px;
        white-space: nowrap;
    }
`;

export const TitulUM = styled.div`
    p {
        font-size: 16px;
        color: #101066;
        font-weight: 700;
        margin-left: -384px;
        margin-bottom: 96px;
    }
`;

export const TituloSegundo = styled(TitulUM)``;

export const TituloTres = styled.div`
    h1 {
        font-size: 16px;
        margin-left: -416px;
        margin-top: 16px;
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 16px;
        color: black;
        line-height: 1.3;
        margin-left: -448px;
        margin-top: 144px;
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
