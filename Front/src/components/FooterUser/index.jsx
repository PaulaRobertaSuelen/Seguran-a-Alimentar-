import * as S from './styles';
import { FaCircleArrowUp } from 'react-icons/fa6';
import { IoLogoYoutube, IoLogoFacebook } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

import Logo from '../../assets/logo.png';

export default function Footer() {
    const navigate = useNavigate();
    const handleClique = () => {
        navigate('/SNosUser');
    };
    return (
        <S.Footer>
            <img src={Logo} alt="logo" />

            <div className="icons">
                <a href="https://www.facebook.com/people/Bemtea-Start/pfbid02AStKsyD8qTTxzPWmu2J5C1F9oqGtttUPu9sZ9CxeJjtT8ny3weCbWqTv2KPi8XAVl/">
                    <IoLogoFacebook fontSize={24} color="#101066" />
                </a>
                <a href="https://www.youtube.com/watch?v=YaoHN6Z3WsI ">
                    <IoLogoYoutube fontSize={24} color="#101066" />
                </a>
            </div>
            <p className="email">
                <span>E-mail:</span> start.segurancaalimentar@gmail.com
            </p>
            <p className="copyright">
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
                <FaCircleArrowUp fontSize={24} />
            </S.Button>

            <a onClick={handleClique}>Sobre Nós</a>
        </S.Footer>
    );
}
