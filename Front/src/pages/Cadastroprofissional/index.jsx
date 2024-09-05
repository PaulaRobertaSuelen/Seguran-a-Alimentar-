import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Localizacao from '../../assets/svg/localizacao.svg';
import Celular from '../../assets/svg/celular.svg';
import Cartao from '../../assets/svg/cartao.svg';
import Modal from '../../components/Modal';
import Checkbox from '../../components/FormFields/CheckBox';
import useAuth from '../../services/useAuth';
import TextInput from '../../components/FormFields/Input';

export default function Cadastroprofissional() {
    const { regist } = useAuth();
    const navigate = useNavigate();
    const [openTermos, setOpenTermos] = useState(false);
    const [formValues, setFormValues] = useState({
        nome: '',
        email: '',
        telefone: '',
        profissao: '',
        especialidade: '',
        crm: '',
        senha: '',
        confirmarSenha: '',
        termosAceitos: false,
    });
    const [formErrors, setFormErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormValues({
            ...formValues,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const validate = () => {
        let errors = {};
        if (!formValues.nome.trim()) errors.nome = 'Nome é obrigatório';
        if (!formValues.email) {
            errors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email inválido';
        }
        if (!formValues.telefone) errors.telefone = 'Telefone é obrigatório';
        if (!formValues.profissao.trim())
            errors.profissao = 'Profissão é obrigatória';
        if (!formValues.especialidade.trim())
            errors.especialidade = 'Especialidade é obrigatória';
        if (!formValues.crm.trim()) errors.crm = 'CRM é obrigatório';
        if (!formValues.senha) {
            errors.senha = 'Senha é obrigatória';
        } else if (formValues.senha.length < 6) {
            errors.senha = 'A senha precisa ter no mínimo 6 caracteres';
        }
        if (!formValues.confirmarSenha) {
            errors.confirmarSenha = 'Confirmação de senha é obrigatória';
        } else if (formValues.confirmarSenha !== formValues.senha) {
            errors.confirmarSenha = 'As senhas não coincidem';
        }
        if (!formValues.termosAceitos) {
            errors.termosAceitos = 'Você deve aceitar os termos de uso';
        }
        return errors;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = validate();
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            setIsSubmitting(true);
        }
    };

    useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            const data = {
                nome: formValues.nome,
                email: formValues.email,
                telefone: formValues.telefone,
                profissao: formValues.profissao,
                especialidade: formValues.especialidade,
                crm: formValues.crm,
                senha: formValues.senha,
                confirmarSenha: formValues.confirmarSenha,
                termosAceitos: formValues.termosAceitos,
            };

            regist(data)
                .then(() => {
                    alert('Registro realizado com sucesso!');
                    navigate('/login');
                })
                .catch((error) => {
                    alert(error.response.data.error);
                });
        }
    }, [formErrors, isSubmitting, navigate, regist]);

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
                <form onSubmit={handleSubmit}>
                    <S.FormSection>
                        <h3>Formulário</h3>
                        <S.Form>
                            <TextInput
                                name="nome"
                                type="text"
                                placeholder="Nome"
                                value={formValues.nome}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="Email"
                                value={formValues.email}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="telefone"
                                type="tel"
                                placeholder="Telefone"
                                value={formValues.telefone}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="profissao"
                                type="text"
                                placeholder="Profissão"
                                value={formValues.profissao}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="especialidade"
                                type="text"
                                placeholder="Especialidade"
                                value={formValues.especialidade}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="crm"
                                type="text"
                                placeholder="CRM"
                                value={formValues.crm}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="senha"
                                type="password"
                                placeholder="Senha"
                                value={formValues.senha}
                                onChange={handleInputChange}
                                required
                            />
                            <TextInput
                                name="confirmarSenha"
                                type="password"
                                placeholder="Confirmar Senha"
                                value={formValues.confirmarSenha}
                                onChange={handleInputChange}
                                required
                            />
                            <S.LostPass>
                                <Checkbox
                                    name={'termosAceitos'}
                                    label={
                                        <>
                                            Li e aceito os{' '}
                                            <a
                                                onClick={() =>
                                                    setOpenTermos(true)
                                                }
                                            >
                                                termos de uso
                                            </a>
                                        </>
                                    }
                                    checked={formValues.termosAceitos}
                                    onChange={handleInputChange}
                                />
                            </S.LostPass>

                            <button type="submit">Cadastrar</button>

                            <S.Termos>
                                <Modal
                                    isOpen={openTermos}
                                    handleClose={() => setOpenTermos(false)}
                                >
                                    {/* Conteúdo do modal */}
                                </Modal>
                            </S.Termos>
                        </S.Form>
                    </S.FormSection>
                </form>
            </S.Container>
        </S.PageWrapper>
    );
}
