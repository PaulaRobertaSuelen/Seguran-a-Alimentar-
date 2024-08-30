import Navbarpro from '../../components/NavbarPro/index';

import * as S from './styles';

import Ondaleve from '../../assets/svg/ondaleve.svg';

import ProfissionalPrivado from '../../components/ProfissionalPrivado/index';
import BioPrivada from '../../components/BioPrivada/index';

export default function PerfilPrivado() {
    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <Navbarpro />
            <S.Container>
                <ProfissionalPrivado />
                <BioPrivada />
            </S.Container>
        </S.PageWrapper>
    );
}
