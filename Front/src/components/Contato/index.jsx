import React, { useState } from 'react';

import * as S from './styles';

export default function Contato(
    { isOpen2, closeModal2 }
) {
    return (

            isOpen2 && (
            <S.Modal>
                <S.Conteudo>
                    <S.Mensagem>
                        <h1>Insira no campo abaixo o link para o seu contato:</h1>
                        <p>Exemplo: Whatsapp, Telegram ou outro.</p>
                    </S.Mensagem>

                    <S.Campo>
                        <S.Link type="text" placeholder='Digite o link aqui'/>
                    </S.Campo>

                    <S.Botoes>
                        <S.Confirmar>Confirmar</S.Confirmar>
                        <S.Sair onClick={closeModal2}>Sair</S.Sair>
                    </S.Botoes>
                </S.Conteudo>
            </S.Modal>
            )
    );
}