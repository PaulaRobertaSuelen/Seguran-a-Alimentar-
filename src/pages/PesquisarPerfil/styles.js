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
        margin-top: 10px;
        padding: 5px;
        border: 1px solid #ccc;
        border-radius: 10px;
        }
    }
        /* butao de Buscar */
    button {
        border: 2px solid #33B44D;
        background-color: rgb( #DEEDF5);
        border-radius: 40px;
        font-size: 20px;
        margin-top: 50px;
        padding: 6px;
    }

`;
export const Resultado = styled.div`
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
    flex-direction: column;
    display: flex;
    margin: 10px;
    gap: -10px;
    width: 74%;
    

    h2{
        font-size: 32px;
        
    }
    
    p{
        font-size: 17px;
        
    }
    h1{
        font-size: 18px;
        
    }
    
`;

export const Btndiv = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
    button {
        margin: 10px;
        border: 3px solid #33B44D; 
        background-color: #33B44D; 
        color: #f9f9f9;
        font-size: 20px;
        border-radius: 30px; //aredonda
        margin-top: 10px;
        margin-left: -200PX;
    }  
`;

export const Tags = styled.div`
    display: flex;
    gap: 50px; // espaço entre as tegs (so fuciona com display flex) 
`;

export const Comp = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #33B579;
    color: #ffffff;
    border: 10px solid #33B579; //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 30px; //Comprimeto do componente 
    text-align: center; //Centralizar o texto 
`;

    export const Sens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #33B579;
    color: #ffffff;
    border: 10px solid #33B579;  //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 30px; //Comprimeto do componente 
    text-align: center;  //Centralizar o texto 
`;


export const Im = styled.img`
    width: 200px;
    height: 200px;


`;
