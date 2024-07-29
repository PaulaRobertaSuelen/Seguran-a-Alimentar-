import styled from "styled-components";
import ImagemDeFundo from "../../assets/menina-comendo.jpg"
import Icon1 from "../../assets/svg/blob1.svg"
import Icon2 from "../../assets/svg/blob2.svg"
import Icon3 from "../../assets/svg/blob3.svg"


// ESTILIZANDO A COR DE FUNDO GERAL DA PÁGINA E AS MARGENS PARA DEIXAR O CONTEÚDO MAIS NO MEIO DA PÁGINA
export const Body = styled.div`
    background-color: #DEEDF5;
    margin-left: 150px;
    margin-right: 150px;
`

// ESTILIZANDO A PARTE DA IMAGEM DE FUNDO, LOGO, TÍTULO E BOTÃO DE "SAIBA MAIS"

export const BackgroundContainer = styled.div`
    position: relative;
    width: 100%;
    height: 50vh;
    background-image: url(${ImagemDeFundo});
    background-size: cover;
    background-position: center;
`

export const OverlayContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 2%;
    margin-right: 10%;
    height: 100%;
`
export const Logo = styled.div`
    margin-bottom: 20px;
`
export const TituloEBotao = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TituloUm = styled.div`
    background-color: rgba(68, 178, 240, 0.6);
    color: white;
    text-align: center;
    border-radius: 20px;
    padding: 10px;
`

export const BotaoSaibaMais = styled.button`
    margin-top: 3%;
    border-radius: 5px;
    justify-self: center;
    background-color: #33B44D;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 10px;
`


// ESTILIZANDO A PARTE DO "IREMOS TE AJUDAR"

export const IremosAjudar = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`

export const TituloIremosTeAjudar = styled.div`
    align-items: center;
    text-align: center;
    color: #44B2F0;
    margin-bottom: 10px;
`

export const TextoDeAjuda = styled.div`
    justify-content: left;
    margin-left: 20%;
    margin-right: 20%;
    span{
        color: #44b2f0;
        font-weight: bold;
    }
`

export const BotaoQueroComecar = styled.button`
    margin-top: 3%;
    border-radius: 5px;
    align-self: center;
    background-color: #33B44D;
    color: white;
    font-weight: bold;
    border: none;
    cursor: pointer;
    text-align: center;
    padding: 10px;
`

// ESTILIZANDO A PARTE DO "COMO FUNCIONA?"

export const ComoFunciona = styled.div`
    
`

export const TituloComoFunciona = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const PassoAPasso = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Passo = styled.div`
    position: relative;
    height: 50vh;
    width: 50vh;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    color: black;
    align-items: center;
    text-align: center;
    padding: 10px;
`

export const PassoUm = styled(Passo)`
    background-image: url(${Icon1});
`

export const PassoDois = styled(Passo)`
    background-image: url(${Icon2});
`

export const PassoTres = styled(Passo)`
    background-image: url(${Icon3});
`

export const TextoPasso = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: black;
    font-weight: bolder;
    h1{
        margin-bottom: 10px;
    }
    p{
        margin-top: 0;
    }
`


// ESTILIZANDO A PARTE "NUTRIÇÃO É PARA TODOS"

export const NutricaoParaTodos = styled.div`
    margin-top: 10%;
    margin-bottom: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const NutricaoTitulo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    h1{
        color: #44B2F0;
        margin: 0;
    }
    p{
        margin-left: 10%;
        margin-right: 10%;
    }
`

export const NutricaoImagem = styled.div`

`