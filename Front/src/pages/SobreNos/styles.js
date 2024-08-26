import styled from 'styled-components';


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
    margin-left: 150px;
    margin-right: auto;

p{
    font-size: 20px;
}
`;


export const ContImg = styled.div`
    display: flex;
    margin-left: 150px;
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
    margin-left: 150px;
    margin-right: auto;
p{
    font-size: 20px;
}
`;

export const ContImagem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-top: -200px;
    margin-bottom: 20px;
`;


export const Im = styled.img`
    width: 450px;
    height: auto;
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
    margin-left: 150px;
    color: #ffffff;
p{
    font-size: 18px ;
}
`;


export const ContImagems = styled.div`
    display: grid;
    grid-template-columns: 20fr 5fr;
    gap: 20px;
    margin-left: 700px;
    color: #ffffff;
p{
    font-size: 18px;
}
`;


export const ContImgUm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContImgDois = styled(ContImgUm)``;
export const ContImgTres = styled(ContImgUm)``;
export const ContImgQuatro = styled(ContImgUm)``;


export const ImgUm = styled.img`
    width: 80px;
    height: auto;
`;

export const ImgDois = styled(ImgUm)``;
export const ImgTres = styled(ImgUm)``;
export const ImgQuatro = styled(ImgUm)``;
