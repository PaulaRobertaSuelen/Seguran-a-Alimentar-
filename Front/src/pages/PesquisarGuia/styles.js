import styled from 'styled-components';

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
    align-items: center;
    height: 280px;
    width: 60%;
    max-width: 1082px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative; //ela cria uma relaçao entre tegs com display absolute
`;

export const Conteinerimagem = styled.div`
    width: 30%;
    display: flex;
    justify-content: center;
`;

export const Caixa = styled.div`
    flex-direction: column;
    display: flex;
    margin: 10px;
    margin-top: 70px;
    gap: -10px;
    width: 74%;

    h2 {
        font-size: 22px;
    }

    p {
        font-size: 15px;
    }
    h1 {
        font-size: 15px;
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
        margin-left: -200px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #deedf5;
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
    gap: 0px; // espaço entre as tegs (so fuciona com display flex)
`;

export const Comp = styled.div`
    display: flex;
    align-items: center;
    white-space: nowrap;
    justify-content: center;
    margin: 40px;
    margin-right: 0px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border-radius: 20px;
    width: 180px;
    height: 30px;
    text-align: center;
`;

export const Sens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px;
    margin-right: 10px;
    padding: 10px;
    background-color: #101066;
    color: #ffffff;
    border-radius: 20px;
    width: 180px;
    height: 30px;
    text-align: center;
`;

export const Im = styled.img`
    width: 200px;
    height: 200px;
`;

// segunda perte do styles do pesquisar guia

export const SectionDois = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 40px;
`;

export const ContainerDois = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    height: 280px;
    width: 64%;
    max-width: 1082px;
    border-radius: 10px;
    background-color: #f9f9f9;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    gap: 20px;
    position: relative;
`;

export const ConteinerImDois = styled.div`
    width: 60%;
    display: flex;
    justify-content: center;
`;

export const CaixaDois = styled.div`
    flex-direction: column;
    display: flex;
    margin: 10px;
    gap: -10px;
    width: 74%;

    h2 {
        font-size: 22px;
    }

    p {
        font-size: 15px;
    }
    h1 {
        font-size: 15px;
    }
`;

export const BtndivDois = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    button {
        margin-top: 0.5px;
        padding: 1.3em 3em;
        font-size: 10px;
        margin-left: -200px;
        text-transform: uppercase;
        letter-spacing: 2.5px;
        font-weight: 500;
        color: #000;
        background-color: #deedf5;
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
    gap: 10px;
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
    border-radius: 20px;
    width: 200px;
    height: 30px;
    text-align: center;
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
    border-radius: 20px;
    width: 200px;
    height: 30px;
    text-align: center;
`;

export const ImDois = styled.img`
    width: 200px;
    height: 200px;
`;
