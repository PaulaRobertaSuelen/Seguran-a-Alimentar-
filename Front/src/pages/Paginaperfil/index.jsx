import React from 'react';
import * as S from './styles';

import Perfiluser from '../../components/Perfiluser';
import HistoricoPesquisa from '../../components/Historicopesquisa';
import Navbar from '../../components/Navbar';

import Ondaleve from '../../assets/svg/ondaleve.svg';

const Paginaperfil = () => {
    return (
        <>
            <Navbar />
            <S.Container backgroundImage={Ondaleve}>
                <S.Content>
                    <Perfiluser />
                    <HistoricoPesquisa />
                </S.Content>
            </S.Container>
        </>
    );
};

export default Paginaperfil;
