import React, { useState } from 'react';
import * as S from './styles';
import { FaInstagram,FaWhatsapp, } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

export default function BioPublica (
    ){

        // Sobre editável
        const [isEditing, setIsEditing] = useState(false);
        const [text, setText] = useState("Olá, sou Fernanda, nutricionista especializada em TEA. Minhas consultas nutricionais visam resolver problemas alimentares, melhorando hábitos e promovendo uma vida saudável. Utilizo abordagens personalizadas e integrativas, focadas no autoconhecimento e na autocompaixão. Cada consulta dura 50 minutos e é realizada em um ambiente confortável e sigiloso.");

        const handleEditClick = () => {
            setIsEditing(true);
        };
        const handleConfirmClick = () => {
            setIsEditing(false);
        };
        const handleChange = (e) => {
            setText(e.target.value);
        };


        // Contato editável
        const [isEditing2, setIsEditing2] = useState(false);
        const [text2, setText2] = useState("Whatsapp: (00) 0 0000-0000; Instagram: @fernandanutrisilvatea");

        const handleEditClick2 = () => {
            setIsEditing2(true);
        };
        const handleConfirmClick2 = () => {
            setIsEditing2(false);
        };
        const handleChange2 = (e) => {
            setText2(e.target.value);
        };



        // Anexos editável
        const [isEditing3, setIsEditing3] = useState(false);
        const [text3, setText3] = useState("https://linktr.ee/fernandanutri");

        const handleEditClick3 = () => {
            setIsEditing3(true);
        };
        const handleConfirmClick3 = () => {
            setIsEditing3(false);
        };
        const handleChange3 = (e) => {
            setText3(e.target.value);
        };



    return (
        <S.Container>
            
            <S.EditarSobre>
                <h1>Sobre:</h1>
                <S.TextoEditavel>
                    {isEditing ? (
                    <S.TextArea value={text} onChange={handleChange} />
                    ) : (
                    <S.Paragraph>{text}</S.Paragraph>
                    )}
                    <S.Button editing={isEditing} onClick={isEditing ? handleConfirmClick : handleEditClick}>
                        {isEditing ? 'Confirmar' : 'Editar'}
                    </S.Button>
                </S.TextoEditavel>
            </S.EditarSobre>

            <S.EditarContato>
                <h1>Contatos:</h1>
                <S.TextoEditavel>
                    {isEditing2 ? (
                    <S.TextArea value={text2} onChange={handleChange2} />
                    ) : (
                    <S.Paragraph>{text2}</S.Paragraph>
                    )}
                    <S.Button editing={isEditing2} onClick={isEditing2 ? handleConfirmClick2 : handleEditClick2}>
                        {isEditing2 ? 'Confirmar' : 'Editar'}
                    </S.Button>
                </S.TextoEditavel>
            </S.EditarContato>

            <S.EditarAnexos>
                <h1>Anexos:</h1>
                <S.TextoEditavel>
                    {isEditing3 ? (
                    <S.TextArea value={text3} onChange={handleChange3} />
                    ) : (
                    <S.Paragraph>{text3}</S.Paragraph>
                    )}
                    <S.Button editing={isEditing3} onClick={isEditing3 ? handleConfirmClick3 : handleEditClick3}>
                        {isEditing3 ? 'Confirmar' : 'Editar'}
                    </S.Button>
                </S.TextoEditavel>
            </S.EditarAnexos>

        </S.Container>
    );
};