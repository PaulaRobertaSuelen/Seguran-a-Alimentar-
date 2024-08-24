import React from 'react';
import * as S from './styles';

const HistoricoPesquisa = () => {
    const historico = [
        { nome: 'Fernanda Santos', imagem: '/path/to/image1.png' },
        { nome: 'Carlos Miranda', imagem: '/path/to/image2.png' },
        { nome: 'Bruna Alves', imagem: '/path/to/image3.png' },
    ];

    return (
        <S.Container>
            <h2>Historico de pesquisa</h2>
            {historico.map((item, index) => (
                <S.Item key={index}>
                    <S.ProfileImage src={item.imagem} alt={item.nome} />
                    <S.ProfileInfo>{item.nome}</S.ProfileInfo>
                    <S.ViewButton>ver perfil</S.ViewButton>
                </S.Item>
            ))}
        </S.Container>
    );
};

export default HistoricoPesquisa;
