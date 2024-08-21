import styled from "styled-components";

export const Bio = styled.div`
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
`

export const Cabecalho = styled.div`
    padding-top: 20px;
    display: flex;
    flex-direction: row;
    position: relative;
    align-items: center;
    width: 100%;
    gap: 20px;
    margin-bottom: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
`

export const FotoPerfil = styled.img`
    width: 120px;
    height: 120px;
`

export const Nome = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #000000;
    margin-bottom: 0;
`

export const Titulo = styled.p`
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;
    font-weight: 100;
    line-height: 18px;
`

export const Crn = styled.p`
    font-size: 14px;
    font-weight: 600;
    line-height: 18px;
    margin-bottom: 15px;
`

export const Valor = styled.p`
    font-size: 16px;
    color: #000000;
    margin-bottom: 15px;
    font-weight: 600;
`

export const Especialidades = styled.div`
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
`

export const Tag = styled.div`
    background-color: #33B579;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 8px 16px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;

`

export const SobreMim = styled.div`
    background-color: #f8f9fa;
    border-radius: 20px;
    padding: 20px;
    margin-top: 10px;
    width: 100%;

`

export const SobreMimTitulo = styled.h3`
    font-size: 14px;
    color: #000000;
    margin-bottom: 10px;
`

export const SobreMimTexto = styled.div`
    font-size: 12px;
    color: #484848;
    line-height: 1.5;
    margin-bottom: 10px;
`

export const Acoes = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 10px;
    align-items: center;
    justify-content: space-between;
`


export const BotaoQueroMeConsultar = styled.button`
    background-color: #33B44D;
    color: white;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    padding: 10px;

    &:hover {
    background-color: #007e33;
    }
`

export const Telefone = styled.p`
    font-size: 12px;
    color: #007e33;
    font-weight: bold;
    transform: translateX(-70%);
`

export const BotaoEditarPerfil = styled.button`
    background-color: #00c851;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 10px;

    &:hover {
    background-color: #007e33;
    }
`

export const BotaoSairDaConta = styled.button`
    background-color: #dc3545;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 10px;

    &:hover {
    background-color: #c82333;
    }
`