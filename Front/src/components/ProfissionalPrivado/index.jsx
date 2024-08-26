import React, { useState } from 'react';
import * as S from './styles';

import FotoPorfissional from '../../assets/fotoProfissional.png';

import ContatoPopUp from '../Contato/index';
import AssinaturaPopUp from '../Assinatura/index';

export default function Perfiledit() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);

    return (
        <S.Container>
            <S.Fotoprof src={FotoPorfissional} alt="Fotoprof" />
            <S.Info>
                <S.Nome>Fernanda Santos</S.Nome>
                <S.Especialidade>NUTRICIONISTA</S.Especialidade>
                <S.CRN>CRN: 00/00000</S.CRN>
            </S.Info>
            <S.Botoes>
                <S.Assinatura onClick={openModal}>Assinatura</S.Assinatura>
                <AssinaturaPopUp isOpen={isModalOpen} closeModal={closeModal} />
                <S.Contato onClick={openModal2}>Contate-me</S.Contato>
                <ContatoPopUp
                    isOpen2={isModalOpen2}
                    closeModal2={closeModal2}
                />
            </S.Botoes>
            <S.Tags>
                <S.TagInfo>Nutrição em TEA</S.TagInfo>
                <S.TagInfo>Comportamento alimentar</S.TagInfo>
            </S.Tags>
        </S.Container>
    );
}