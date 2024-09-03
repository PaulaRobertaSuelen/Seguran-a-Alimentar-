import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

import homem from '../../assets/homem.jpg';
import hbarba from '../../assets/hbarba.jpg';
import mperfil from '../../assets/mperfil.png';

const HistoricoPesquisa = () => {
    const historico = [
        { nome: 'Fernanda Santos', imagem: mperfil },
        { nome: 'Carlos Miranda', imagem: homem },
        { nome: 'Bruno Alves', imagem: hbarba },
    ];

    return (
        <S.Container>
            <h2>Histórico de pesquisa</h2>
            {historico.map((item, index) => (
                <S.Item key={index}>
                    <S.ProfileImage src={item.imagem} alt={item.nome} />
                    <S.ProfileInfo>{item.nome}</S.ProfileInfo>
                    <S.ViewButton as={Link} to="/perfil/profissional">
                        ver perfil
                    </S.ViewButton>
                </S.Item>
            ))}
        </S.Container>
    );
};

export default HistoricoPesquisa;
