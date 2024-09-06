import { MdEmail } from 'react-icons/md';
import * as S from './styles';
import { useState } from 'react';
import api from '../../services/authService';
import { useNavigate } from 'react-router-dom';

import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import Modal from '../../components/Modal/index';

export default function Login() {
    const [openEsqueciMinhaSenha, setOpenEsqueciMinhaSenha] = useState(false);
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleButtonClick = () => {
        navigate('/cadastro');
    };

    const handleSubmit = async (event) => {
        try {
            await api
                .post('/user/login', {
                    email,
                    senha,
                })
                .then((response) => {
                    localStorage.setItem('token', response.data.token);
                    localStorage.setItem(
                        'tipoUsuario',
                        response.data.tipoUsuario
                    );
                    navigate('/');
                })
                .catch((error) => {
                    alert('Email ou senha incorreto.')
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const userByEmail = async () => {
        try {
            await api
                .post('/redefinirsenha', { email }) // Enviando o email no corpo da requisição
                .then((response) => {
                    console.log('funcionou');
                    alert('Código enviado para o email');
                    navigate('/redefinirsenha');
                })
                .catch((error) => {
                    if (error.response && error.response.status === 404) {
                        alert('Usuário não encontrado');
                    } else {
                        alert('Erro no servidor');
                    }
                    console.log(error);
                });
        } catch (error) {
            console.log(error);
        }
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
                    <TextInput
                        name="email"
                        label="Email"
                        iconLeft={<MdEmail color="#4377FF" />}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextInput
                        name="senha"
                        label="Senha"
                        password
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <S.LostPass>
                        <Checkbox
                            name="lembrar"
                            label="Lembre-se"
                            styles={{
                                padding: '8px',
                                width: '120%',
                            }}
                        />
                        <a onClick={() => setOpenEsqueciMinhaSenha(true)}>
                            Esqueceu a senha?
                        </a>
                    </S.LostPass>

                    <S.Bat>
                        <Button
                            styles={{
                                padding: '8px',
                                width: '120%',
                            }}
                            onClick={() => handleSubmit()}
                        >
                            Entrar
                        </Button>
                    </S.Bat>

                    <p>
                        Não tem uma conta?{' '}
                        <a onClick={handleButtonClick}>Cadastre-se</a>
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
                            Para redefinir a sua senha, informe o e-mail de
                            cadastro.
                        </p>
                    </S.ContainerText>
                    <S.ContainerForm>
                        <TextInput
                            name="email"
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                            styles={{
                                width: '80%',
                            }}
                            onChange={ (e) => setEmail(e.target.value) }
                        />

                        <Button
                            styles={{ width: '60%', padding: '10px' }}
                            onClick={() => userByEmail()}
                        >
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
