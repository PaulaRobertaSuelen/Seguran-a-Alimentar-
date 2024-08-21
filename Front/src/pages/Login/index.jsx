import { MdEmail, MdLock, MdRemoveRedEye } from 'react-icons/md';
import * as S from './styles';
import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import Modal from '../../components/Modal/index';
import { useState } from 'react';
import useAuth from '../../services/useAuth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [openEsqueciMinhaSenha, setOpenEsqueciMinhaSenha] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();


    const handleButtonClick = () => {
        navigate('/cadastro');  }

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const senha = event.target.senha.value;
        login({ email, senha })
            .then((response) => {
                alert('Login realizado com sucesso!');
                navigate('/');
            })
            .catch((error) => {
                alert(error.response.data.error);
            });
    };

    return (
        <S.Container>
            <S.AsideContainer>
                <img src={Onda} className="background" alt="" />
                <img src={Logo} className="logo" alt="" />
            </S.AsideContainer>
            <S.FormContainer>
                <S.Login>
                    <h1>LOGIN</h1>

                    <form onSubmit={handleSubmit}>
                        <TextInput
                            name="email"
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                        />
                        <TextInput name="senha" label="Senha" password />
                        <S.LostPass
                            onClick={() => setOpenEsqueciMinhaSenha(true)}
                        >
                            <Checkbox label="Lembre-se" />
                            <a>Esqueceu a senha? </a>
                        </S.LostPass>
                        <S.Bat>
                            <Button
                                styles={{
                                    padding: '10px',
                                    width: '80%',
                                }}
                            >
                                Entrar
                            </Button>
                        </S.Bat>
                    </form>
                    <p>
                        Não tem uma conta? <a onClick={handleButtonClick} >Cadastre-se</a>
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
