import React, { useState } from 'react';
import * as S from "./styles"

export default function Bio () {

        const [descricao, setBio] = useState("Olá, muito prazer! Meu nome é Fernanda, sou nutricionista especializada em TEA.");

        const mudaBio = (event) => {
            setBio(event.target.value);
        };

return (

    <>

    <SobreMim>
        <h1>Sobre mim:</h1>
        <input type="text" value={descricao} onChange={mudaBio} placeholder="Digite sua bio..." />
        <p>{descricao}</p>
    </SobreMim>

    </>

    );
};