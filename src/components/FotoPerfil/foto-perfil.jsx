// ESSE COMPONENTE SERVE PARA O USUÁRIO FAZER UPLOAD DA FOTO DE PERFIL  

import React, { useState } from 'react';
import * as S from "./styles"


export default function ProfileImageUploader() {
    const [image, setImage] = useState(null);

    const handleImageChange = (event) => {
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
        <S.EspacoFoto>
        <S.InputArquivo type="file" accept="image/*" onChange={handleImageChange} />
        {image && <S.FotoPerfil src={image} alt="Profile" />}
        </S.EspacoFoto>
    );
}