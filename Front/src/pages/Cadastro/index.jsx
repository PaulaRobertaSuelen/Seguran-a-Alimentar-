import { useState } from 'react';
// import Ondatwo from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/logo.png';
import * as S from './styles';
// import BotaoVoltar from '../../components/BotaoVoltar';
// import iconeAutismo from '../../assets/svg/iconeAutismo.svg';
// import VerificadorSenha from '../../components/VerificadorSenha';
import { MdEmail } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { TbLockFilled } from "react-icons/tb";

export default function Cadastro() {
    const [novaSenha, setNovaSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const handleNovaSenhaChange = (event) => {
        setNovaSenha(event.target.value);
    };

    const handleConfirmarSenhaChange = (event) => {
        setConfirmarSenha(event.target.value);
    };

    const handleRedefinirSenha = () => {
        // Lógica para redefinir a senha
        console.log('Senha redefinida:', novaSenha);
    };

    return (
        <S.Pai>
             <S.Tela>
                <S.Logo>
                    {/* <img src={Ondatwo} alt="Back" /> */}
                    <img src={Logo} alt="Logo" />
                    
                </S.Logo>
                {/* <S.ImagemBack>
                <img src={Ondatwo} alt="Back" />
                </S.ImagemBack>
                 */}
            </S.Tela>

            <S.Conteiner>

            {/* <S.Botaodecima>
                <BotaoVoltar />
             </S.Botaodecima> */}


            <S.Redefinir>
                <S.CadastroTitle>CADASTRO</S.CadastroTitle>
                {/* <img src={iconeAutismo} alt="icone" /> */}
            </S.Redefinir>

           

            
            <S.FormContainer>
            <S.Teste> 
                <S.InputContainer>
                    {/* <S.InputLabel> NOME </S.InputLabel> */}
                    <S.IconContainer>
                    <IoPerson size={35} color="#4377FF"/>
                    </S.IconContainer>
                    <S.Input
                        type=""
                        placeholder="Digite seu Nome"
                    />
                </S.InputContainer>
                <S.InputContainer>
                    {/* <S.InputLabel> E-mail </S.InputLabel> */}
                    <S.IconContainer>
                    <MdEmail size={35} color="#4377FF"/>
                    </S.IconContainer>
                    <S.Input
                        type="" 
                        placeholder="Digite seu e-mail"
                    />
                </S.InputContainer>

                <S.InputContainer>
                    {/* <S.InputLabel> SENHA </S.InputLabel> */}
                    <S.IconContainer>
                    <TbLockFilled size={35} color="#4377FF"/>
                    </S.IconContainer>
                    <S.Input
                        type="password"
                        value={novaSenha}
                        onChange={handleNovaSenhaChange}
                        placeholder="Digite sua senha"
                    />
                </S.InputContainer>

                <S.InputContainer>
                    {/* <S.InputLabel> CONFIRMAR SENHA </S.InputLabel> */}
                <S.IconContainer>
                    <TbLockFilled size={35} color="#4377FF"/>
                    </S.IconContainer>
                    <S.Input
                        type="password"
                        value={confirmarSenha}
                        onChange={handleConfirmarSenhaChange}
                        placeholder="Confirmar senha"
                    />
                </S.InputContainer>
                    <S.Imput><input type="checkbox"
                    size={20} color="#4377FF"/> 
                    <S.Termos>li e aceito os termos de uso</S.Termos>
                    </S.Imput>
                    <S.BotaoRedefinir onClick={handleRedefinirSenha}>
                    Cadastrar
                    </S.BotaoRedefinir>
                    </S.Teste>
                </S.FormContainer>
            </S.Conteiner>
 
        </S.Pai>
    );
}