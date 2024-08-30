import React from 'react';
import Navbar from '../../components/Navbar';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Localizacao from '../../assets/svg/localizacao.svg';
import Celular from '../../assets/svg/celular.svg';
import Cartao from '../../assets/svg/cartao.svg';
import { useNavigate } from 'react-router-dom';

export default function Cadastroprofissional() {
    const navigate = useNavigate();

    return (
        <S.PageWrapper backgroundImage={Ondaleve}>
            <Navbar />
            <S.Container>
                <S.InfoSection>
                    <h2>Por que atender no BemTEA?</h2>
                    <S.InfoCards>
                        <S.InfoCard>
                            <img src={Localizacao} alt="Localização" />
                            <p>
                                Possibilidade de atender pessoas de todo o país.
                            </p>
                        </S.InfoCard>
                        <S.InfoCard>
                            <img src={Celular} alt="Celular" />
                            <p>Ambiente virtual seguro e privado.</p>
                        </S.InfoCard>
                        <S.InfoCard>
                            <img src={Cartao} alt="Cartão" />
                            <p>
                                Você recebe o pagamento diretamente do paciente.
                            </p>
                        </S.InfoCard>
                    </S.InfoCards>
                </S.InfoSection>

                <S.StepsSection>
                    <h3>Como fazer parte?</h3>
                    <ol>
                        <li>Envie suas informações pelo formulário abaixo.</li>
                        <li>
                            Aguarde que o cadastro esteja concluído e as
                            informações verificadas; seu perfil estará no ar.
                        </li>
                        <li>
                            Os usuários entrarão em contato através do seu
                            WhatsApp, que ficará disponível no seu perfil.
                        </li>
                        <li>
                            Os horários de atendimento, preço e plataforma de
                            contato podem ser combinados entre você e o
                            paciente.
                        </li>
                        <li>
                            No horário combinado, realize o atendimento através
                            do aplicativo da sua escolha.
                        </li>
                    </ol>
                    <p>
                        Em caso de dúvidas, entre em contato pelo nosso email:
                        [email]
                    </p>
                </S.StepsSection>

                <S.FormSection>
                    <h3>Formulário</h3>
                    <S.Form>
                        <input type="text" placeholder="Nome" required />
                        <input type="email" placeholder="Email" required />
                        <input type="tel" placeholder="Telefone" required />
                        <input type="text" placeholder="Profissão" required />
                        <input
                            type="text"
                            placeholder="Especialidade"
                            required
                        />
                        <input type="text" placeholder="CRM" required />
                        <input type="password" placeholder="Senha" required />
                        <input
                            type="password"
                            placeholder="Confirmar Senha"
                            required
                        />
                        <S.Terms>
                            <input className="check" type="checkbox" required />
                            <label htmlFor="terms">
                                Li e aceito os{' '}
                                <a href="#terms">termos de uso</a>
                            </label>
                        </S.Terms>
                        <button
                            type="submit"
                            onClick={() => navigate('/Homepro')}
                        >
                            Cadastrar
                        </button>
                    </S.Form>
                </S.FormSection>
            </S.Container>
        </S.PageWrapper>
    );
}
