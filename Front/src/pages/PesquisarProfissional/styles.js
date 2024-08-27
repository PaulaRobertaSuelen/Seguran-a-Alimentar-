import styled from 'styled-components';
import OndasDoComeco from '../../assets/ondas-do-comeco.png';

export const OndasEstilo = styled.div`
    position: absolute;
    width: 100%;
    height: 110%;
    background-image: url(${OndasDoComeco});
    background-size: cover;
    z-index: -1;
`;

export const Cabercario = styled.div`
    display: flex;
    background-size: cover; 
    background-position: "center";
    height: 30vh;
    justify-content: center;
    align-items: center;
    padding: 20px;
    font-size: 25px;

    
    ;

    div {
        display: flex;
        flex-direction: column;
        margin-right: 20px;
        align-items: baseline;
    input {
        margin: 20px;
        border: none;
        padding: 10px;
        font-size: 1rem;
        width: 14em;
        border-radius: 20rem;
        color: black;
        cursor: pointer;
        }
    }
        /* botão de Buscar */

    button {
        padding: 15px 25px;
        border: unset;
        border-radius: 10px;
        color: black;
        z-index: 1;
        width: 100px;
        height: 40px;
        margin: 30px;
        margin-top: 60px;
        background: #ffffff;
        position: relative;
        font-size: 14px;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms;
        overflow: hidden;
    }

    button::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 0;
        border-radius: 15px;
        background-color: #33b44d;
        z-index: -1;
        -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
        transition: all 250ms
    }

    button:hover {
        color: #e8e8e8;
    }

    button:hover::before {
        width: 100%;
    }
// fim do botao e fim do cabeçario
`;

//segunda tela de Styles do profissional 


export const SectionDois = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerDois = styled.div`
    display: flex;
    margin: 40px;
    align-items: center;
    height: 300%;
    width: 60%;
    max-width: -1082px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;
export const ConteinerIm = styled.div`
    width: 26%;
    display: flex;
    justify-content:center ;
`;

export const CaixaDois = styled.div`
    flex-direction: column;
    display: flex;
    margin: 10px;
    width: 74%;
    

    h2{
        font-size: 32px;
    }
    
    p{
        font-size: 17px;
    
    }
    h1{
        font-size: 18px;
        margin-top: -30px;
    }
    
`;

export const BtndivDois = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
    button {
        font-weight: bold;
        color: white;
        font-size: 15px;
        border-radius: 1rem;
        cursor: pointer;
        width: 100px;
        height: 40px;
        border: none;
        background-color: #33B44D;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -140%;
        margin-top: -60px;
}

`;

export const TagsDois = styled.div`
    display: flex;
    gap: 10px; // espaço entre as tags (só fuciona com display flex) 
`;

export const CompDois = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    padding: 10%;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 10px;
    font-weight: 900;
    color: #101066;
    width: -20%;  
    height: 5vh;    
    text-align: center;
`;

    export const SensDois = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    padding: 10%;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 10px;
    font-weight: 900;
    color: #101066;
    width: 20%;  
    height: 5vh;    
    text-align: center; 
`;


export const ImDois = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -90px;
`;




//  terceira tela styles do profissional 



export const SectionTres = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerTres = styled.div`
    display: flex;
    margin: 0px;
    align-items: center;
    height: 300%;
    width: 60%;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;

`;
export const ConteinerImTres = styled.div`
    width: 26%;
    display: flex;
    justify-content:center ;
`;

export const CaixaTres = styled.div`
    flex-direction: column;
    display: flex;
    margin: 10px;
    width: 74%;
    

    h2{
        font-size: 32px;
        
    }
    
    p{
        font-size: 17px;
        
    }
    h1{
        font-size: 18px;
        margin-top: -30px;
    }
    
`;

export const BtndivTres = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;

    button {
        font-weight: bold;
        color: white;
        border-radius: 1rem;
        cursor: pointer;
        width: 100px;
        height: 40px;
        border: none;
        font-size: 13px;
        background-color: #33B44D;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -140%;
        margin-top: -60px;
}
`;

export const TagsTres = styled.div`
    display: flex;
    gap: 10px; 
`;

export const CompTres = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    padding: 10%;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 10px;
    font-weight: 900;
    color: #101066;
    width: -20%;  
    height: vh;    
    text-align: center;
`;

    export const SensTres = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    padding: 10%;
    justify-content: center;
    align-items: center;
    margin: 40px;
    padding: 10px;
    font-weight: 900;
    color: #101066;
    width: 20%;  
    height: 5vh;    
    text-align: center; 
`;
    export const ImTres = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -90px;
`;

