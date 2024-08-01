// ESSE COMPONENTE SERVE PARA CRIAR UM ELEMENTO DE TEXTO QUE PODE SER ALTERADO DINAMICAMENTE PELO USUÁRIO EM UM ARQUIVO JSX

import React, { useState } from 'react';
import * as S from "./styles"

export default function Bio () {

        const [descricao, setBio] = useState("Olá, muito prazer! Meu nome é Fernanda, sou nutricionista especializada em TEA.");

        const mudaBio = (event) => {
            setBio(event.target.value);
    };

        const [Valor, setValor] = useState("R$30");

        const mudaValor = (event) => {
            setValor(event.target.value);
    };

        const [MeuNome, setMeuNome] = useState("Fernanda Silva");

        const mudaNome = (event) => {
        setMeuNome(event.target.value);
    };

    const [Funcao, setFuncao] = useState("Fernanda Silva");

        const mudaFuncao = (event) => {
            setFuncao(event.target.value);
    };

    const [image, setImage] = useState(null);

    const mudaImagem = (event) => {
        const file = event.target.files[0];
        if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };
        reader.readAsDataURL(file);
        }
    };


return (

    <>

    <SobreMim>
        <h1>Sobre mim:</h1>
        <input type="text" value={descricao} onChange={mudaBio} placeholder="Digite sua bio..." />
        <p>{descricao}</p>
    </SobreMim>

    <Valor>
        <input 
        type="text" 
        value={Valor} 
        onChange={mudaValor} 
        placeholder="Digite o valor da consulta:"
        />
        <h1>{Valor}</h1>
    </Valor>

    <MeuNome>
        <input 
        type="text" 
        value={MeuNome} 
        onChange={mudaNome} 
        placeholder="Digite seu nome:"
        />
        <h1>{MeuNome}</h1>
    </MeuNome>

    <Funcao>
        <input 
        type="text" 
        value={Funcao} 
        onChange={mudaFuncao} 
        placeholder="Digite seu nome:"
        />
        <h1>{Funcao}</h1>
    </Funcao>

    <S.EspacoFoto>
    <S.InputArquivo type="file" accept="image/*" onChange={mudaImagem} />
        {image && <S.FotoPerfil src={image} alt="Profile" />}
    </S.EspacoFoto>

    </>

    );
};