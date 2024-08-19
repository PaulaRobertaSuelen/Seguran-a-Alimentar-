import React from 'react';
import * as S from './styles';

export default function Checkbox({ name, label, onChange, styles }) {
    return (
        <S.Container styles={styles}>
            <S.Input name={name} type="checkbox" onChange={onChange} />
            {label && <S.Label>{label}</S.Label>}
        </S.Container>
    );
}
