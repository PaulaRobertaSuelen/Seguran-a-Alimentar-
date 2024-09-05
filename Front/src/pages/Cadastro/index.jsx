import { MdEmail, MdLock } from 'react-icons/md';
import { FaUserAlt } from 'react-icons/fa';
import * as S from './styles';
import Onda from '../../assets/svg/ondaOne.svg';
import Logo from '../../assets/svg/logoS.svg';
import Button from '../../components/FormFields/Button';
import TextInput from '../../components/FormFields/Input';
import Checkbox from '../../components/FormFields/CheckBox';
import api from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import Modal from '../../components/Modal';
import { useState } from 'react';


export default function Cadastro() {
    const navigate = useNavigate();

    const [openTermos, setOpenTermos] = useState(false);
    const [email,setEmail] = useState('')
    const [senha,setSenha] = useState('')
    const [telefone,setTelefone] = useState('')
    const [profissao,setProfissao] = useState('')
    const [tipo_usuario,setTipo_usuario] = useState('')
    const [especialidade,setEspecialidade] = useState('')
    const [crn,setCrn] = useState('')
    const [nome,setNome] = useState('')
    const [confirmSenha,setConfirmSenha] = useState('')
    const [termos,setTermos] = useState(false)
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = {
                nome: nome,
                email: email,
                telefone: telefone,
                senha: senha,
                tipo_usuario: tipo_usuario,
                profissao: profissao,
                especialidade: especialidade,
                crn: crn,
            };
            if (data.senha !== confirmSenha) {
                return alert('As senhas precisam ser iguais');
            }
    
            if (termos === false) {
                return alert('Aceite os termos de uso');
            }
            await api.post('/user/create',
                data
            ).then((response) => {
                console.log('Usuário cadastrado com sucesso')
                navigate('/login')
            }).catch((error) => {
                console.log(error)
            })
        } catch (error) {
            console.log(error)
        }
    };

    const isEmailValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //     const data = {
    //         nome: formData.get('nome'),
    //         email: formData.get('email'),
    //         telefone: formData.get('telefone'),
    //         senha: formData.get('senha'),
    //         confirmSenha: formData.get('confirmSenha'),
    //         tipo_usuario: formData.get('tipo_usuario'),
    //         termos: formData.get('termos'),
    //         profissao: formData.get('profissao'),
    //         especialidade: formData.get('especialidade'),
    //         crn: formData.get('crn'),
    //     };

    //     if (data.senha !== data.confirmSenha) {
    //         return alert('As senhas precisam ser iguais');
    //     }

    //     if (!data.termos) {
    //         return alert('Aceite os termos de uso');
    //     }

    //     return register(data)
    //         .then((response) => {
    //             alert('Registro realizado com sucesso!');
    //             navigate('/login');
    //         })
    //         .catch((error) => {
    //             alert(error.response.data.error);
    //         });
    // };

    return (
        <S.Container>
            <S.AsideContainer>
                <img src={Onda} className="background" alt="Background" />
                <img src={Logo} className="logo" alt="Logo" />
            </S.AsideContainer>
            <S.FormContainer>
                <S.Cadastro>
                    <h1>Cadastro</h1>

                    <form onSubmit={handleSubmit}>
                        <TextInput
                            name={'nome'}
                            label="Nome"
                            iconLeft={<FaUserAlt color="#4377FF" />}
                            required
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <TextInput
                            name={'email'}
                            label="Email"
                            iconLeft={<MdEmail color="#4377FF" />}
                            type="email"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <TextInput
                            name={'telefone'}
                            label="Telefone"
                            iconLeft={<FaUserAlt color="#4377FF" />}
                            required
                            onChange={(e) => setTelefone(e.target.value)}
                        />
                        <TextInput
                            name={'senha'}
                            label="Senha"
                            type="password"
                            required
                            onChange={(e) => setSenha(e.target.value)}
                        />
                        <TextInput
                            name={'confirmSenha'}
                            label="Confirmar senha"
                            type="password"
                            required
                            onChange={(e) => setConfirmSenha(e.target.value)}
                        />

                        {/* Seleção de tipo de usuário */}
                        <S.RadioGroup>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="comum"
                                    checked={tipo_usuario === 'comum'}
                                    onChange={() => setTipo_usuario('comum')}
                                />
                                Comum
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="userType"
                                    value="profissional"
                                    checked={tipo_usuario === 'profissional'}
                                    onChange={() => setTipo_usuario('profissional')}
                                />
                                Profissional
                            </label>
                        </S.RadioGroup>

                        {/* Campos exclusivos para profissionais */}
                        {tipo_usuario === 'profissional' && (
                            <S.CampoProfissional>
                            <TextInput
                            name={'profissao'}
                            label="Profissão"
                            placeholder="Digite sua profissão"
                            required
                            onChange={(e) => setProfissao(e.target.value)}
                        />
                            <TextInput
                                name={'especialidade'}
                                label="Especialidade"
                                placeholder="Digite sua especialidade"
                                required
                                onChange={(e) => setEspecialidade(e.target.value)}
                            />
                            <TextInput
                                name={'crn'}
                                label="CRN"
                                placeholder="Digite seu CRN"
                                required
                                onChange={(e) => setCrn(e.target.value)}
                            />
                            </S.CampoProfissional>
                        )}

                        <S.LostPass>
                            <Checkbox
                                name={'termos'}
                                label={
                                    <>
                                        Li e aceito os{' '}
                                        <a onClick={() => setOpenTermos(true)}>
                                            termos de uso
                                        </a>
                                    </>
                                }
                                onClick={() => setTermos(true)}
                                required
                            />
                        </S.LostPass>

                        <S.But>
                            <Button styles={{ width: '40%', padding: '10px' }}>
                                Cadastrar
                            </Button>
                        </S.But>
                    </form>
                </S.Cadastro>
            </S.FormContainer>
            <Modal isOpen={openTermos} handleClose={() => setOpenTermos(false)}>
                <p>Termos de Uso</p>
                <p>Data de Vigência: [20/08/2024]</p>
                <p>
                    Bem-vindo ao [BemTEA] (“BemTEA”). Estes Termos de Uso regem
                    o uso de nosso Site e os serviços oferecidos. Ao acessar e
                    usar nosso Site, você concorda com estes Termos. Caso não
                    concorde com algum dos termos abaixo, por favor, não utilize
                    nosso Site.
                </p>
                <p>
                    1. Descrição dos Serviços O BemTEA é uma plataforma que
                    conecta profissionais da saúde especializados em Transtorno
                    do Espectro Autista (TEA) com pacientes em busca de
                    atendimento especializado. Nosso objetivo é facilitar o
                    encontro entre profissionais qualificados e indivíduos ou
                    responsáveis que necessitam de assistência relacionada ao
                    TEA.
                </p>
                <p>
                    2. Aceitação dos Termos Ao acessar e usar nosso Site, você
                    concorda em cumprir e estar vinculado por estes Termos, bem
                    como por todas as leis e regulamentos aplicáveis. Se você
                    não concordar com estes Termos, sua única opção é não
                    utilizar o Site.
                </p>
                <p>
                    3. Cadastro e Conta 3.1 Registro: Para acessar certas
                    funcionalidades do Site, você deve criar uma conta. O
                    cadastro requer informações precisas e completas. É sua
                    responsabilidade manter a confidencialidade das informações
                    da sua conta e notificar-nos imediatamente sobre qualquer
                    uso não autorizado. 3.2 Responsabilidade: Você é responsável
                    por todas as atividades realizadas através da sua conta. O
                    BemTEA não será responsável por qualquer dano decorrente do
                    uso não autorizado da sua conta.
                </p>
                <p>
                    4. Uso do Site 4.1 Proibição de Abuso: Você concorda em não
                    utilizar o Site para qualquer propósito ilegal ou não
                    autorizado. É proibido publicar, transmitir ou
                    disponibilizar qualquer conteúdo que seja ofensivo,
                    difamatório, enganoso ou violador de direitos de terceiros.
                    4.2 Interação com Profissionais: O BemTEA não é responsável
                    pela qualidade, precisão ou eficácia dos serviços prestados
                    pelos profissionais de saúde listados no Site. As interações
                    entre pacientes e profissionais devem ser realizadas com
                    cautela e sob sua própria responsabilidade.
                </p>
                <p>
                    5. Proteção de Dados 5.1 Privacidade: A coleta e o uso de
                    suas informações pessoais estão sujeitos à nossa Política de
                    Privacidade, que está incorporada a estes Termos por
                    referência. Recomendamos que você leia nossa Política de
                    Privacidade para entender como suas informações são
                    tratadas. 5.2 Consentimento: Ao usar nosso Site, você
                    consente com a coleta e o uso de suas informações conforme
                    descrito na nossa Política de Privacidade.
                </p>
                <p>
                    6. Propriedade Intelectual Todo o conteúdo e materiais
                    disponibilizados no Site, incluindo, mas não se limitando a,
                    textos, gráficos, logotipos e software, são propriedade do
                    BemTEA ou de seus licenciadores e estão protegidos por leis
                    de direitos autorais e outras leis de propriedade
                    intelectual. É proibido copiar, modificar, distribuir ou
                    exibir qualquer material do Site sem nossa autorização
                    expressa.
                </p>
                <p>
                    7. Isenção de Responsabilidade O BemTEA fornece a plataforma
                    para conectar profissionais e pacientes, mas não endossa ou
                    garante a qualidade dos serviços prestados por profissionais
                    de saúde. O uso do Site é feito por sua conta e risco. O
                    BemTEA não se responsabiliza por qualquer dano, perda ou
                    prejuízo resultante da utilização do Site ou dos serviços
                    oferecidos.
                </p>
                <p>
                    8. Modificações Podemos atualizar estes Termos a qualquer
                    momento. Notificaremos você sobre quaisquer mudanças
                    substanciais através de um aviso no Site. É sua
                    responsabilidade revisar regularmente estes Termos para
                    estar ciente de quaisquer alterações. O uso contínuo do Site
                    após a modificação dos Termos constitui aceitação das
                    mudanças.
                </p>
                <p>
                    9. Encerramento Podemos suspender ou encerrar sua conta a
                    qualquer momento, com ou sem motivo, se considerarmos que
                    você violou estes Termos ou que o uso da sua conta está em
                    desacordo com nossas políticas.
                </p>
                <p>
                    10. Lei Aplicável e Jurisdição Estes Termos serão regidos e
                    interpretados de acordo com as leis do Estado/País, sem
                    considerar os princípios de conflito de leis. Quaisquer
                    disputas que surgirem em relação a estes Termos serão
                    resolvidas exclusivamente nos tribunais competentes do
                    Estado/País.
                </p>
                <p>Última atualização: [28/08/2024]</p>
            </Modal>
        </S.Container>
    );
}