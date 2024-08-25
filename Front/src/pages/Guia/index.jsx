import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/index.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

const Header = styled.header`
  justify-content: space-between;
  color: black;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 20px;
  font-family: sans-serif;

  h1 {
    margin: 0;
  }
`;

const Main = styled.main`
  padding: 20px 0;
`;

const Section = styled.section`
  margin-bottom: 20px;

  h2, h3, h4 {
    color: #007bff;
  }
`;

const ImageContainer = styled.div`
  margin-left: 25%;
  img {
    width: 50%;
    height: 50%;
  }
`;

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin: 5px 0;
  }
`;

const FooterStyled = styled.footer`
  margin: 5px 0;
  padding: 15px;
  color: black;
  border-radius: 5px;
`;

const Guia = () => {
  return (
    <>
      <Navbar />
      <Header>
        <h1>Seletividade Alimentar</h1>
      </Header>
      <br />
      <Container>
        <Main>
          <ImageContainer className="seletividade">
            <img src="/src/assets/seletividade-alimentar 1.png" alt="Guia" />
          </ImageContainer>
          <Section className="intro">
            <h2>O que é Seletividade Alimentar?</h2>
            <br />
            <p>
              Seletividade alimentar refere-se à tendência de uma pessoa preferir certos alimentos e evitar outros, muitas vezes com base em fatores sensoriais, emocionais ou psicológicos. Essa seletividade pode variar de leve a extrema e pode se manifestar de diferentes maneiras:
            </p>
            <br />
          </Section>
          <Section className="content">
            <h3>1. Fatores Sensoriais</h3>
            <br />
            <ImageContainer className="sensorial">
              <img src="/src/assets/Fatores Sensoriais.png" alt="" />
            </ImageContainer>
            <br />
            <UnorderedList>
              <li><b>Sabor:</b> Algumas pessoas têm aversões a sabores específicos, como amargo ou picante, que podem afetar suas escolhas alimentares.</li>
              <br />
              <li><b>Textura:</b> A textura dos alimentos pode ser um fator importante. Alimentos crocantes, cremosos ou pegajosos podem ser preferidos ou evitados.</li>
              <br />
              <li><b>Aparência:</b> A cor e a aparência dos alimentos também podem influenciar a aceitação. Alimentos que não parecem apetitosos podem ser rejeitados.</li>
              <br />
            </UnorderedList>
            <h3>2. Fatores Emocionais e Psicológicos</h3>
            <br />
            <ImageContainer className="psicologicos">
              <img src="/src/assets/Psicológicos a alimentos.jpg" alt="" />
            </ImageContainer>
            <br />
            <UnorderedList>
              <li><b>Experiências Passadas:</b> Traumas alimentares ou experiências negativas associadas a certos alimentos podem levar a aversões duradouras.</li>
              <br />
              <li><b>Associar Comida a Emoções:</b> Alimentos podem estar ligados a experiências emocionais ou culturais, afetando a forma como são percebidos e aceitos.</li>
              <br />
            </UnorderedList>
            <h3>3. Fatores Culturais e Ambientais</h3>
            <br />
            <ImageContainer className="fatores">
              <img src="/src/assets/fatores.webp" alt="" />
            </ImageContainer>
            <br />
            <UnorderedList>
              <li><b>Tradições Culturais:</b> As tradições e hábitos alimentares da família e da cultura podem influenciar as preferências alimentares e a seletividade.</li>
              <br />
              <li><b>Exposição:</b> A quantidade e a forma como os alimentos são introduzidos na dieta desde a infância podem moldar as preferências alimentares.</li>
              <br />
            </UnorderedList>
            <h3>4. Fatores de Saúde</h3>
            <br />
            <UnorderedList>
              <li><b>Sensibilidades e Intolerâncias:</b> Condições como intolerância à lactose ou alergias alimentares podem levar a uma seletividade alimentar.</li>
              <br />
              <li><b>Problemas Digestivos:</b> Algumas pessoas podem evitar certos alimentos devido a desconforto digestivo ou problemas gastrointestinais.</li>
              <br />
            </UnorderedList>
          </Section>
          <Section className="ages">
            <h3>Seletividade Alimentar em Diferentes Idades</h3>
            <br />
            <ImageContainer className="alimentar">
              <img src="/src/assets/alimentar.jpeg" alt="" />
            </ImageContainer>
            <br />
            <h4>Infância</h4>
            <br />
            <UnorderedList>
              <li>Desenvolvimento do Paladar: A exposição repetida a novos alimentos pode ajudar a ampliar as preferências alimentares das crianças.</li>
              <br />
            </UnorderedList>
            <h4>Adolescência</h4>
            <br />
            <UnorderedList>
              <li>Mudanças de Sabor: Durante a adolescência, os sabores e as preferências alimentares podem mudar. Isso pode ser influenciado por mudanças hormonais e sociais.</li>
              <br />
              <li>Influências Sociais: Amigos e mídias sociais podem impactar as escolhas alimentares dos adolescentes.</li>
              <br />
            </UnorderedList>
            <h4>Adulto</h4>
            <br />
            <UnorderedList>
              <li>Rotina e Preferências: Adultos podem ter preferências alimentares mais consolidadas, mas também podem experimentar mudanças devido a mudanças de saúde ou estilo de vida.</li>
              <br />
              <li>Necessidades Nutricionais: As escolhas alimentares podem ser ajustadas para atender a necessidades nutricionais específicas, como perda de peso ou gerenciamento de condições de saúde.</li>
              <br />
            </UnorderedList>
          </Section>
          <Section className="impact">
            <h3>Impacto da Seletividade Alimentar</h3>
            <br />
            <ImageContainer className="impactos">
              <img src="/src/assets/impactos.jpeg" alt="" />
            </ImageContainer>
            <br />
            <h4>Aspectos Positivos</h4>
            <br />
            <UnorderedList>
              <li><b>Controle e Satisfação:</b> Ter controle sobre o que se come pode levar a uma maior satisfação pessoal e bem-estar.</li>
              <br />
              <li><b>Evitação de Alimentos Não Saudáveis:</b> Às vezes, a seletividade pode resultar na eliminação de alimentos processados ou menos saudáveis.</li>
              <br />
            </UnorderedList>
            <h4>Aspectos Negativos</h4>
            <br />
            <UnorderedList>
              <li><b>Desbalanço Nutricional:</b> A seletividade alimentar pode levar a deficiências nutricionais se não há esforço para se alimentar adequadamente.</li>
              <br />
              <li><b>Problemas Sociais:</b> Pode causar dificuldades em situações sociais, como refeições em grupo ou outras interações alimentares.</li>
              <br />
            </UnorderedList>
          </Section>
          <Section className="management">
            <h3>Como Gerenciar a Seletividade Alimentar</h3>
            <br />
            <UnorderedList>
              <li><b>Educação e Consciência:</b>
                <UnorderedList>
                  <li>Entenda suas Preferências: Reflita sobre o que você gosta e não gosta e por quê.</li>
                  <br />
                  <li>Aprenda Sobre Nutrição: Conheça os nutrientes necessários e como obtê-los de diferentes fontes alimentares.</li>
                  <br />
                </UnorderedList>
              </li>
              <li><b>Introduza Novos Alimentos Gradualmente:</b>
                <UnorderedList>
                  <li>Experimentos: Tente introduzir novos alimentos de forma gradual e em pequenas quantidades.</li>
                  <br />
                  <li>Combinações: Misture novos alimentos com aqueles que você já gosta para facilitar a aceitação.</li>
                  <br />
                </UnorderedList>
              </li>
              <li><b>Adapte a Preparação e o Cozimento:</b>
                <UnorderedList>
                  <li>Textura e Temperatura: Experimente diferentes métodos de preparo para encontrar formas de tornar os alimentos mais agradáveis.</li>
                  <br />
                </UnorderedList>
              </li>
              <li><b>Busque Suporte Profissional:</b>
                <UnorderedList>
                  <li>Consultoria Nutricional: Um nutricionista pode ajudar a criar um plano alimentar equilibrado e diversificado.</li>
                  <br />
                  <li>Aconselhamento Psicológico: Se a seletividade alimentar está afetando sua qualidade de vida ou suas relações sociais, a ajuda de um psicólogo pode ser útil.</li>
                </UnorderedList>
              </li>
            </UnorderedList>
          </Section>
        </Main>
        <FooterStyled>
          <h3>Conclusão</h3>
          <br />
          <p>Entender a seletividade alimentar é o primeiro passo para gerenciar e melhorar suas escolhas alimentares. Com conhecimento e estratégias adequadas, é possível equilibrar preferências pessoais com necessidades nutricionais e manter uma dieta saudável e satisfatória.</p>
        </FooterStyled>
      </Container>
      <Footer />
    </>
  );
};

export default Guia;
