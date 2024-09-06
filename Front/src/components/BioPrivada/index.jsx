import React, { useEffect, useState } from 'react';
import * as S from './styles';
import useProfile from '../../services/useProfile';
import TextAreaInput from '../FormFields/TextArea';
import Button from '../FormFields/Button';
import { MdEdit } from 'react-icons/md';

export default function BioPublica() {
    const { createProfile, updateProfile, getProfile, getUserAuthenticated } =
        useProfile();

    const [dataUser, setDataUser] = useState();
    const [dataProfile, setDataProfile] = useState();
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        getUserAuthenticated().then((response) => {
            setDataUser(response.data);
            getProfile(response.data.id).then((response) => {
                setDataProfile(response.data);
            });
        });
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            userId: dataUser.id,
            sobre: event.target.sobre.value,
            contatos: event.target.contatos.value,
            anexos: event.target.anexos.value,
        };

        if (dataProfile) {
            updateProfile(dataUser.id, data)
                .then((response) => {
                    alert('Perfil atualizado com sucesso!');
                    setEdit(false);
                })
                .catch((error) => {
                    alert(error.response.data.error);
                });
        } else {
            createProfile(data)
                .then(() => {
                    alert('Perfil atualizado com sucesso!');
                    setEdit(false);
                })
                .catch((error) => {
                    alert(error.response.data.error);
                });
        }
    };

    return (
        <S.Container>
            <MdEdit
                size={20}
                onClick={() => setEdit(!edit)}
                style={{
                    cursor: 'pointer',
                    position: 'absolute',
                    right: '20px',
                    top: '20px',
                }}
            />
            <form onSubmit={handleSubmit}>
                <TextAreaInput
                    name="sobre"
                    label="Sobre"
                    disabled={!edit}
                    defaultValue={dataProfile?.sobre ?? ''}
                    styles={{ marginTop: '20px' }}
                />
                <TextAreaInput
                    name="contatos"
                    label="Contatos"
                    disabled={!edit}
                    defaultValue={dataProfile?.contatos ?? ''}
                    styles={{ marginTop: '20px' }}
                />
                <TextAreaInput
                    name="anexos"
                    label="Anexos"
                    disabled={!edit}
                    defaultValue={dataProfile?.anexos ?? ''}
                    styles={{ marginTop: '20px' }}
                />
                {edit && (
                    <div
                        style={{
                            display: 'flex',
                            gap: '10px',
                            justifyContent: 'flex-end',
                        }}
                    >
                        <Button
                            onClick={() => setEdit(false)}
                            type="button"
                            styles={{ backgroundColor: 'red' }}
                        >
                            Cancelar
                        </Button>
                        <Button>Salvar</Button>
                    </div>
                )}
            </form>
        </S.Container>
    );
}
