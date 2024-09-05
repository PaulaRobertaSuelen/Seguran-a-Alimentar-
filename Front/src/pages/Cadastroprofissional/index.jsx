import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import * as S from './styles';
import Ondaleve from '../../assets/svg/ondaleve.svg';
import Localizacao from '../../assets/svg/localizacao.svg';
import Celular from '../../assets/svg/celular.svg';
import Cartao from '../../assets/svg/cartao.svg';
import Modal from '../../components/Modal/index';
import Checkbox from '../../components/FormFields/CheckBox';
import TextInput from '../../components/FormFields/Input';

export default function Cadastroprofissional() {
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
        if (!formValues.nome.trim()) {
            errors.nome = 'Nome é obrigatório';
        }
        if (!formValues.email) {
            errors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
            errors.email = 'Email inválido';
        }
        if (!formValues.telefone) {
            errors.telefone = 'Telefone é obrigatório';
        }
        if (!formValues.profissao.trim()) {
            errors.profissao = 'Profissão é obrigatória';
        }
        if (!formValues.especialidade.trim()) {
            errors.especialidade = 'Especialidade é obrigatória';
        }
        if (!formValues.crm.trim()) {
            errors.crm = 'CRM é obrigatório';
        }
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmitting(true);
    };

    React.useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmitting) {
            navigate('/home/profissional');
        }
    }, [formErrors]);

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
                    <S.Form onSubmit={handleSubmit}>
                        <TextInput
                            type="text"
                            name="nome"
                            placeholder="Nome"
                            value={formValues.nome}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.nome && <p>{formErrors.nome}</p>}

                        <TextInput
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formValues.email}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.email && <p>{formErrors.email}</p>}

                        <TextInput
                            type="tel"
                            name="telefone"
                            placeholder="Telefone"
                            value={formValues.telefone}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.telefone && <p>{formErrors.telefone}</p>}

                        <TextInput
                            type="text"
                            name="profissao"
                            placeholder="Profissão"
                            value={formValues.profissao}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.profissao && <p>{formErrors.profissao}</p>}

                        <TextInput
                            type="text"
                            name="especialidade"
                            placeholder="Especialidade"
                            value={formValues.especialidade}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.especialidade && (
                            <p>{formErrors.especialidade}</p>
                        )}

                        <TextInput
                            type="text"
                            name="crm"
                            placeholder="CRM"
                            value={formValues.crm}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.crm && <p>{formErrors.crm}</p>}

                        <TextInput
                            type="password"
                            name="senha"
                            placeholder="Senha"
                            value={formValues.senha}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.senha && <p>{formErrors.senha}</p>}

                        <TextInput
                            type="password"
                            name="confirmarSenha"
                            placeholder="Confirmar Senha"
                            value={formValues.confirmarSenha}
                            onChange={handleInputChange}
                            required
                        />
                        {formErrors.confirmarSenha && (
                            <p>{formErrors.confirmarSenha}</p>
                        )}

                        <S.LostPass>
                            <Checkbox
                                name="termosAceitos"
                                label={
                                    <>
                                        Li e aceito os{' '}
                                        <a onClick={() => setOpenTermos(true)}>
                                            termos de uso
                                        </a>
                                    </>
                                }
                                checked={formValues.termosAceitos}
                                onChange={handleInputChange}
                                required
                            />
                            {formErrors.termosAceitos && (
                                <p>{formErrors.termosAceitos}</p>
                            )}
                        </S.LostPass>

                        <S.Termos>
                            <Modal
                                isOpen={openTermos}
                                handleClose={() => setOpenTermos(false)}
                            >
                                <p> Termos de Uso</p>
                                <p>Data de Vigência: [20/08/2024]</p>
                                <p>
                                    Bem-vindo ao [BemTEA] (“BemTEA”). Estes
                                    Termos de Uso Termos regem o uso de nosso
                                    Site e os serviços oferecidos. Ao acessar e
                                    usar nosso Site, você concorda com estes
                                    Termos. Caso não concorde com algum dos
                                    termos abaixo, por favor, não utilize nosso
                                    Site.
                                </p>
                                <p>
                                    1. Descrição dos Serviços O BemTEA é uma
                                    plataforma que conecta profissionais da
                                    saúde especializados em Transtorno do
                                    Espectro Autista (TEA) com pacientes em
                                    busca de atendimento especializado. Nosso
                                    objetivo é facilitar o encontro entre
                                    profissionais qualificados e indivíduos ou
                                    responsáveis que necessitam de assistência
                                    relacionada ao TEA.
                                </p>
                                <p>
                                    2.Aceitação dos Termos Ao acessar e usar
                                    nosso Site, você concorda em cumprir e estar
                                    vinculado por estes Termos, bem como por
                                    todas as leis e regulamentos aplicáveis. Se
                                    você não concordar com estes Termos, sua
                                    única opção é não utilizar o Site.
                                </p>
                                <p>
                                    3. Cadastro e Conta Para acessar os
                                    serviços, você deverá criar uma conta
                                    fornecendo informações verdadeiras, precisas
                                    e completas. Você é responsável por manter a
                                    confidencialidade de sua conta e senha, bem
                                    como por todas as atividades realizadas sob
                                    sua conta.{' '}
                                </p>
                                <p>
                                    4. Pagamento e Remuneração Os profissionais
                                    da saúde cadastrados na plataforma são
                                    remunerados diretamente pelos pacientes.{' '}
                                </p>
                                <p>
                                    5. Privacidade e Proteção de Dados Pessoais
                                    O BemTEA se compromete a proteger a
                                    privacidade dos usuários e a segurança dos
                                    dados pessoais coletados. A coleta e o uso
                                    de informações pessoais estão sujeitos à
                                    nossa Política de Privacidade.
                                </p>
                            </Modal>
                        </S.Termos>

                        <button type="submit">Cadastrar</button>
                    </S.Form>
                </S.FormSection>
            </S.Container>
        </S.PageWrapper>
    );
}
