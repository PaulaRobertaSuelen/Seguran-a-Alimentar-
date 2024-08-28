import * as S from './styles';
import { FaCircleArrowUp } from 'react-icons/fa6';

import Logo from '../../assets/logo.png';

export default function Footer() {
    return (
        <S.Footer>
            <img src={Logo} alt="logo" />

            <p>
                BemTEA é protegido pela lei de direitos autorais. Não é
                permitido copia ou reproduzir conteúdo do site em qualquer
                veículo de comunicação.
            </p>
            <S.Button
                onClick={() =>
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth',
                    })
                }
            >
                <S.Arrow>
                <FaCircleArrowUp fontSize={24}/>
                </S.Arrow>
                
            </S.Button>
        </S.Footer>
    );
}
