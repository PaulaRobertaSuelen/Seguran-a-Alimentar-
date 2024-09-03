
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
    margin-top: 5rem;
    align-items: center;
    margin-left: 18rem;
    gap: 2rem;

    @media (max-width: 768px) {
        margin-left: 2rem;
        flex-direction: column;
        gap: 1rem;
    }
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

        @media (max-width: 768px) {
            width: 100%;
        }
    }
`;

export const DivPesq = styled(DivFil)``;

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

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin: 0rem;
        padding: 1rem;
        height: auto;
    }
`;

export const ConteinerImagem = styled.img`
    max-width: 9rem;
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
            margin: 1rem 0;
            font-size: 18px;
            white-space: normal;
        }
    }
`;

export const TitulUM = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        margin-left: -24rem;
        margin-bottom: 6rem;
        
        @media (max-width: 768px) {
            margin: 1rem 0;
            white-space: normal;
        }
    }
`;

export const TituloSegundo = styled(TitulUM)``;

export const TituloTres = styled.div`
    h1 {
        font-size: 1rem;
        margin-left: -26rem;
        margin-top: 1rem;

        @media (max-width: 768px) {
            margin-left: 0rem;
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
        }
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

        @media (max-width: 768px) {
            margin-left: 0;
            margin-top: 1rem;
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
