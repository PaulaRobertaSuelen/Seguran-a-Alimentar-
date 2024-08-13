import React from 'react';
import * as S from './styles';
import { MdClose } from 'react-icons/md';

export default function index({ isOpen, children, handleClose }) {
    if (isOpen) {
        return (
            <S.Background>
                <S.Modal>
                    <S.Button onClick={handleClose}>
                        <MdClose className="close" />
                    </S.Button>
                    {children}
                </S.Modal>
            </S.Background>
        );
    }

    return null;
}
