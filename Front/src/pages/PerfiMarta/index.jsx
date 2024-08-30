import NavbarLogin from '../../components/Navbarlogin/index';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import PerfilEditMarta from '../../components/PerfilEditMarta';
import EditProf from '../../components/EditProf/index,';


export default function PerfilProfissional() {
    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <NavbarLogin />
            <S.Container>
                <PerfilEditMarta/>
                <EditProf/>
            </S.Container>  
        </S.PageWrapper>
    );
}