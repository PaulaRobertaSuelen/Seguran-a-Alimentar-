import React, { useState } from 'react';

import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/Footer';

import Ondas3 from "../../assets/ondas-final.png";
import Mother from '../../assets/mother.png';
import FotoPC from "../../assets/foto-computador.png";
import Olho from "../../assets/olho.png";
import Mira from "../../assets/mira.png";
import Lampada from "../../assets/lampada.png";
import OndasDoMeio from "../../assets/ondas-do-meio.png";
import Legumes from "../../assets/comendo-legumes.png"

import * as S from './styles';

const faqs = [
    {
        question: "Como posso entrar em contato com um nutricionista pela plataforma?",
        answer: "Cadastre-se e crie um perfil usando um email e senha. Depois que fizer o login, utilize a aba de serviços para pesquisar por um profissional."
    },
    {
        question: "Quais são as formas de pagamento são aceitas?",
        answer: "Ao entrar em contato com um nutricionista, vocês mesmos escolhem qual forma de pagamento vocês usarão (geralmente PIX)."
    },
    {
        question: "Como funciona o sistema de assinatura para nutricionistas?",
        answer: "Ao clicar na aba 'SOU PROFISSIONAL', basta preencher os campos do formulário e pagar uma taxa simbólica de R$15 via PicPay mensalmente para manter seu perfil ativo e visível para os usuários."
    }
];

export default function Home() {

    const [visibleAnswer, setVisibleAnswer] = useState(null);

    const toggleAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
    };

    return (
        <>

            <S.OndasEstilo>
                <p> </p>
            </S.OndasEstilo>

            <Navbar />

            <S.BodyUm>

                <S.BackgroundContainer>

                    <S.TituloUm>
                        <h1>REFEIÇÕES SEM PROBLEMAS.</h1>
                        <h2>Junte-se a uma plafatorma que une nutricionistas especializados em TEA e pais atípicos.</h2>
                    </S.TituloUm>

                    <S.ComendoLegumes src={Legumes} alt="menina-comendo-legumes" />

                </S.BackgroundContainer>

                <S.NosConheca>
                    <h1>Nos conheça</h1>
                    <S.QuadroConhecer>
                        <S.TextosConhecer>
                            <S.Card>
                                <S.Barra><p> </p></S.Barra>
                                <S.Descricao>
                                <h2>Por que buscar terapia de nutrição?</h2>
                                <p>Muitas pessoas que possuem o TEA encontram desafios quando lidam com a seletividade alimentar e o excesso de estímulo sensorial, dificultando a sua alimentação e nutrição. A terapia nutricional serve de grande ajuda a superar essas barreiras.</p>
                                </S.Descricao>
                            </S.Card>
                            <S.Card>
                                <S.Barra></S.Barra>
                                <S.Descricao>
                                <h2>Sobre nós</h2>
                                <p>No BemTEA, acreditamos que cada criança merece o melhor suporte possível. Nossa plataforma foi criada para conectar cuidadores de crianças com TEA a nutricionistas especializados, facilitando o acesso a profissionais qualificados e dedicados.</p>
                                </S.Descricao>
                            </S.Card>
                        </S.TextosConhecer>
                        <S.Mae src={Mother} alt="mãe-e-menina" />
                    </S.QuadroConhecer>
                </S.NosConheca>

                <S.VideoContainer>
                    <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/YaoHN6Z3WsI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    ></iframe>
                </S.VideoContainer>

            </S.BodyUm>

            <S.OndasMeio src={OndasDoMeio} alt="ondas-do-meio"/>

            <S.BodyDois>

                <S.ConteudoDois>
                    <h1>Como funciona a terapia nutricional online?</h1>
                    <S.ComoFunciona>
                        <S.BarraDois><p> </p></S.BarraDois>
                        <S.TextoFunciona>
                            <p>O BemTEA oferece uma forma simples de encontrar e contatar nutricionistas especializados em TEA. <span>Crie um perfil</span> com seu email e telefone e pesquise pelo seu profissional ideal na área de <span>Serviços</span>.</p>
                            <p>Quando fizer a sua escolha, clique no perfil do profissional e comunique-se com ele(a) através do Whatsapp ou Email. Combinem como e por onde farão as consultas, e a forma de pagamento.</p>
                        </S.TextoFunciona>
                    </S.ComoFunciona>
                    <S.FotoComputador src={FotoPC} alt="pessoa-celular-computador"/>


                    <S.Compromisso>
                        <h1>Nosso compromisso</h1>
                        <S.ViMiId>
                            <S.ViMiIdConteudo>
                                <h2>Visão</h2>
                                <S.Visao src={Olho} alt="olho"/>
                                <p>Criar um futuro onde crianças e pais atípicos tenham acesso fácil a suporte nutricional especializado, promovendo uma vida mais saudável e equilibrada.</p>
                            </S.ViMiIdConteudo>
                            <S.ViMiIdConteudo>
                                <h2>Missão</h2>
                                <S.Missao src={Mira} alt="mira"/>
                                <p>Oferecer uma solução prática para famílias que precisam de orientação nutricional especializada para desafios alimentares de crianças com TEA.</p>
                            </S.ViMiIdConteudo>
                            <S.ViMiIdConteudo>
                                <h2>Ideal</h2>
                                <S.Ideal src={Lampada} alt="lampada"/>
                                <p>Construir uma comunidade onde a conexão entre cuidadores e nutricionistas seja facilitada, com acesso fácil, qualidade, confiança, comunicação eficiente e impacto positivo.</p>
                            </S.ViMiIdConteudo>
                        </S.ViMiId>
                    </S.Compromisso>

                    <S.DuvidasFrequentes>
                        <h1>Dúvidas frequentes</h1>
                        <S.FaqContainer>
                            {faqs.map((faq, index) => (
                                <div key={index}>
                                    <S.FaqItem onClick={() => toggleAnswer(index)}>
                                    {faq.question}
                                    <S.FaqAnswer show={visibleAnswer === index}>
                                        {faq.answer}
                                    </S.FaqAnswer>
                                    </S.FaqItem>
                                </div>
                            ))}
                        </S.FaqContainer>
                    </S.DuvidasFrequentes>


                </S.ConteudoDois>
                <S.OndasFinal src={Ondas3} alt="ondas-final"/>
            </S.BodyDois>

            <Footer />

        </>
    );
}
