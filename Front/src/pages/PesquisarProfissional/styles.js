import styled from 'styled-components';


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
        /* butao de Buscar */
button {
            
            font-weight: bold;
            color: white;
            font-size: 15px;
            border-radius: 1rem;
            cursor: pointer;
            width: 95.02px;
            height: 42.66px;
            border: none;
            background-color: #33B44D;
            display: flex;
            margin: 10px;
            justify-content: center;
            align-items: center;

}
`;
export const Section = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const Container = styled.div`
    display: flex;
    margin: 50px;
    align-items: center;
    height: 300px;
    width: 70%;
    max-width: -1082px;
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
        font-size: 14px;
        
    }
    h1{
        font-size: 18px;
        
    }
    
`;

export const Btndiv = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;

        //butao ver perfil

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
            margin-left: -145%;
            margin-top: -60px;
}
`;

export const Tags = styled.div`
    display: flex;
    gap: 10px; // espaço entre as tegs (so fuciona com display flex) 
`;

export const Comp = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border: 10px solid #101066; 
    border-radius: 20px; 
    width: 200px;  
    height: 10px;  
    text-align: center; //Centralizar o texto 
`;

    export const Sens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border: 10px solid #101066; 
    border-radius: 20px;  
    width: 200px;  
    height: 30px;  
    text-align: center;  //Centralizar o texto 
`;

export const Im = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -90px;
`;





//segunda tela de Styles do proficional 




export const SectionDois = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerDois = styled.div`
    display: flex;
    margin: 50px;
    align-items: center;
    height: 300px;
    width: 70%;
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
    margin-left: -145%;
    margin-top: -60px;
}

`;

export const TagsDois = styled.div`
    display: flex;
    gap: 10px; // espaço entre as tegs (so fuciona com display flex) 
`;

export const CompDois = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border: 10px solid #101066; //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 30px; //Comprimeto do componente 
    text-align: center; //Centralizar o texto 
`;

    export const SensDois = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border: 10px solid #101066;  //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 30px; //Comprimeto do componente 
    text-align: center;  //Centralizar o texto 
`;


export const ImDois = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -90px;
`;




//  terceira tela styles do proficional 



export const SectionTres = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerTres = styled.div`
    display: flex;
    margin: 50px;
    align-items: center;
    height: 300px;
    width: 70%;
    max-width: -1082px;
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
  margin-left: -145%;
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
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color: beige ;
    color: #ffffff;
    border: 10px solid ; 
    border-radius: 20px;   
    width: 200px;   
    height: 30px; 
    text-align: center; 
`;

    export const SensTres = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-right: 20px;
    padding: 10px;
    background-color:  #101066;
    color: #ffffff;
    border: 10px solid #101066; 
    border-radius: 20px;  
    width: 200px;  
    height: 30px; 
    text-align: center;  
`;
    export const ImTres = styled.img`
    width: 150px;
    height: 150px;
    margin-top: -90px;
`;