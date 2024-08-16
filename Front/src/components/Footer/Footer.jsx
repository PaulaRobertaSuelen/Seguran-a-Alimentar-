
import * as S from "./styles";

import Logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <S.Footer>
        <img src={Logo} alt="logo" />
        <p>Copyright © 2024 - 2024 BemTEA - todos os direitos reservados.</p>
        <S.Button
            onClick={() =>
                window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
            }
        >
            Voltar para o topo
        </S.Button>
        </S.Footer>
    );
}