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
export const Tag = styled.div`
    text-align: center;
    margin-top: 20rem;
    margin: 2rem;
    color:#101066;
    

h2{
    font-size: 2rem;
}
`;

export const TexUm = styled.div`
    
    margin: 2rem 0;
    color:#101066;
    max-width: 25rem;
    margin-left: 190px;
    margin-right: auto;

p{
    font-size: 20px;
}
`;


export const ContImg = styled.div`
    display: flex;
    margin-left: 12rem;
    position: relative;
    margin-top: 0px;
    
`;


export const ImLinha = styled.img`
    width: 100%;
    max-width: 25rem;
    height: auto;
    
`;

export const TexDois = styled.div`
    margin: 20px 0;
    color:#101066;
    max-width: 25rem;
    margin-left: 12rem;
    margin-right: auto;
p{
    font-size: 20px;
}
`;

export const ContImagem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: -12rem;
    margin-top: -10%;
    margin-bottom: 2%;
`;


export const Im = styled.img`
    //width: 500px;
    height:  auto;
    margin-left: 53rem;
    position: relative;
    top: -12rem; /* Alinha a imagem com o texto */
`;


export const ContAzul = styled.div`
    background-color: #101066;
    padding: 20px;
    margin: 5rem 20;
    display: flex;
    flex-direction: row;

p{
    color: #ffffff;
    font-size: 1rem;
    margin-left: -90rem;
    margin-top: 40rem;
    margin: 1rem;
h1{
    font-size: 1rem;
    color: #ffffff;
}
    
}
`;



export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;


export const ImLogo = styled.img`
    width: 20rem;
    margin-left: 10rem;
    height: auto;
    margin-bottom: 20px;
`;


export const TexT = styled.div`
    margin-bottom: 2rem;
    max-width: 40rem;
    margin-left: 10rem;
    color: #ffffff;
p{
    font-size: 1rem ;
}
`;


export const CaixaDois = styled.div`
    display: flex;
    align-items: center;
`;


export const ContImagems = styled.div`
    display: grid;
    flex-wrap: wrap;
    margin: 10%;
    justify-content: space-between;
    grid-template-columns: repeat(3,1fr);
    width: calc(80% - 1%);
    gap: 3rem;
    margin-bottom: 10rem;

h1{
    color: aliceblue;
    font-size: 2rem;
    margin-left: -rem;
}

`;

export const ContImgUm = styled.div`
    display: flex;

`;

export const ContImgDois = styled(ContImgUm)``;
export const ContImgTres = styled(ContImgUm)``;
export const ContImgQuatro = styled(ContImgUm)``;
export const ContImgQuinto = styled(ContImgUm)``;
export const ContImgSexto = styled(ContImgUm)``;


export const ImgUm = styled.img`
    width: 100%;
    height: auto;
    max-width: 100px;
`;

export const ImgDois = styled(ImgUm)``;
export const ImgTres = styled(ImgUm)``;
export const ImgQuatro = styled(ImgUm)``;
export const ImgQuinto = styled(ImgUm)``;
export const ImgSexto = styled(ImgUm)``;
