import * as S from './styles';

import Logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <S.Footer>
            <img src={Logo} alt="logo" />
            <p>
                BemTEA - Todos os direitos reservados - CNPJ: **.***.***/****-**
                Rua só Deus saber, 7 - Recife - PE CEP *****-*** E-mail:
                Telefone +55 (81) *****-**** 2024-2024
            </p>
            <p>
                BemTEA é protegido pela lei de direitos autorais. Não é
                permitido copia ou reproduzir conteúdo do site em qualquer
                veículo de comunicação.
            </p>
            {/* <S.Button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
            >
                Voltar para o topo
            </S.Button> */}
        </S.Footer>
    );
}
