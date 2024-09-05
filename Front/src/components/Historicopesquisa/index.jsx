import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom'; // Importando Link do react-router-dom

import mperfil from '../../assets/mperfil.png';
import Marta from '../../assets/Marta.png';
import Carlos from '../../assets/Carlos.png';

const HistoricoPesquisa = () => {
    const historico = [
        { nome: 'Fernanda Santos', imagem: mperfil },
        { nome: 'Carlos Aschoff', imagem: Carlos },
        { nome: 'Marta Portela', imagem: Marta },
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
