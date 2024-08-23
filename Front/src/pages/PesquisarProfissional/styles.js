import styled from 'styled-components';


export const Cabercario = styled.div`
    display: flex;
    background-size: cover; //
    background-position: "center";
    height: 30vh;
    background-repeat: no-repeat; //para ivita repetiçao
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    ;

    div {
        display: flex;
        flex-direction: column;
        margin-right: 20px;

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
    padding: 1.3em 3em;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #fff;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    
}

button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

button:active {
    transform: translateY(-1px);
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
    button {
        margin: 20px;
    padding: 1.3em 3em;
    font-size: 10px;
    margin-left: -200PX;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #DEEDF5;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

button:active {
    transform: translateY(-1px);
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
    border: 10px solid #101066; //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 10px; //Comprimeto do componente 
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
    border: 10px solid #101066;  //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
    height: 30px; //Comprimeto do componente 
    text-align: center;  //Centralizar o texto 
`;

export const Im = styled.img`
    width: 200px;
    height: 200px;
`;





//segunda tela de Styles do proficional 




export const SectionDois = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerDois = styled.div`
    display: flex;
    margin: 30px;
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
        margin: 20px;
    padding: 1.3em 3em;
    font-size: 10px;
    margin-left: -200PX;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #DEEDF5;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

button:active {
    transform: translateY(-1px);
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
    width: 200px;
    height: 200px;
`;




//  terceira tela styles do proficional 



export const SectionTres = styled.section`
width: 100%;
display: flex;
justify-content: center;
`;

export const ContainerTres = styled.div`
    display: flex;
    margin: 30px;
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
    margin: 20px;
    padding: 1.3em 3em;
    font-size: 10px;
    margin-left: -200PX;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 500;
    color: #000;
    background-color: #DEEDF5;
    border: none;
    border-radius: 45px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
}

button:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
}

button:active {
    transform: translateY(-1px);
}

`;

export const TagsTres = styled.div`
    display: flex;
     gap: 10px; // espaço entre as tegs (so fuciona com display flex) 
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
    border: 10px solid ; //Cor da borda 
    border-radius: 20px;  //Arredondamento da borda 
    width: 200px;  //Largura do componente 
     height: 30px; //Comprimeto do componente 
    text-align: center; //Centralizar o texto 
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
     border: 10px solid #101066;  //Cor da borda 
     border-radius: 20px;  //Arredondamento da borda 
     width: 200px;  //Largura do componente 
     height: 30px; //Comprimeto do componente 
   text-align: center;  //Centralizar o texto 
`;

    export const ImTres = styled.img`
    width: 200px;
    height: 200px;
`;