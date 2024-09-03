import React from 'react';
import * as S from './styles'; 
import { MdClose } from 'react-icons/md'; 

export default function ModalPesquisar({ isOpen, onClose, children }) {
    
    if (!isOpen) return null;

    return (
        <>
           
            <S.ConteinerModal>
                
                <S.ButaoBuscar>
                    <S.ClaseButao onClick={onClose}>
                        <MdClose size={24} />
                    </S.ClaseButao>
                </S.ButaoBuscar>
                {children}
            </S.ConteinerModal>
        </>
    );
}
