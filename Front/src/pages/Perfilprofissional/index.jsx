import NavbarLogin from '../../components/Navbarlogin/index';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Perfiledit from '../../components/Perfiledit';
import EditProf from '../../components/EditProf/index,';


export default function PerfilProfissional() {
    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <NavbarLogin />
            <S.Container>
                <Perfiledit/>
                <EditProf/>
            </S.Container>  
        </S.PageWrapper>
    );
}