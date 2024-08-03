// src/pages/Redefinirsenha/BotaoVoltar.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Botao from './styles'; // Certifique-se de que o caminho está correto

const BotaoVoltar = () => {
    const navigate = useNavigate();

    const handleVoltar = () => {
        navigate('/'); // Navega para a página inicial
    };

    return <Botao onClick={handleVoltar}>Voltar</Botao>;
};

export default BotaoVoltar;
