import React from 'react';
import * as S from './styles';

export default function Checkbox({ label, onChange, styles }) {
    return (
        <S.Container styles={styles}>
            <S.Input type="checkbox" onChange={onChange} />
            {label && <S.Label>{label}</S.Label>}
        </S.Container>
    );
}
