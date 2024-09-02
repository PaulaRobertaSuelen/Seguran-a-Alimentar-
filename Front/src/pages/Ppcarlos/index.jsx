import NavbarLogin from '../../components/Navbarlogin/index';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Peditcarlos from '../../components/Peditcarlos';
import Editprofcarlos from '../../components/Editprofcarlos';

export default function PerfilProfissional() {
    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <NavbarLogin />
            <S.Container>
                <Peditcarlos />
                <Editprofcarlos />
            </S.Container>
        </S.PageWrapper>
    );
}