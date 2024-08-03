    import { MdEmail, MdLock, MdRemoveRedEye } from 'react-icons/md';
import * as S from './styles';
import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    return (
        <S.Container>
            <S.AsideContainer>
                <img src={Onda} className="background" alt="" />

                <img src={Logo} className="logo" alt="" />
            </S.AsideContainer>
            <S.FormContainer>
                <S.Button>
                    <Button
                        onClick={() => navigate('/')}
                        styles={{
                            backgroundColor: '#2764E8',
                            padding: '10px',
                        }}
                    >
                        Voltar
                    </Button>
                </S.Button>
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
                        <S.LostPass>
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
        </S.Container>
    );
}
