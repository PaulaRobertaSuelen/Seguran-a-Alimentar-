import React from "react";

import * as S from "./styles"


export default function Navbar() {

    return (

        <>

            <S.NavbarOpcoes>

                <S.BotaoEntrar>
                    <a href="/">Entrar</a>
                </S.BotaoEntrar>

                <S.Opcoes>
                    <a href="/">Início</a>
                    <a href="/">Perfil</a>
                </S.Opcoes>

            </S.NavbarOpcoes>
        
        </>

    )
}
