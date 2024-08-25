import React from 'react';
import * as S from './styles';
import { FaInstagram,FaWhatsapp, } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const EditProf = () => {
    return (
        <S.Container>
            
            <S.EditButton>
            <CiEdit/>Editar
            </S.EditButton>
            <h2>Sobre:</h2>
            <p>Olá, sou Fernanda, nutricionista especializada em TEA. Minhas consultas nutricionais visam resolver problemas alimentares, melhorando hábitos e promovendo uma vida saudável. Utilizo abordagens personalizadas e integrativas, focadas no autoconhecimento e na autocompaixão. Cada consulta dura 50 minutos e é realizada em um ambiente confortável e sigiloso. Quer saber mais? Instagram: @fernandanutrisilvatea.</p>
            <h2>Contato:</h2>
            <p style={{ display: 'flex', alignItems: 'center' }}>
            <FaInstagram style={{ marginRight: '8px' }} />
            @fernandanutrisilvatea
            </p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
            <FaWhatsapp style={{ marginRight: '8px' }} />
            (81) 99877-6523</p>
            <h2>Anexos:</h2>
            <p>Certificado em AUTISMO E SELETIVIDADE ALIMENTAR - TERAPIA ALIMENTAR COM ABORDAGEM ABA.</p>
            <p>Link com os certificados abaixo:</p>
            <p>https//:www.certificados.com</p>
        </S.Container>
    );
};

export default EditProf;