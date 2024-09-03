import React from 'react';
import * as S from './styles';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer/Footer';

const GuiaSeletividadeComoLida = () => {
    return (
        <>
        <Navbar />
        
      <S.Container>
        <S.img src="/src/assets/svg/ondaleve.svg" alt="" />
        <S.Image src="/src/assets/Entenda a seletividade alimentar (1).png" alt="" />
        <S.SectionTitleT><h1>Seletividade alimentar como lida?</h1></S.SectionTitleT> <br />
        <S.Paragraph>
            <p>
             A seletividade alimentar, especialmente em crianças, <br />
             pode ser um desafio, mas há várias estratégias para lidar com ela. <br /> 
             Aqui estão algumas abordagens eficazes:
          </p>
        </S.Paragraph>
        <S.List>
          <S.ListItem>
               <p>
                <span>Exemplo Positivo:</span> As crianças costumam imitar <br /> 
                os comportamentos dos adultos. Se você mostrar entusiasmo ao comer <br /> 
                uma variedade de alimentos, isso pode incentivá-las a experimentar novos <br /> 
                alimentos.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Ofereça Opções:</span> Em vez de forçar uma criança <br /> 
                a comer algo específico, ofereça várias opções saudáveis. Isso <br /> 
                dá à criança uma sensação de controle e aumenta <br />
                as chances de ela escolher algo que esteja disposta a experimentar. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Apresentação Atraente:</span> Tornar os alimentos <br /> 
                visualmente atraentes pode ajudar. Cortar frutas e legumes <br /> 
                em formas divertidas ou usar cores vibrantes pode tornar a comida <br /> 
                mais interessante para as crianças.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Introdução Gradual:</span> Introduza novos alimentos <br /> 
                de forma gradual e sem pressão. Pode levar várias tentativas antes <br />
                que uma criança aceite um novo sabor ou textura. Experimente <br />
                misturar novos alimentos com aqueles que a criança já gosta. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Envolva a Criança:</span> Incentive a criança a participar <br /> 
                da preparação das refeições. Ao se envolver no processo, <br /> 
                desde a escolha dos ingredientes até a preparação, ela pode se sentir <br />
                mais interessada em experimentar o que ajudou a criar.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Estabeleça Rotina:</span> Manter uma rotina alimentar <br /> 
                com horários regulares pode ajudar a criar hábitos saudáveis. <br /> 
                Evite oferecer lanches muito perto das refeições para que a criança <br /> 
                esteja com fome na hora de comer.
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Evite Pressão e Recompensas:</span> Forçar ou subornar <br /> 
                a criança para comer pode criar uma relação negativa com a comida. <br /> 
                É importante que a hora da refeição seja um momento positivo e sem estresse. <br />
              </p>
              </S.ListItem> <br />
          <S.ListItem>
                <p>
                <span>Evite Pressão e Recompensas:</span> Se a seletividade alimentar <br /> 
                for extrema e estiver impactando o crescimento ou o bem-estar da criança, <br /> 
                pode ser útil consultar um pediatra ou nutricionista <br />
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
                <S.Image2 src="/src/assets/seletividade-alimentar 2.png" alt="" />
                <S.formBTT action='Guia'>
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardETM>
            <S.CardPP>
                <S.Image2 src="/src/assets/Component 15.png" alt="" />
                <S.formBTT action="login">
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardPP>
            <S.CardSA>
                <S.Image2 src="/src/assets/Component 16.png" alt="" />
                <S.formBTT action="SobreNos">
                <S.CardButton onClick='submit'>saiba mais!</S.CardButton>
                </S.formBTT>
            </S.CardSA>

      </>
    );
  };
  
  export default GuiaSeletividadeComoLida;