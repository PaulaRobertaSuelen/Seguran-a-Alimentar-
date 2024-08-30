import React, { useState } from 'react';

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

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

                        <p>Realize o pagamento abaixo:</p>

                        <S.Container>
                <S.Title>
                    <PayPalScriptProvider options={{ "client-id": "AUeO65CgP0LpJvr7RZjPgeCp7Ptx36IgqM5CaKgcsOPEQQZT4kOWkizsb3wyZOhWP85v_IqiCz5cu_E9", currency: "BRL" }}>
                        <PayPalButtons
                            createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                    value: '15.00'
                                    }
                                }]
                            });
                        }}
                        onApprove={async (data, actions) => {
                            try {
                                const details = await actions.order.capture();
                                alert('Transação concluída por ' + details.payer.name.given_name);
                            } catch (error) {
                                alert('Erro ao capturar o pagamento: ' + error);
                                }
                        }}
                            onCancel={() => {
                                alert('Transação cancelada.');
                            }}
                            onError={(err) => {
                                alert('Erro ao processar o pagamento: ' + err);
                            }}
                        />
                    </PayPalScriptProvider>
                </S.Title>
            </S.Container>


                    </S.Pagamento>
                    <S.Sair onClick={closeModal}>Sair</S.Sair>
                </S.Conteudo>
            </S.Modal>
            )
    );
}