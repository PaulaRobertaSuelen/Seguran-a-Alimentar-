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
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
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

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = {
            nome: formData.get('nome'),
            email: formData.get('email'),
            telefone: formData.get('telefone'),
            profissao: formData.get('profissao'),
            especialidade: formData.get('especialidade'),
            crm: formData.get('crm'),
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

        return regist(data)
            .then((response) => {
                alert('Registro realizado com sucesso!');
                navigate('/login');
            })
            .catch((error) => {
                alert(error.response.data.error);
            });
    };
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
                                required
                            />
                            <TextInput
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                            />
                            <TextInput
                                name="telefone"
                                type="tel"
                                placeholder="Telefone"
                                required
                            />
                            <TextInput
                                name="profissao"
                                type="text"
                                placeholder="Profissão"
                                required
                            />
                            <TextInput
                                name="especialidade"
                                type="text"
                                placeholder="Especialidade"
                                required
                            />
                            <TextInput
                                name="crm"
                                type="text"
                                placeholder="CRM"
                                required
                            />
                            <TextInput
                                name="senha"
                                type="password"
                                placeholder="Senha"
                                required
                            />
                            <TextInput
                                name="confirmSenha"
                                type="password"
                                placeholder="Confirmar Senha"
                                required
                            />
                            <S.LostPass>
                                <Checkbox
                                    name={'termos'}
                                    label={
                                        <>
                                            Li e aceito os{' '}
                                            <a
                                                onClick={() =>
                                                    setOpenTermos(true)
                                                }
                                            >
                                                termos de uso{' '}
                                            </a>
                                        </>
                                    }
                                />
                            </S.LostPass>

                            <button type="submit">Cadastrar</button>

                            <S.Termos>
                                <Modal
                                    isOpen={openTermos}
                                    handleClose={() => setOpenTermos(false)}
                                >
                                    <p> Termos de Uso</p>
                                    <p>Data de Vigência: [20/08/2024]</p>
                                    <p>
                                        Bem-vindo ao [BemTEA] (“BemTEA”). Estes
                                        Termos de Uso Termos regem o uso de
                                        nosso Site e os serviços oferecidos. Ao
                                        acessar e usar nosso Site, você concorda
                                        com estes Termos. Caso não concorde com
                                        algum dos termos abaixo, por favor, não
                                        utilize nosso Site.
                                    </p>
                                    <p>
                                        {' '}
                                        1. Descrição dos Serviços O BemTEA é uma
                                        plataforma que conecta profissionais da
                                        saúde especializados em Transtorno do
                                        Espectro Autista (TEA) com pacientes em
                                        busca de atendimento especializado.
                                        Nosso objetivo é facilitar o encontro
                                        entre profissionais qualificados e
                                        indivíduos ou responsáveis que
                                        necessitam de assistência relacionada ao
                                        TEA.
                                    </p>
                                    <p>
                                        2.Aceitação dos Termos Ao acessar e usar
                                        nosso Site, você concorda em cumprir e
                                        estar vinculado por estes Termos, bem
                                        como por todas as leis e regulamentos
                                        aplicáveis. Se você não concordar com
                                        estes Termos, sua única opção é não
                                        utilizar o Site.
                                    </p>
                                    <p>
                                        3. Cadastro e Conta 3.1 Registro: Para
                                        acessar certas funcionalidades do Site,
                                        você deve criar uma conta. O cadastro
                                        requer informações precisas e completas.
                                        É sua responsabilidade manter a
                                        confidencialidade das informações da sua
                                        conta e notificar-nos imediatamente
                                        sobre qualquer uso não autorizado. 3.2
                                        Responsabilidade: Você é responsável por
                                        todas as atividades realizadas através
                                        da sua conta. O BemTea não será
                                        responsável por qualquer dano decorrente
                                        do uso não autorizado da sua conta.
                                    </p>
                                    <p>
                                        4. Uso do Site 4.1 Proibição de Abuso:
                                        Você concorda em não utilizar o Site
                                        para qualquer propósito ilegal ou não
                                        autorizado. É proibido publicar,
                                        transmitir ou disponibilizar qualquer
                                        conteúdo que seja ofensivo, difamatório,
                                        enganoso ou violador de direitos de
                                        terceiros. 4.2 Interação com
                                        Profissionais: O BemTEA não é
                                        responsável pela qualidade, precisão ou
                                        eficácia dos serviços prestados pelos
                                        profissionais de saúde listados no Site.
                                        As interações entre pacientes e
                                        profissionais devem ser realizadas com
                                        cautela e sob sua própria
                                        responsabilidade.
                                    </p>
                                    <p>
                                        5. Proteção de Dados 5.1 Privacidade: A
                                        coleta e o uso de suas informações
                                        pessoais estão sujeitos à nossa Política
                                        de Privacidade, que está incorporada a
                                        estes Termos por referência.
                                        Recomendamos que você leia nossa
                                        Política de Privacidade para entender
                                        como suas informações são tratadas. 5.2
                                        Consentimento: Ao usar nosso Site, você
                                        consente com a coleta e o uso de suas
                                        informações conforme descrito na nossa
                                        Política de Privacidade.
                                    </p>
                                    <p>
                                        {' '}
                                        6. Propriedade Intelectual Todo o
                                        conteúdo e materiais disponibilizados no
                                        Site, incluindo, mas não se limitando a,
                                        textos, gráficos, logotipos e software,
                                        são propriedade do BemTEA ou de seus
                                        licenciadores e estão protegidos por
                                        leis de direitos autorais e outras leis
                                        de propriedade intelectual. É proibido
                                        copiar, modificar, distribuir ou exibir
                                        qualquer material do Site sem nossa
                                        autorização expressa.
                                    </p>
                                    <p>
                                        {' '}
                                        7. Isenção de Responsabilidade O BemTEA
                                        fornece a plataforma para conectar
                                        profissionais e pacientes, mas não
                                        endossa ou garante a qualidade dos
                                        serviços prestados por profissionais de
                                        saúde. O uso do Site é feito por sua
                                        conta e risco. O BemTEA não se
                                        responsabiliza por qualquer dano, perda
                                        ou prejuízo resultante da utilização do
                                        Site ou dos serviços oferecidos.
                                    </p>
                                    <p>
                                        {' '}
                                        8. Modificações Podemos atualizar estes
                                        Termos a qualquer momento. Notificaremos
                                        você sobre quaisquer mudanças
                                        substanciais através de um aviso no
                                        Site. É sua responsabilidade revisar
                                        regularmente estes Termos para estar
                                        ciente de quaisquer alterações. O uso
                                        contínuo do Site após a modificação dos
                                        Termos constitui aceitação das mudanças.
                                    </p>
                                    <p>
                                        {' '}
                                        9. Encerramento Podemos suspender ou
                                        encerrar sua conta a qualquer momento,
                                        com ou sem motivo, se considerarmos que
                                        você violou estes Termos ou que o uso da
                                        sua conta está em desacordo com nossas
                                        políticas.
                                    </p>
                                    <p>
                                        10. Lei Aplicável e Jurisdição Estes
                                        Termos serão regidos e interpretados de
                                        acordo com as leis do Estado/País, sem
                                        considerar os princípios de conflito de
                                        leis. Quaisquer disputas que surgirem em
                                        relação a estes Termos serão resolvidas
                                        exclusivamente nos tribunais competentes
                                        do Estado/País.
                                    </p>
                                    <p> Última atualização: [28/08/2024]</p>
                                </Modal>
                            </S.Termos>
                        </S.Form>
                    </S.FormSection>
                </form>
            </S.Container>
        </S.PageWrapper>
    );
}
