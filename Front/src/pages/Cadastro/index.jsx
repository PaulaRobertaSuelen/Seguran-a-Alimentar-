import { MdEmail, MdLock, MdRemoveRedEye } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import * as S from './styles';
import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import useAuth from '../../services/useAuth';
import { useNavigate } from 'react-router-dom';


export default function Cadastro() {

    const { register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            senha: formData.get('senha'),
            confirmSenha: formData.get('confirmSenha'),
            termos: formData.get('termos'),
        };

        if (data.senha !== data.confirmSenha) {
            return alert('As senhas precisam ser iguais');
        }

        if (!data.termos) {
            return alert('Aceite os termos de uso');
        }

        return register(data)
            .then((response) => {
                alert('Registro realizado com sucesso!');
                navigate('/login');
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
                <S.Cadastro>
                    <h1>Cadastro</h1>

                    <form onSubmit={handleSubmit}>
                        <TextInput
                            name={'nome'}
                            label="Nome"
                            iconLeft={<FaUserAlt color="#4377FF" />}
                        />
                        <TextInput
                            name={'email'}
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                        />
                        <TextInput name={'senha'} label="Senha" password />
                        <TextInput
                            name={'confirmSenha'}
                            label="Confirmar senha"
                            password
                        />

                        <S.LostPass>
                            <Checkbox
                                name={'termos'}
                                label="Li e aceito os termos de uso"
                            />
                        </S.LostPass>
                        <Button>
                            Cadastrar
                        </Button>
                    </form>
                </S.Cadastro>
            </S.FormContainer>
        </S.Container>
    );
}
