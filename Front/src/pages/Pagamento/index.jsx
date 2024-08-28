import React from 'react'

import * as S from './styles';

export default function Pagamento() {
    return (
        <div>
            <S.Container>
                <S.Title>
                    <S.PayPalScriptProvider options={{ "client-id": "AUeO65CgP0LpJvr7RZjPgeCp7Ptx36IgqM5CaKgcsOPEQQZT4kOWkizsb3wyZOhWP85v_IqiCz5cu_E9", currency: "BRL" }}>
                        <S.PayPalButtons
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
                    </S.PayPalScriptProvider>
                </S.Title>
            </S.Container>
        </div>
    )
}
