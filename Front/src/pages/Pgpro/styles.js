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

export const Cabecario = styled.div`
    display: flex;
    margin-top: 80px;
    align-items: center;
    margin-left: 288px;
    gap: 32px;
`;

export const DivFil = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 160px;
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 64px;
        width: 200px;
    }
`;

export const DivPesq = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 16px;
        font-size: 16px;
        font-weight: 160px;
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 64px;
        width: 200px;
    }
`;

export const But = styled.div`
    display: flex;
    margin-top: 32px;

    button {
        width: 80px;
        height: 32px;
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
    margin: 80px;
    align-items: center;
    height: 288px;
    width: 720px;
    margin-left: 288px;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
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
        white-space: nowrap;
        margin-left: -395.2px;
        margin-bottom: 96px;
    }
`;

export const TituloSegundo = styled.div`
    p {
        font-size: 16px;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -160px;
        margin-bottom: 96px;
    }
`;

export const TituloTres = styled.div`
    h1 {
        font-size: 16px;
        margin-left: -432px;
        margin-top: 16px;
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 15px;
        color: black;
        line-height: 1.3;
        margin-left: -450px;
        margin-top: 144px;
    }
`;

export const ButaoVerMaisUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -660px;
        margin-top: 160px;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;

// Segunda parte do guia

export const ConteinerDois = styled.div`
    display: flex;
    margin: 80px;
    align-items: center;
    height: 288px;
    width: 720px;
    margin-left: 288px;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagemD = styled.img`
    max-width: 144px;
    height: auto;
    margin-left: 32px;
    margin-bottom: 80px;
`;

export const TituloD = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 176px;
        margin-left: 16px;
        white-space: nowrap;
    }
`;

export const TitulD = styled.div`
    p {
        font-size: 16px;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -408px;
        margin-bottom: 96px;
    }
`;

export const TituloS = styled.div`
    p {
        font-size: 16px;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -176px;
        margin-bottom: 96px;
    }
`;

export const TituloT = styled.div`
    h1 {
        font-size: 16px;
        margin-left: -448px;
        margin-top: 16px;
    }
`;

export const TextoU = styled.div`
    p {
        font-size: 16px;
        color: black;
        line-height: 1.3;
        margin-left: -464px;
        margin-top: 144px;
    }
`;

export const ButaoVerMaisU = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -664px;
        margin-top: 192px;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;
