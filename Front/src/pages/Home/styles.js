import styled from 'styled-components';
import OndasComeco from '../../assets/ondas-do-comeco.png';

export const OndasEstilo = styled.div`
    position: absolute;
    width: 100%;
    height: 137%;
    background-image: url(${OndasComeco});
    background-size: cover;
    z-index: -1;
`;

export const BodyUm = styled.div`
    margin: 0 auto;
    width: calc(100% - 500px);
    max-width: 1200px;
`;

export const BackgroundContainer = styled.div`
    margin-top: 13%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const ComendoLegumes = styled.img`
    width: 450px;
    height: 310px;
`;

export const TituloUm = styled.div`
    color: #101066;
    text-align: left;
    h1{
        font-size: 36px;
        font-weight: bold;
    }
    h2{
        font-size: 20px;
        font-weight: normal;
        margin-top: 10%;
    }
    width: 40%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(-60px);
`;

export const NosConheca = styled.div`
    margin-top: 16%;
    color: #101066;
    h1{
        font-size: 32px;
    }
    h2{
        font-size: 20px;
    }
    p{
        font-size: 15px;
        margin-top: 2%;
    }
`;

export const QuadroConhecer = styled.div`
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextosConhecer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
    text-align: left;
    height: 150px;
    width: 500px;
`;

export const Barra = styled.div`
    background-color: #101066;
    width: 80px;
    border-radius: 20px;
`;

export const Descricao = styled.div`
    flex-direction: column;
    padding: 10px;
`;

export const Mae = styled.img`
    height: 350px;
    width: 320px;
`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 15%;
    width: 80%;
    max-width: 560px;
    height: 315px;

    @media (max-width: 768px) {
    width: 100%;
    height: auto;
    }
`;

export const OndasMeio = styled.img`
    position: absolute;
    width: 100%;
    transform: translateY(-60%);
    z-index: -1;
`;

export const BodyDois = styled.div`
    background-color: #101066;
    margin-top: 17%;
`;

export const ConteudoDois = styled.div`
    margin-left: 250px;
    margin-right: 250px;
    h1{
        color: white;
        font-size: 32;
        margin-bottom: 2%;
    }
`;

export const ComoFunciona = styled.div`
    display: flex;
    flex-direction: row;
    background-color: white;
    border-radius: 20px;
    text-align: left;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    box-sizing: border-box;
`;

export const TextoFunciona = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    text-align: left;
    p{
        color: #101066;
    }
    span{
        font-weight: bold;
    }
    gap: 10px;
`;

export const BarraDois = styled.div`
    background-color: #7499E8;
    width: 40px;
    border-radius: 20px;
`;

export const FotoComputador = styled.img`
    margin-top: 2%;
    width: 100%;
    max-width: 100%;
    height: auto;
    display: block;
`;

export const Compromisso = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
`;

export const ViMiId = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;
`;

export const ViMiIdConteudo = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #4377FF, #163882);
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
    align-items: center;
    width: 250px;
    box-sizing: border-box;
    color: white;
    h2{
        font-size: 32px;
        justify-self: center;
        font-weight: bold;
    }
    p{
        font-size: 15px;
        font-weight: bold;
    }
`;

export const Visao = styled.img`
    height: 100px;
    width: 100px;
`;

export const Missao = styled.img`
    height: 100px;
    width: 100px;
`;

export const Ideal = styled.img`
    height: 100px;
    width: 100px;
`;

export const DuvidasFrequentes = styled.div`
    h1{
        color: white;
        font-size: 32;
        font-weight: bold;
    }
    width: 100%;
`;

export const FaqContainer = styled.div`
    background-color: #D9D9D9;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    margin-bottom: 5%;
`;

export const FaqItem = styled.div`
    margin-bottom: 10px;
    cursor: pointer;
    background-color: white;
    padding: 10px;
    border-radius: 20px;
    transition: background-color 0.3s;
    color: #101066;
    font-size: 15px;
    font-weight: bold;

    &:hover {
    background-color: #DEEDF5;
    }
`;

export const FaqAnswer = styled.div`
    display: ${props => (props.show ? 'block' : 'none')};
    padding: 10px;
    background-color: #f0f0f0;
    border-left: 3px solid #007bff;
    border-radius: 5px;
    margin-top: 5px;
`;


export const OndasFinal = styled.img`
    width: 100%;
`;