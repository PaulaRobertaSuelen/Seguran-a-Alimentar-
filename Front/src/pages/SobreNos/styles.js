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
    margin-top: 20px;
    margin: 60px;
    color:#101066;
    

h2{
    font-size: 2rem;
}
`;

export const TexUm = styled.div`
    
    margin: 20px 0;
    color:#101066;
    max-width: 400px;
    margin-left: 190px;
    margin-right: auto;

p{
    font-size: 20px;
}
`;


export const ContImg = styled.div`
    display: flex;
    margin-left: 190px;
    position: relative;
    margin-top: 0px;
    
`;


export const ImLinha = styled.img`
    width: 100%;
    max-width: 400px;
    height: auto;
    
`;

export const TexDois = styled.div`
    margin: 20px 0;
    color:#101066;
    max-width: 400px;
    margin-left: 190px;
    margin-right: auto;
p{
    font-size: 20px;
}
`;

export const ContImagem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: -230px;
    margin-top: -200px;
    margin-bottom: 20px;
`;


export const Im = styled.img`
    //width: 500px;
    height:  auto;
    margin-left: 900px;
    position: relative;
    top: -140px; /* Alinha a imagem com o texto */
`;


export const ContAzul = styled.div`
    background-color: #101066;
    padding: 20px;
    margin: 40px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;


export const ImLogo = styled.img`
    width: 250px;
    margin-left: 150px;
    height: auto;
    margin-bottom: 20px;
`;


export const TexT = styled.div`
    margin-bottom: 20px;
    max-width: 400px;
    margin-left: 170px;
    color: #ffffff;
p{
    font-size: 18px ;
}
`;


export const CaixaDois = styled.div`
    display: flex;
    align-items: center;
    

`;

export const ContImagems = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    flex-direction: 30px;

    color: #ffffff;
p{
    font-size: 14px;
    margin: 2rem;
    justify-content: center;
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
    width: 30%;
    height: auto;
    max-width: 150px;
`;

export const ImgDois = styled(ImgUm)``;
export const ImgTres = styled(ImgUm)``;
export const ImgQuatro = styled(ImgUm)``;
export const ImgQuinto = styled(ImgUm)``;
export const ImgSexto = styled(ImgUm)``;
