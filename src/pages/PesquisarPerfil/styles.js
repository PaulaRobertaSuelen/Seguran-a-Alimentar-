import styled from 'styled-components';

export const Cabercario = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 20px;

    div {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

        input {
        margin-top: 5px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        }
    }
        /* butao de Buscar */
    button {
        border: 2px solid #33B44D;
        background-color: rgb( #DEEDF5);
        border-radius: 10px;
        font-size: 20px;
        margin-top: 30px;
        padding: 5px;
    }

`;
export const Resultado = styled.p`
    margin-left: 140px; //afasta do canto
    padding: 10px 20px ;
    color: wheat;
    background-color: #7499E8;
    width: 120px;
    border-radius: 20px;
    
`;
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
`; 
export const Caixa = styled.div`
    width: 80%;
    padding: 20px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    h2{
        font-size: 24px;
        margin-bottom: 10px;
        margin-left: 300px
    }
    p{
        font-size: 24px;
        margin-bottom: 10px;
        margin-left: 400px;
    }
    h1{
        font-size: 24px;
        margin-bottom: 10px;
        margin-left: 300px
    }
    input {
    width: (20% - 12px);
    padding: 5px;
    border: 1px solid #33B579;
    border-radius: 10px;
    background-color: #33B579;
    justify-content: space-between;
    

    

    }
    button {
        border: 2px solid #33B44D; 
        background-color: #33B44D; 
        color: #f9f9f9;
        font-size: 20px;
        border-radius: 20px; //aredonda
        margin-left: 600px;
        padding: 10px;
    }

    
`;

export const Im = styled.img`
    width: 14rem;

`;
export const Corpo = styled.div`
    align-items: baseline;
    font-size: 20px;
    justify-content: space-between;
    `;


