import React, { useState } from 'react';

import PayPalPayment from '../PayPal/index';

import * as S from './styles';

export default function Assinatura(
    { isOpen, closeModal }
) {
    return (

            isOpen && (
            <S.Modal>
                <S.Conteudo>
                    <S.Mensagem>
                        <h1>Instruções:</h1>
                        <p>A assinatura permite que seu perfil fique visível para os usuários comuns pesquisarem e acessarem para entrar em contato. O tempo de vigência de cada assinatura é de 31 dias, podendo ser renovada assim que ela acaba. Com a assinatura “Inativa”, seu perfil não estará mais visível para os outros usuários.</p>
                    </S.Mensagem>
                    <S.Status>
                        <S.Assinatura>Status da assinatura:</S.Assinatura>
                        <S.Estado>Ativa</S.Estado>
                        <S.Vigencia>Dias restantes:</S.Vigencia>
                        <S.Dias>31</S.Dias>
                    </S.Status>
                    <S.Pagamento>
                        <PayPalPayment/>
                    </S.Pagamento>
                    <S.Sair onClick={closeModal}>Sair</S.Sair>
                </S.Conteudo>
            </S.Modal>
            )
    );
}