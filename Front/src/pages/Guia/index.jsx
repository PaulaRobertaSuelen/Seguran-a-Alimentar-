import React from 'react';
import * as S from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Guia = () => {
    return (
        <>
        <Navbar />
        <img src="/src/assets/svg/ondaleve.svg" alt="" />
      <S.Container>
        <S.Image src="/src/assets/Component 13.png" alt="Criança recusando comida" />
        <S.SectionTitleT><h1>O que é Seletividade Alimentar?</h1></S.SectionTitleT> <br />
        <S.Paragraph>
          Seletividade alimentar refere-se à tendência de uma pessoa preferir certos <br />
          alimentos e evitar outros, muitas vezes com base em fatores sensoriais, <br />
          emocionais ou psicológicos. Essa seletividade pode variar de leve a extrema <br />
          e pode se manifestar de diferentes maneiras:
        </S.Paragraph> <br />
        <S.SectionTitle>1. Fatores Sensoriais</S.SectionTitle>
        <S.List>
          <S.ListItem>Sabor: Algumas pessoas têm aversões a sabores específicos, como amargo ou <br /> picante, que podem afetar suas escolhas alimentares.</S.ListItem> <br />
          <S.ListItem>Textura: A textura dos alimentos pode ser um fator importante. Alimentos <br /> crocantes, cremosos ou pegajosos podem ser preferidos ou evitados.</S.ListItem> <br />
          <S.ListItem>Aparência: A cor e a aparência dos alimentos também podem influenciar a <br /> aceitação. Alimentos que não parecem apetitosos podem ser rejeitados.</S.ListItem> <br />
        </S.List>
        <S.SectionTitleFT><p> 2. Fatores Emocionais e Psicológicos</p></S.SectionTitleFT>
        <S.List>
          <S.ListItem2> <p> Experiências Passadas: Traumas alimentares ou experiências negativas <br /> associadas a certos alimentos podem levar a aversões duradouras.</p> </S.ListItem2> <br />
          <S.ListItem2>Associar Comida a Emoções: Alimentos podem estar ligados a experiências <br /> emocionais ou culturais, afetando a forma como são percebidos e aceitos.</S.ListItem2> <br />
        </S.List>
        <S.SectionTitle>3. Fatores de Saúde</S.SectionTitle>
        <S.List>
          <S.ListItem3>Sensibilidades e Intolerâncias: Condições como intolerância à lactose <br /> ou alergias alimentares podem levar a uma seletividade alimentar.</S.ListItem3> <br />
          <S.ListItem3>Problemas Digestivos: Algumas pessoas podem evitar certos <br /> alimentos devido a desconforto digestivo ou problemas <br /> gastrointestinais.</S.ListItem3> <br />
        </S.List>
        <S.SectionTitleT><h1>Impacto da Seletividade Alimentar</h1></S.SectionTitleT> <br />
        <S.SectionTitle>Aspectos Positivos</S.SectionTitle>
        <S.List>
          <S.ListItemAP>Controle e Satisfação: Ter controle sobre o que se come pode levar a uma <br /> maior satisfação pessoal e bem-estar.</S.ListItemAP> <br />
          <S.ListItemAP>Evitação de Alimentos Não Saudáveis: Às vezes, a seletividade pode resultar <br /> na eliminação de alimentos processados ou menos saudáveis.</S.ListItemAP> <br />
        </S.List>
        <S.SectionTitle>Aspectos Negativos</S.SectionTitle>
        <S.List>
          <S.ListItemAN>Desbalanço Nutricional: A seletividade alimentar pode levar a deficiências <br /> nutricionais se não for abordada adequadamente.</S.ListItemAN> <br />
          <S.ListItemAN>Problemas Sociais: Pode causar dificuldades em situações sociais, como <br /> refeições em grupo ou eventos familiares.</S.ListItemAN> <br />
        </S.List>
        <S.SectionTitleGSA><h1>Como Gerenciar a Seletividade Alimentar</h1></S.SectionTitleGSA> <br />
        <S.SectionTitleEC><p>1. Educação e Consciência</p></S.SectionTitleEC> <br />
        <S.List>
          <S.ListItem>Entenda suas Preferências: Reflita sobre o que você gosta e não gosta e por quê.</S.ListItem> <br />
          <S.ListItem>Aprenda Sobre Nutrição: Conheça os nutrientes necessários e como obtê-los de <br /> diferentes fontes alimentares.</S.ListItem> <br />
        </S.List>
        <S.SectionTitleIAG><p>2. Introduza Novos Alimentos Gradualmente</p></S.SectionTitleIAG> <br />
        <S.List>
          <S.ListItemIA><p>Experimentos: Tente introduzir novos alimentos de forma gradual e em <br /> pequenas quantidades.</p></S.ListItemIA> <br />
          <S.ListItemIA><p>Combinações: Misture novos alimentos com aqueles que você já gosta para <br /> facilitar a aceitação.</p></S.ListItemIA> <br />
        </S.List>
        <S.SectionTitleAPC><p>3. Adapte a Preparação e o Cozimento</p></S.SectionTitleAPC> <br />
        <S.List>
          <S.ListItem>Textura e Temperatura: Experimente diferentes métodos de preparo para encontrar <br /> formas de tornar os alimentos mais agradáveis.</S.ListItem> <br />
        </S.List>
        <S.SectionTitleBSP>4. Busque Suporte Profissional</S.SectionTitleBSP> <br />
        <S.List>
          <S.ListItem>Consultoria Nutricional: Um nutricionista pode ajudar a criar um plano alimentar <br /> equilibrado e diversificado.</S.ListItem> <br />
          <S.ListItem>Aconselhamento Psicológico: Se a seletividade alimentar está afetando sua <br /> qualidade de vida ou suas relações sociais, a ajuda de um psicólogo pode ser útil.</S.ListItem> <br />
        </S.List>

            <Footer />
      </S.Container>

        <S.CardETM>
                <S.Image src="/src/assets/Component 14.png" alt="Criança comendo com a ajuda de uma pessoa adulta" />
                <S.CardButton>saiba mais!</S.CardButton>
            </S.CardETM>
            <S.CardPP>
                <S.Image src="/src/assets/Component 15.png" alt="Mulher profissional de saúde com um tablet" />
                <S.formBTT action="PesquisarProfissional">
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardPP>
            <S.CardSA>
                <S.Image src="/src/assets/Component 16.png" alt="Logo da Bem Tea" />
                <S.CardButton>saiba mais!</S.CardButton>
            </S.CardSA>

      </>
    );
  };
  
  export default Guia;