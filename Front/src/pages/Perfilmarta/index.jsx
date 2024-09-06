import Navbar from '../../components/Navbar';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Editprofmarta from '../../components/Editprofmarta';
import Perfileditmarta from '../../components/Perfileditmarta';

export default function PerfilProfissional() {
    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <Navbar />
            <S.Container>
                <Perfileditmarta />
                <Editprofmarta />
            </S.Container>
        </S.PageWrapper>
    );
}
