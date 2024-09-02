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
    margin-top: 5rem;
    align-items: center;
    margin-left: 18rem;
    gap: 2rem;
`;

export const DivFil = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 10rem;
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4rem;
        width: 200px;
    }
`;

export const DivPesq = styled.div`
    display: flex;
    flex-direction: column;

    h1 {
        margin-bottom: 1rem;
        font-size: 1rem;
        font-weight: 10rem;
        text-align: left;
    }

    input {
        padding: 5px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4rem;
        width: 200px;
    }
`;

export const But = styled.div`
    display: flex;
    margin-top: 2rem;

    button {
        width: 5rem;
        height: 2rem;
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
    margin: 5rem;
    align-items: center;
    height: 18rem;
    width: 50rem;
    margin-left: 18rem;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagem = styled.img`
    max-width: 9rem;
    height: auto;
    margin-left: 2rem;
    margin-bottom: 5rem;
`;

export const TituloUm = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 11rem;
        margin-left: 1rem;
        white-space: nowrap;
    }
`;

export const TitulUM = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -24.7rem;
        margin-bottom: 6rem;
    }
`;

export const TituloSegundo = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -10rem;
        margin-bottom: 6rem;
    }
`;

export const TituloTres = styled.div`
    h1 {
        font-size: 1rem;
        margin-left: -27rem;
        margin-top: 1rem;
    }
`;

export const TextoUm = styled.div`
    p {
        font-size: 1rem;
        color: black;
        line-height: 1.3;
        margin-left: -28rem;
        margin-top: 9rem;
    }
`;

export const ButaoVerMaisUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -46rem;
        margin-top: 10rem;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;

//segunda parte do guia

export const ConteinerDois = styled.div`
    display: flex;
    margin: 5rem;
    align-items: center;
    height: 18rem;
    width: 50rem;
    margin-left: 18rem;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagemD = styled.img`
    max-width: 9rem;
    height: auto;
    margin-left: 2rem;
    margin-bottom: 5rem;
`;

export const TituloD = styled.div`
    h1 {
        display: flex;
        font-size: 24px;
        width: 100%;
        margin-bottom: 11rem;
        margin-left: 1rem;
        white-space: nowrap;
    }
`;

export const TitulD = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -25.5rem;
        margin-bottom: 6rem;
    }
`;

export const TituloS = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -11rem;
        margin-bottom: 6rem;
    }
`;

export const TituloT = styled.div`
    h1 {
        font-size: 1rem;
        margin-left: -28rem;
        margin-top: 1rem;
    }
`;

export const TextoU = styled.div`
    p {
        font-size: 1rem;
        color: black;
        line-height: 1.3;
        margin-left: -29rem;
        margin-top: 9rem;
    }
`;

export const ButaoVerMaisU = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -46rem;
        margin-top: 12rem;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;
