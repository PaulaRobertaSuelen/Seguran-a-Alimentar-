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
    margin-top: 320px; /* 20rem = 320px */
    margin: 32px; /* 2rem = 32px */
    color: #101066;

    h2 {
        font-size: 32px; /* 2rem = 32px */
    }

    @media (max-width: 900px) {
        margin-top: 160px; /* 10rem = 160px */
        h2 {
            font-size: 24px; /* 1.5rem = 24px */
        }
    }
`;

export const TexUm = styled.div`
    margin: 32px 0; /* 2rem = 32px */
    color: #101066;
    max-width: 400px; /* 25rem = 400px */
    margin-left: 190px;
    margin-right: auto;

    p {
        font-size: 20px;
    }

    @media (max-width: 900px) {
        margin-left: 16px; /* 1rem = 16px */
        max-width: 100%;
        p {
            font-size: 16px; /* 1rem = 16px */
        }
    }
`;

export const ContImg = styled.div`
    display: flex;
    margin-left: 192px; /* 12rem = 192px */
    position: relative;
    margin-top: 0;

    @media (max-width: 900px) {
        margin-left: 16px; /* 1rem = 16px */
        flex-direction: column;
    }
`;

export const ImLinha = styled.img`
    width: 100%;
    max-width: 400px; /* 25rem = 400px */
    height: auto;
`;

export const TexDois = styled.div`
    margin: 20px 0;
    color: #101066;
    max-width: 400px; /* 25rem = 400px */
    margin-left: 192px; /* 12rem = 192px */
    margin-right: auto;

    p {
        font-size: 20px;
    }

    @media (max-width: 900px) {
        margin-left: 16px; /* 1rem = 16px */
        max-width: 100%;
        p {
            font-size: 16px; /* 1rem = 16px */
        }
    }
`;

export const ContImagem = styled.div`
    display: flex;
    align-items: flex-start;
    margin-left: -192px; /* -12rem = -192px */
    margin-top: -10%;
    margin-bottom: 2%;

    @media (max-width: 900px) {
        margin-left: 0;
        flex-direction: column;
        margin-top: 0;
    }
`;

export const Im = styled.img`
    height: auto;
    margin-left: 848px; /* 53rem = 848px */
    position: relative;
    top: -192px; /* -12rem = -192px */

    @media (max-width: 900px) {
        margin-left: 0;
        top: 0;
        width: 100%;
    }
`;

export const ContAzul = styled.div`
    background-color: #101066;
    padding: 20px;
    margin: 80px 20; /* 5rem = 80px */
    display: flex;
    flex-direction: row;

    p {
        color: #ffffff;
        font-size: 16px; /* 1rem = 16px */
        margin-left: -1440px; /* -90rem = -1440px */
        margin-top: 640px; /* 40rem = 640px */
        margin: 16px; /* 1rem = 16px */
    }

    h1 {
        font-size: 16px; /* 1rem = 16px */
        color: #ffffff;
    }

    @media (max-width: 900px) {
        flex-direction: column;
        margin: 32px 16px; /* 2rem = 32px, 1rem = 16px */
        p {
            margin-left: 0;
            margin-top: 0;
            font-size: 14px; /* 0.875rem = 14px */
        }

        h1 {
            font-size: 14px; /* 0.875rem = 14px */
        }
    }
`;

export const Caixa = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

export const ImLogo = styled.img`
    width: 320px; /* 20rem = 320px */
    margin-left: 160px; /* 10rem = 160px */
    height: auto;
    margin-bottom: 20px;

    @media (max-width: 900px) {
        width: 240px; /* 15rem = 240px */
        margin-left: 0;
    }
`;

export const TexT = styled.div`
    margin-bottom: 32px; /* 2rem = 32px */
    max-width: 640px; /* 40rem = 640px */
    margin-left: 160px; /* 10rem = 160px */
    color: #ffffff;

    p {
        font-size: 16px; /* 1rem = 16px */
    }

    @media (max-width: 900px) {
        margin-left: 0;
        max-width: 100%;
        p {
            font-size: 14px; /* 0.875rem = 14px */
        }
    }
`;

export const CaixaDois = styled.div`
    display: flex;
    align-items: center;
`;

export const ContImagems = styled.div`
    display: grid;
    flex-wrap: wrap;
    margin: 160px;
    justify-content: space-between;
    grid-template-columns: repeat(3, 1fr);
    width: calc(80% - 1%);
    gap: 48px; /* 3rem = 48px */
    margin-bottom: 160px; /* 10rem = 160px */

    h1 {
        color: aliceblue;
        font-size: 32px; /* 2rem = 32px */
        margin-left: 0;
    }

    @media (max-width: 900px) {
        grid-template-columns: 1fr;
        margin: 5%;
        gap: 16px; /* 1rem = 16px */
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