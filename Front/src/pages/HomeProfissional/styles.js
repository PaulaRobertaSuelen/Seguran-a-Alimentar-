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
    width: calc(100% - 500px); /* Mantém as margens de 250px de cada lado */
    max-width: 1200px;

    @media (max-width: 900px) {
        width: calc(100% - 70px);
    }

    @media (max-width: 480px) {
        width: calc(100% - 50px);
    }

`;

export const BackgroundContainer = styled.div`
    margin-top: 13%;
    gap: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
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

`;

export const ComendoLegumes = styled.img`
    width: 450px;
    height: 310px;

    @media (max-width: 900px) {
        width: 300px;
        height: 207px;
    }
`;

export const TituloUm = styled.div`
    color: #101066;
    text-align: left;
    h1 {
        font-size: 36px;
        font-weight: bold;
    }
    h2 {
        font-size: 20px;
        font-weight: normal;
    }
    width: 40%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(-60px);

    @media (max-width:900px) {
        h1 {
        font-size: 24px;
        font-weight: bold;
    }
    h2 {
        font-size: 14px;
        font-weight: normal;
        margin-top: 3%;
    }
    width: 100%;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transform: translateY(-10px);
    }
`;

export const NosConheca = styled.div`
    margin-top: 16%;
    color: #101066;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
        margin-top: 2%;
    }

    @media (max-width: 900px){
        margin-top: 10%;
        h1 {
            font-size: 18px;
        }
        h2 {
            font-size: 12px;
        }
        p {
            font-size: 10px;
            margin-top: 2%;
        }
    }
`;

export const QuadroConhecer = styled.div`
    margin-top: 2%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 900px){
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
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

    @media (max-width: 900px) {
        height: 100px;
        width: 330px;
        margin-top: 20px;
    }
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

    @media (max-width: 900px){
        display: none;
    }
`;

export const VideoContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 0 auto;
    margin-top: 15%;
    width: 100%;
    max-width: 650px;
    height: 380px;

    @media (max-width: 900px) {
        width: 80%;    
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
    margin: 0 auto;
    width: calc(100% - 500px);
    h1 {
        color: white;
        font-size: 26px;
        margin-bottom: 2%;
    }

    @media (max-width: 900px) {
        width: calc(100% - 70px);
        h1 {
        color: white;
        font-size: 18px;
        margin-bottom: 3%;
        }
    }

    @media (max-width: 480px) {
        width: calc(100% - 50px);
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
    p {
        color: #101066;
        font-size: 14px;
    }
    span {
        font-weight: bold;
    }
    gap: 10px;

    @media (max-width: 900px) {
        p{
            font-size: 10px;
        }
    }
`;

export const BarraDois = styled.div`
    background-color: #7499e8;
    width: 35px;
    border-radius: 20px;

    @media (max-width: 900px) {
        width: 70px;
    }
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
    h1{
        font-size: 26px;
    }

    @media (max-width: 900px) {
        h1{
            font-size: 18px;
        }
    }
`;

export const ViMiId = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10%;

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
`;

export const ViMiIdConteudo = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(to bottom, #4377ff, #163882);
    border-radius: 20px;
    padding: 10px;
    gap: 10px;
    align-items: center;
    width: 220px;
    box-sizing: border-box;
    color: white;
    h2 {
        font-size: 18px;
        justify-self: center;
        font-weight: bold;
    }
    p {
        font-size: 14px;
        font-weight: normal;
    }

    @media (max-width: 900px) {
        h2{
            font-size: 14px;
        }
        p{
            font-size: 10px;
        }
    }
`;

export const Visao = styled.img`
    height: 38%;
    width: 44%;

    @media (max-width: 900px) {
        height: 30%;
        width: 30%;
    }
`;

export const Missao = styled.img`
    height: 38%;
    width: 44%;

    @media (max-width: 900px) {
        height: 30%;
        width: 30%;
    }
`;

export const Ideal = styled.img`
    height: 38%;
    width: 44%;

    @media (max-width: 900px) {
        height: 30%;
        width: 30%;
    }
`;

export const DuvidasFrequentes = styled.div`
    h1 {
        color: white;
        font-size: 26px;
        font-weight: bold;
            
    }
    width: 100%;
    padding: 20px;
    margin-left: auto;

    @media (max-width: 900px) {
        h1{
            font-size: 18px;
        }
        padding: 0px;
        padding-bottom: 20px;
    }
`;

export const FaqContainer = styled.div`
    background-color: #d9d9d9;
    border-radius: 20px;
    padding: 10px;
    width: 100%;
    margin-bottom: 5%;
    margin-left: '20px';
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    &:hover {
        background-color: #deedf5;
    }

    @media (max-width: 900px) {
        font-size: 12px;
    }
`;

export const FaqAnswer = styled.div`
    display: ${(props) => (props.show ? 'block' : 'none')};
    padding: 10px;
    background-color: #f0f0f0;
    border-left: 3px solid #007bff;
    border-radius: 5px;
    margin-top: 5px;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        font-size: 12px;
    }
`;

export const footer = styled.img`
    width: 100%;
    margin-bottom: 10px;
`;
