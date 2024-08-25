import React, { useState } from 'react';
import * as S from './styles';

import Bio from '../../components/Bio/bio';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';
import ContatoPopUp from '../../components/Contato/index';
import AssinaturaPopUp from '../../components/Assinatura/index';

export default function PerfilProfissional(
) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);

    return (
        <>
            <Navbar />

            <S.Botoes>

                <S.Assinatura onClick={openModal}>Assinatura</S.Assinatura>
                <AssinaturaPopUp isOpen={isModalOpen} closeModal={closeModal} />

                <S.Contato onClick={openModal2}>Contato</S.Contato>
                <ContatoPopUp isOpen2={isModalOpen2} closeModal2={closeModal2} />

            </S.Botoes>

            <S.Body>
                <Bio />
            </S.Body>

            <Footer />
        </>
    );
}
