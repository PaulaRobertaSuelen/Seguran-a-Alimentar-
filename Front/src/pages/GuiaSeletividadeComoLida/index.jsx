import React from 'react';
import * as S from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const GuiaSeletividadeComoLida = () => {
    return (
        <>
        <Navbar />
        <img src="/src/assets/svg/ondaleve.svg" alt="" />
      <S.Container>
        <S.Image src="/src/assets/Entenda a seletividade alimentar (1).png" alt="" />
        <S.SectionTitleT><h1>Seletividade alimentar como lida?</h1></S.SectionTitleT> <br />
        <S.Paragraph>
            <p>
             A seletividade alimentar, especialmente em crianças, pode ser um desafio, <br />
             mas há várias estratégias para lidar com ela. Aqui estão algumas abordagens eficazes:
          </p>
        </S.Paragraph>
        <S.List>
          <S.ListItem>
               <p>
                <span>Exemplo Positivo:</span> As crianças costumam imitar os comportamentos dos adultos. <br />
                Se você mostrar entusiasmo ao comer uma variedade de alimentos, isso pode incentivá-las <br />
                a experimentar novos alimentos.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Ofereça Opções:</span> Em vez de forçar uma criança a comer algo específico, <br />
                ofereça várias opções saudáveis. Isso dá à criança uma sensação de controle e aumenta <br />
                as chances de ela escolher algo que esteja disposta a experimentar. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Apresentação Atraente:</span> Tornar os alimentos visualmente atraentes <br />
                pode ajudar. Cortar frutas e legumes em formas divertidas <br />
                ou usar cores vibrantes pode tornar a comida mais interessante para as crianças.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Introdução Gradual:</span> Introduza novos alimentos de forma gradual e sem pressão. <br />
                Pode levar várias tentativas antes que uma criança aceite um novo sabor ou textura. Experimente <br />
                misturar novos alimentos com aqueles que a criança já gosta. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Envolva a Criança:</span> Incentive a criança a participar da preparação das refeições. <br />
                Ao se envolver no processo, desde a escolha dos ingredientes até a preparação, ela pode se sentir <br />
                mais interessada em experimentar o que ajudou a criar.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Estabeleça Rotina:</span> Manter uma rotina alimentar com horários regulares pode ajudar a criar <br />
                hábitos saudáveis. Evite oferecer lanches muito perto das refeições para que a criança esteja com fome <br />
                na hora de comer.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Evite Pressão e Recompensas:</span> Forçar ou subornar a criança para comer pode criar uma relação <br />
                negativa com a comida. É importante que a hora da refeição seja um momento positivo e sem estresse. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Evite Pressão e Recompensas:</span> Se a seletividade alimentar for extrema e estiver impactando <br />
                o crescimento ou o bem-estar da criança, pode ser útil consultar um pediatra ou nutricionista <br />
                especializado em comportamento alimentar infantil.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                Essas estratégias podem ajudar a reduzir a seletividade alimentar ao longo do tempo <br />
                 e criar uma relação mais saudável com a comida.
              </p>
              </S.ListItem> <br />
        </S.List>
        
            <Footer />
      </S.Container>

        <S.CardETM>
                <S.Image src="/src/assets/seletividade-alimentar 2.png" alt="Criança comendo com a ajuda de uma pessoa adulta" />
                <S.formBTT action='Guia'>
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardETM>
            <S.CardPP>
                <S.Image src="/src/assets/Component 15.png" alt="Mulher profissional de saúde com um tablet" />
                <S.formBTT action="PesquisarProfissional">
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardPP>
            <S.CardSA>
                <S.Image src="/src/assets/Component 16.png" alt="Logo da Bem Tea" />
                <S.formBTT action="SobreNos">
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardSA>

      </>
    );
  };
  
  export default GuiaSeletividadeComoLida;