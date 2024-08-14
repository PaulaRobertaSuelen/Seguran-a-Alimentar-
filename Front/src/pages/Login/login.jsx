import { MdEmail, MdLock, MdRemoveRedEye } from 'react-icons/md';
import * as S from './styles';
import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import Modal from '../../components/Modal/index';
import { useState } from 'react';

export default function Login() {
    const [openEsqueciMinhaSenha, setOpenEsqueciMinhaSenha] = useState(false);

    return (
        <S.Container>
            <S.AsideContainer>
                <img src={Onda} className="background" alt="" />
                <img src={Logo} className="logo" alt="" />
            </S.AsideContainer>
            <S.FormContainer>
                <S.Login>
                    <h1>LOGIN</h1>

                    <form>
                        <TextInput
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                        />
                        <TextInput
                            label="Senha"
                            iconLeft={<MdLock color="#4377ff" />}
                            iconRight={<MdRemoveRedEye color="#4377ff" />}
                            type="password"
                        />
                        <S.LostPass
                            onClick={() => setOpenEsqueciMinhaSenha(true)}
                        >
                            <Checkbox label="Lembre-se" />
                            <a>Esqueceu a senha? </a>
                        </S.LostPass>
                    </form>
                    <Button
                        styles={{
                            padding: '10px',
                            width: '80%',
                        }}
                    >
                        Entrar
                    </Button>
                    <p>
                        Não tem uma conta? <a>Cadastre-se</a>
                    </p>
                </S.Login>
            </S.FormContainer>
            <Modal
                isOpen={openEsqueciMinhaSenha}
                handleClose={() => setOpenEsqueciMinhaSenha(false)}
            >
                <S.ContainerForgot>
                    <S.ContainerText>
                        <h1>Esqueci minha senha</h1>
                        <p>
                            Para redefinir a sua senha, informe e-mail e
                            enviaremos um link.
                        </p>
                    </S.ContainerText>
                    <S.ContainerForm>
                        <TextInput
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                            styles={{
                                width: '80%',
                            }}
                        />
                        <Button styles={{ width: '60%', padding: '10px' }}>
                            Próximo
                        </Button>
                        <a onClick={() => setOpenEsqueciMinhaSenha(false)}>
                            Cancelar
                        </a>
                    </S.ContainerForm>
                </S.ContainerForgot>
            </Modal>
        </S.Container>
    );
}
