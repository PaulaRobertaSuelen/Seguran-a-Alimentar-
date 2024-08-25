import React from 'react';
import * as S from './styles';
import FotoPorfissional from '../../assets/fotoProfissional.png'

const Perfiledit = () => {
    return (
        <S.Container>
            <S.Fotoprof src={FotoPorfissional} alt="Fotoprof" />
            <S.Info>
                <h2>Fernanda Santos</h2>
            </S.Info>
            <S.Info>
            Nutricionista
            </S.Info>
            <S.Info>
            CRN: 00/00000
            </S.Info>
            <S.ConfgButton>
                Assinatura
            </S.ConfgButton>

            <S.ContratarButton>
                Contate-me
            </S.ContratarButton>
            

            <S.Info>
                <p>Nutrição em TEA</p>
                {/* <p>Nutrição materno infantil</p> */}
                <p>Comportamento alimentar</p>
            </S.Info>
        </S.Container>
    );
};

export default Perfiledit;