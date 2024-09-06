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
    margin-top: 70px;
    align-items: center;
    margin-left: 450px;

    @media (max-width: 768px) {
        margin-left: -30px;
        margin-top: 20px;
        flex-direction: column;
        gap: -30px;

        @media (max-width: 1024px) {
        margin-left: 200px;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        margin-top: 20px;
        flex-direction: column;
        gap: 20px; 
    }
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


// Estilos para o container do resultado
export const Conteine = styled.div`
  width: 430px;
  padding: 80px;
  margin: 150px auto 350px auto; 
  background-color: #fafafa;
  border: 1px solid #ddd;
  border-radius: 10px;
  text-align: center;

  @media (max-width: 1024px) {
    width: 80%;
    padding: 40px;
    margin-top: 100px;
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    width: 90%;
    padding: 20px;
    margin-top: 50px;
    margin-bottom: 100px;
  }

  @media (max-width: 480px) {
    width: 95%;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 50px;
  }

  p {
    font-size: 18px;
    color: #333;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;




