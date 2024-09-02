import React, { useState } from 'react';
import * as S from './styles';

import Marta from '../../assets/Marta.png';

import ContatoPopUp from '../../components/Contato/index';

export default function Pefileditmarta() {
    const handleClick = () => {
        window.open('https://www.whatsapp.com/?lang=pt_BR', '_blank');
    };

    return (
        <S.Container>
            <S.Fotoprof src={Marta} alt="Fotoprof" />
            <S.Info>
                <S.Nome>Marta Portela</S.Nome>
                <S.Especialidade>NUTRICIONISTA</S.Especialidade>
                <S.CRN>CRN: 00/00000</S.CRN>
            </S.Info>
            <S.Botoes>
                <S.Contato onClick={handleClick}>Contate-me</S.Contato>
            </S.Botoes>
            <S.Tags>
                <S.TagInfo>Nutrição em TEA</S.TagInfo>
                <S.TagInfo>Comportamento alimentar</S.TagInfo>
            </S.Tags>
        </S.Container>
    );
}
