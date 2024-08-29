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
    background-size: cover; //
    background-position: 'center';
    height: 30vh;
    background-repeat: no-repeat; //para ivita repetiçao
    justify-content: space-around;
    align-items: center;
    padding: 150px;

    div {
        display: flex;
        flex-direction: column;
        margin-right: 10px;
}
        input {
            margin: 10px;
            border: none;
            padding: 10px;
            font-size: 1rem;
            width: 14em;
            border-radius: 20rem;
            color: black;
            cursor: pointer;
}


        //butao de buscar
button {
        padding: 10px 20px;
        border: unset;
        border-radius: 1rem;
        color: #888888;
        z-index: 1;
        background: #ffffff;
        position: relative;
        font-weight: 1000;
        font-size: 1rem;
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
        border-radius: 1rem;
        background-color: #33B44D;
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
  //fim do butao e do cabecario  


`;

export const ConteinerUm = styled.div`
    display: flex;
    margin: 20px;
    align-items: center;
    height: 18rem;
    width: 50rem;
    margin-left: 18rem;
    border-radius: 20px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImagem = styled.img`
    max-width: 9rem;
    height: auto;
    margin-left: 2rem;
    margin-bottom: 5rem;
`;

export const TituloUm = styled.div`
    h2 {
        display: flex;
        font-size: 2rem;
        width: 100%;
        margin-bottom: 14rem;
        margin-left: 1rem;
        white-space: nowrap;
    }
`;

export const TitulUM = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -32rem;
        margin-bottom: 6rem;
    }
`;

export const TituloSegundo = styled.div`
    p {
        font-size: 1rem;
        color: #101066;
        font-weight: 700;
        white-space: nowrap;
        margin-left: -17rem;
        margin-bottom: 6rem;
    }
`;

export const TituloTres = styled.div`
    h1 {
        font-size: 1rem;
        margin-left: -34rem;
        margin-top: 1rem;
    }
`;

export const TextoUm= styled.div`
    p {
        font-size: 1rem;
        color: black;
        line-height: 1.3;
        margin-left: -35rem;
        margin-top: 9rem;
    }
`;

export const ButaoVerMaisUm = styled.div`
    button {
        padding: 10px 20px;
        margin-left: -47rem;
        margin-top: 10rem;
        background-color: #33b44d;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
    }
`;


        //segunda parte do guia

        export const ConteinerDois = styled.div`
        display: flex;
        margin: 70px;
        align-items: center;
        height: 18rem;
        width: 50rem;
        margin-left: 18rem;
        border-radius: 20px;
        background-color: #f9f9f9;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        gap: 20px;
        position: relative;
    `;
    
    export const ConteinerImagemD = styled.img`
        max-width: 9rem;
        height: auto;
        margin-left: 2rem;
        margin-bottom: 5rem;
    `;
    
    export const TituloD = styled.div`
        h2 {
            display: flex;
            font-size: 2rem;
            width: 100%;
            margin-bottom: 14rem;
            margin-left: 1rem;
            white-space: nowrap;
        }
    `;
    
    export const TitulD = styled.div`
        p {
            font-size: 1rem;
            color: #101066;
            font-weight: 700;
            white-space: nowrap;
            margin-left: -33rem;
            margin-bottom: 6rem;
        }
    `;
    
    export const TituloS = styled.div`
        p {
            font-size: 1rem;
            color: #101066;
            font-weight: 700;
            white-space: nowrap;
            margin-left: -18rem;
            margin-bottom: 6rem;
        }
    `;
    
    export const TituloT = styled.div`
        h1 {
            font-size: 1rem;
            margin-left: -36rem;
            margin-top: 1rem;
        }
    `;
    
    export const TextoU= styled.div`
        p {
            font-size: 1rem;
            color: black;
            line-height: 1rem;
            margin-left: -36rem;
            margin-top: 9rem;
        }
    `;
    
    export const ButaoVerMaisU = styled.div`
        button {
            padding: 10px 20px;
            margin-left: -48rem;
            margin-top: 11rem;
            background-color: #33b44d;
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
        }
    `;



        