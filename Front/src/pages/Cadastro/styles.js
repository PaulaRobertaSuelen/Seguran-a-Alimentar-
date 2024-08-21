import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
`;
export const AsideContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    & .background {
        object-fit: cover;
        max-height: 100vh;
    }
    & .logo {
        position: absolute;
        width: 140px;
        height: 190px;
    }
`;
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    width: 100%;
`;
export const Button = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding-left: 15px;
    padding-top: 5px;
`;
export const Login = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    & h1 {
        margin-bottom: 20px;
        font-size: 48px;
        font-weight: 300;
    }
    & form {
        width: 100%;
        gap: 10px;
        display: flex;
        flex-direction: column;
    }
    & p {
        font-size: 14px;
        font-weight: 200;
    }
    & p > a {
        color: #1976d2;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const LostPass = styled.div`
    display: flex;
    justify-content: space-between;
    & a {
        color: #1976d2;
        font-size: 14px;
        font-weight: 200;
        text-decoration: none;
        cursor: pointer;
    }
`;
export const ContainerForgot = styled.div`
    width: 40vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    & h1 {
        line-height: 2em;
        text-align: center;
    }
    & p {
        font-size: 14px;
        width: 70%;
        text-align: center;
    }
`;
export const ContainerForm = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-top: 20px;
    & a {
        text-align: center;
        color: #4a4a4a;
        font-size: 14px;
    }
`;

// import styled from 'styled-components';
// import OndaOne from '../../assets/svg/ondaOne.svg';

// export const Pai = styled.div`
//     display: flex;
//     height: 100vh;
//     width: 100vw;
// `;
// export const Conteiner = styled.div`
//     width: 60%;
//     height: 100%;
// `;
// // export const Botaodecima = styled.div`
// //     margin: 16px;
// // `;
// export const Redefinir = styled.div`
//     width: 100%;
//     display: flex;
//     justify-content: center; */
//     /* align-items: center;
//     margin-left: 230px;
//     /* gap: 34px;
//     margin-top: 39px; */

// `;
// export const Teste = styled.div`
//     max-width: 350px;
//     display: flex;
//     flex-direction: column;
//     gap: 8px;
//     margin: auto;
//     margin-top: 150px;
// `;
// export const CadastroTitle = styled.h1`

// `;
// // export const IconeAutismo = styled.div`
// //     margin-right: 30px;
// //     margin-top: 60px;
// // `
// export const Imput = styled.div`
//     display: flex;
//     align-items: center;
//     gap: 20px;
// `;
// export const Termos = styled.p`

// `;

// export const Tela = styled.div`
//     height: 100%;
//     width: 40%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     background-image: url(${OndaOne});
//     background-size: cover;
//     background-position: center;
// `;

// export const Logo = styled.div`

// `;

// export const VerificadorContainer = styled.div`

// `;

// export const FormContainer = styled.div`
//     /* max-width: 500px
//     display: flex;
//     flex-direction: column
//     gap: 20px */
// `;

// export const InputContainer = styled.div`
//    margin-top: 20px
// `;
// export const IconContainer = styled.div`
//     position: absolute;
//     margin-left: auto;
//     /* align-items: center;
//     justify-content: center; */
// `;

// export const InputLabel = styled.label`
//     display: block;
//     margin-bottom: 8px;
//     font-weight: bold;
// `;

// export const Input = styled.input`
//     width: calc(100% - 20px);
//     padding: 10px 10px 10px 35px;
//     border: 1px solid #ccc;
//     border-radius: 8px;
//     font-size: 16px;
// `;

// export const BotaoRedefinir = styled.button`
//     background-color: #33B44D;
//     color: #fff;
//     border: none;
//     border-radius: 8px;
//     margin: 0 auto;
//     padding: 10px;
//     width: '80%';
//     font-size: 16px;
//     cursor: pointer;
//     transition: background-color 0.3s ease;
//     &:hover {
//         background-color: #0056b3;
//     }
// `;
