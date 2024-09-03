import React from 'react';
import * as S from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const Guia = () => {
    return (
        <>
        <Navbar />
        
      <S.Container>
        <S.img src="/src/assets/svg/ondaleve.svg" alt="" />
        <S.Image src="/src/assets/Component 13.png" alt="Criança recusando comida" />
        <S.SectionTitleT><h1>O que é Seletividade Alimentar?</h1></S.SectionTitleT> <br />
        <S.Paragraph>
            <p>
          Seletividade alimentar refere-se à tendência de uma pessoa preferir certos <br />
          alimentos e evitar outros, muitas vezes com base em fatores sensoriais, <br />
          emocionais ou psicológicos. Essa seletividade pode variar de leve a extrema <br />
          e pode se manifestar de diferentes maneiras:
          </p>
        </S.Paragraph>
        
        <S.List>
            <S.SectionTitleFT><p>1. Fatores Sensoriais</p></S.SectionTitleFT> <br />

          <S.ListItem>Sabor: Algumas pessoas têm aversões a sabores específicos, como amargo ou <br />
           picante, que podem afetar suas escolhas alimentares.</S.ListItem> <br />

          <S.ListItem>Textura: A textura dos alimentos pode ser um fator importante. Alimentos <br />
           crocantes, cremosos ou pegajosos podem ser preferidos ou evitados.</S.ListItem> <br />

          <S.ListItem>Aparência: A cor e a aparência dos alimentos também podem influenciar a <br />
           aceitação. Alimentos que não parecem apetitosos podem ser rejeitados.</S.ListItem> <br />

        <S.SectionTitleFT><p>2. Fatores Emocionais e Psicológicos</p></S.SectionTitleFT> <br />

          <S.ListItem><p>Experiências Passadas: Traumas alimentares ou experiências negativas <br />
           associadas a certos alimentos podem levar a aversões duradouras.</p> </S.ListItem> <br />

          <S.ListItem>Associar Comida a Emoções: Alimentos podem estar ligados a experiências <br />
           emocionais ou culturais, afetando a forma como são percebidos e aceitos.</S.ListItem> <br />

        <S.SectionTitleFT><p>3. Fatores de Saúde</p></S.SectionTitleFT> <br />

          <S.ListItem>Sensibilidades e Intolerâncias: Condições como intolerância à lactose <br />
           ou alergias alimentares podem levar a uma seletividade alimentar.</S.ListItem> <br />

          <S.ListItem>Problemas Digestivos: Algumas pessoas podem evitar certos <br />
           alimentos devido a desconforto digestivo ou problemas <br /> gastrointestinais.</S.ListItem> <br />

        <S.SectionTitleT2><h1>Impacto da Seletividade Alimentar</h1></S.SectionTitleT2> <br />

        <S.SectionTitleFT><p> Aspectos Positivos </p></S.SectionTitleFT> <br />

          <S.ListItem>Controle e Satisfação: Ter controle sobre o que se come pode levar a uma <br />
           maior satisfação pessoal e bem-estar.</S.ListItem> <br />

          <S.ListItem>Evitação de Alimentos Não Saudáveis: Às vezes, a seletividade pode resultar <br />
           na eliminação de alimentos processados ou menos saudáveis.</S.ListItem> <br />

        <S.SectionTitleFT><p>Aspectos Negativos</p> </S.SectionTitleFT> <br />

          <S.ListItem>Desbalanço Nutricional: A seletividade alimentar pode levar a deficiências <br />
           nutricionais se não for abordada adequadamente.</S.ListItem> <br />

          <S.ListItem>Problemas Sociais: Pode causar dificuldades em situações sociais, como <br />
           refeições em grupo ou eventos familiares.</S.ListItem> <br />

        <S.SectionTitleT2><h1>Como Gerenciar a Seletividade Alimentar</h1></S.SectionTitleT2> <br />

        <S.SectionTitleFT><p>1. Educação e Consciência</p></S.SectionTitleFT> <br />

          <S.ListItem><p>Entenda suas Preferências: Reflita sobre o que você gosta e não gosta e por quê.</p></S.ListItem> <br />

          <S.ListItem>Aprenda Sobre Nutrição: Conheça os nutrientes necessários e como obtê-los de <br />
           diferentes fontes alimentares.</S.ListItem> <br />

        <S.SectionTitleFT><p>2. Introduza Novos Alimentos Gradualmente</p></S.SectionTitleFT> <br />

          <S.ListItem><p>Experimentos: Tente introduzir novos alimentos de forma gradual e em <br />
           pequenas quantidades.</p></S.ListItem> <br />

          <S.ListItem><p>Combinações: Misture novos alimentos com aqueles que você já gosta para <br />
           facilitar a aceitação.</p></S.ListItem> <br />

        <S.SectionTitleFT>3. Adapte a Preparação e o Cozimento</S.SectionTitleFT> <br />

          <S.ListItem>Textura e Temperatura: Experimente diferentes métodos de preparo para encontrar <br />
           formas de tornar os alimentos mais agradáveis.</S.ListItem> <br />

        <S.SectionTitleFT>4. Busque Suporte Profissional</S.SectionTitleFT> <br />

          <S.ListItem>Consultoria Nutricional: Um nutricionista pode ajudar a criar um plano alimentar <br />
           equilibrado e diversificado.</S.ListItem> <br />

          <S.ListItem>Aconselhamento Psicológico: Se a seletividade alimentar está afetando sua <br />
           qualidade de vida ou suas relações sociais, a ajuda de um psicólogo pode ser útil.</S.ListItem> <br />
        </S.List>

            <Footer />
      </S.Container>

        <S.CardETM>
                <S.ImageCD src="/src/assets/Component 14.png" alt="Criança comendo com a ajuda de uma pessoa adulta" />
                <S.formBTT action='/guia/seletividade'>
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardETM>
            <S.CardPP>
                <S.ImageCD src="/src/assets/Component 15.png" alt="Mulher profissional de saúde com um tablet" />
                <S.formBTT action="/login">
                    <S.CardButton onClick="submit">saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardPP>
            <S.CardSA>
                <S.ImageCD src="/src/assets/Component 16.png" alt="Logo da Bem Tea" />
                <S.formBTT action="/SobreNos">
                    <S.CardButton onClick="submit">saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardSA>
        </>
    );
};

export default Guia;
