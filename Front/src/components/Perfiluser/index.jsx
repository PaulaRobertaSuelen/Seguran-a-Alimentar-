import React from 'react';
import * as S from './styles';

import puser from '../../assets/svg/puser.svg';

const Perfiluser = () => {
    return (
        <S.Container>
            <S.Avatar src={puser} alt="Avatar" />
            <S.Info>
                <p>User</p>
                <p>Email: vaquinha123@gmail.com</p>
                <p>Telefone: 0000-0000</p>
            </S.Info>
            <S.LogoutButton as="a" href="/">
                Sair
            </S.LogoutButton>
        </S.Container>
    );
};

export default Perfiluser;
