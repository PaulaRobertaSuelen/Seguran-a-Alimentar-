import React from 'react';
import * as S from "./styles"

import Foto from "../../assets/foto-perfil-fernanda-silva.png"

export default function Bio () {

    return (

        <>

        <S.Bio>

            <S.Cabecalho>

                <S.FotoPerfil src={Foto} alt="foto" />

                <S.Info>

                    <S.Nome>Fernanda Silva</S.Nome>

                    <S.Titulo>Nutricionista</S.Titulo>

                    <S.Crn>CRN: 0/0000</S.Crn>

                    <S.Valor>Valor da consulta: R$30</S.Valor>

                </S.Info>

            </S.Cabecalho>

            <S.Especialidades>
                    <S.Tag>Nutrição em TEA</S.Tag>
                    <S.Tag>Nutrição Funcional</S.Tag>
                    <S.Tag>Nutrição Pediátrica</S.Tag>
            </S.Especialidades>

            <S.SobreMim>

                <S.SobreMimTitulo>Sobre mim:</S.SobreMimTitulo>

                    <S.SobreMimTexto>
                    Olá, muito prazer! Meu nome é Fernanda, sou nutricionista especializada em TEA.
                    </S.SobreMimTexto>

                    <S.SobreMimTexto>
                    A consulta nutricional tem como objetivo facilitar e auxiliar na resolução das suas queixas ou problemas relacionados à alimentação que surgirem durante nossos encontros.
                    Juntos, buscaremos estratégias e intervenções viáveis para melhorar seus hábitos alimentares e promover uma vida mais saudável, abrindo novos caminhos para sua qualidade de vida. Nosso principal objetivo aqui é promover o autoconhecimento crítico e sem julgamentos em relação aos seus hábitos alimentares, fortalecendo a autocompaixão!
                    Minha prática é orientada por abordagens personalizadas e integrativas, considerando suas necessidades e preferências individuais.
                    </S.SobreMimTexto>

                    <S.SobreMimTexto>
                    Cada consulta terá a duração de 50 minutos.
                    O ambiente para a realização das nossas sessões é preparado para garantir o sigilo e proporcionar conforto para ambos.
                    Posso te ajudar? Quer saber mais sobre meu trabalho?
                    </S.SobreMimTexto>

                    <S.SobreMimTexto>
                    Instagram: @fernandanutrisilvatea
                    </S.SobreMimTexto>

            </S.SobreMim>

            <S.Acoes>

                <S.BotaoQueroMeConsultar>
                    Quero me consultar
                </S.BotaoQueroMeConsultar>

                <S.Telefone>Telefone: 81 9 0000-0000</S.Telefone>    

                <S.BotaoEditarPerfil>Editar Perfil</S.BotaoEditarPerfil>

                <S.BotaoSairDaConta>Sair da conta</S.BotaoSairDaConta>

            </S.Acoes>

        </S.Bio>

        </>

);
};