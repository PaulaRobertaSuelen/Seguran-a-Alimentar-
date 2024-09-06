import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as S from './styles';

import { IoPersonCircleOutline } from 'react-icons/io5';

import ContatoPopUp from '../Contato/index';
import AssinaturaPopUp from '../Assinatura/index';
import useProfile from '../../services/useProfile';

export default function Perfiledit() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const { getUserAuthenticated } = useProfile();
    const [dataUser, setDataUser] = useState();
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const [isModalOpen2, setIsModalOpen2] = useState(false);
    const openModal2 = () => setIsModalOpen2(true);
    const closeModal2 = () => setIsModalOpen2(false);

    const navigate = useNavigate();

    const logoutUser = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('tipoUsuario');
        navigate('/');
    };

    useEffect(() => {
        getUserAuthenticated().then((response) => {
            setDataUser(response.data);
        });
    }, []);

    return (
        <S.Container>
            <IoPersonCircleOutline size={150} alt="Fotoprof" />
            <S.Info>
                <S.Nome>{dataUser?.nome}</S.Nome>
                <S.Especialidade>{dataUser?.especialidade}</S.Especialidade>
                <S.CRN>CRN: {dataUser?.crn}</S.CRN>
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
            <S.Sair onClick={logoutUser}>Sair</S.Sair>
        </S.Container>
    );
}
