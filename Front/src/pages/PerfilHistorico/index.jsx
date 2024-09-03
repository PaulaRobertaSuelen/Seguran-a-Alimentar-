import React from 'react';
import * as S from './styles';

import Perfiluser from '../../components/Perfiluser';
import HistoricoPesquisa from '../../components/Historicopesquisa';
import Navbarlogin from '../../components/Navbarlogin';

import Ondaleve from '../../assets/svg/ondaleve.svg';

const PerfilHistorico = () => {
    return (
        <>
            <Navbarlogin />
            <S.Container backgroundImage={Ondaleve}>
                <S.Content>
                    <Perfiluser />
                    <HistoricoPesquisa />
                </S.Content>
            </S.Container>
        </>
    );
};

export default PerfilHistorico;
