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
    margin: 8px;
    margin-left: 140px; //afasta do canto
    padding: 10px 20px ;
    color: wheat;
    background-color: #7499E8;
    width: 120px;
    border-radius: 20px;
    
`;

export const Section = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 380px;
    width: 100%;
    max-width: 1082px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative; //ela cria uma relaçao entre tegs com display absolute
`; 

export const Conteinerimagem = styled.div`

    width: 26%;
    display: flex;
    justify-content:center ;
`;

export const Caixa = styled.div`
    font-size: 16px;
    flex-direction: column;
    display: flex;
    gap: 20px;
    width: 74%;
    h2{
        font-size: 25px;
        
    }
    p{
        font-size: 16px;
        
    }
    h1{
        font-size: 15px;
        
    }
    input {
    overflow: hidden;
    justify-content: space-between;
    width: (20% - 12px);
    padding: 5px;
    border: 3px solid #33B579;
    border-radius: 20px; //aredonda
    background-color: #33B44D;
    color: #f9f9f9;
    }
    
`;

export const Btndiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        margin: 30px;
        border: 3px solid #33B44D; 
        background-color: #33B44D; 
        color: #f9f9f9;
        font-size: 20px;
        border-radius: 30px; //aredonda
        margin-top: 10px;
    }  
`;

export const Tags = styled.div`
    display: flex;
    margin: 30px;
    gap: 40px; // espaço entre as tegs (so fuciona com display flex)

`;

export const Bolha = styled.div`
    position: relative; // ele deixa tudo dentro dele maleavel 
    display: flex;
    justify-content: center;
    align-items: center;
    

        
    & .fundo{
        object-fit: cover;
        max-height: 100vh;
        width: 400px;
        height: 400px;
        margin-right: 90px;
    }
    & .frente{
        position: absolute;
        width:  250px ;
        height: 250px ;
        margin-right: 200px;
    }

`;
export const Im = styled.img`
    width: 200px;
    height: 200px;

`;
export const Corpo = styled.div`
    align-items: baseline;
    font-size: 20px;
    justify-content: space-between;
    `;


