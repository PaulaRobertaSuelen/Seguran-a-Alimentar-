import React from 'react';
import './styles.css'
import Navbar from '../../components/Navbar/navbar.jsx'
import { BiBookmarkPlus } from "react-icons/bi";
import { BiCalendarAlt } from "react-icons/bi";
import { BiComment } from "react-icons/bi";


const App = () => {
  return (
    <> 
    <Navbar />
      <header>
        <h1>Entenda a seletividade alimentar</h1> <br /><br />
      </header>
            
      <section className='icons'>
        <div className='icon-container'>
      <BiBookmarkPlus />
      <BiCalendarAlt />
      <BiComment />
         </div>
       </section>

    <div className="container">
        <main>
        <section className="intro">
        <img src="src/pages/Guia/Img_Guia/seletividade-alimentar 1.png" alt="Guia" /> 
          <h2>O que é Seletividade Alimentar?</h2> <br />
          <p>
            Seletividade alimentar refere-se à tendência de uma pessoa preferir certos alimentos e evitar outros, muitas vezes com base em fatores sensoriais, emocionais ou psicológicos. Essa seletividade pode variar de leve a extrema e pode se manifestar de diferentes maneiras:
          </p> <br />
        </section>
        
        <section className="content">
          <h3>1. Fatores Sensoriais</h3> <br />
          <ul>
            <li><b>Sabor:</b> Algumas pessoas têm aversões a sabores específicos, como amargo ou picante, que podem afetar suas escolhas alimentares.</li> <br />
            <li><b>Textura:</b> A textura dos alimentos pode ser um fator importante. Alimentos crocantes, cremosos ou pegajosos podem ser preferidos ou evitados.</li> <br />
            <li><b>Aparência:</b> A cor e a aparência dos alimentos também podem influenciar a aceitação. Alimentos que não parecem apetitosos podem ser rejeitados.</li> <br />
          </ul>
          
          <h3>2. Fatores Emocionais e Psicológicos</h3> <br />
          <ul>
            <li><b>Experiências Passadas:</b> Traumas alimentares ou experiências negativas associadas a certos alimentos podem levar a aversões duradouras.</li> <br />
            <li><b>Associar Comida a Emoções:</b> Alimentos podem estar ligados a experiências emocionais ou culturais, afetando a forma como são percebidos e aceitos.</li> <br />
          </ul>

          <h3>3. Fatores Culturais e Ambientais</h3> <br />
          <ul>
            <li><b>Tradições Culturais:</b> As tradições e hábitos alimentares da família e da cultura podem influenciar as preferências alimentares e a seletividade.</li> <br />
            <li><b>Exposição:</b> A quantidade e a forma como os alimentos são introduzidos na dieta desde a infância podem moldar as preferências alimentares.</li> <br />
          </ul>

          <h3>4. Fatores de Saúde</h3> <br />
          <ul>
            <li><b>Sensibilidades e Intolerâncias:</b> Condições como intolerância à lactose ou alergias alimentares podem levar a uma seletividade alimentar.</li> <br />
            <li><b>Problemas Digestivos:</b> Algumas pessoas podem evitar certos alimentos devido a desconforto digestivo ou problemas gastrointestinais.</li> <br />
          </ul>
        </section>

        <section className="ages">
          <h3>Seletividade Alimentar em Diferentes Idades</h3> <br />
          <h4>Infância</h4> <br />
          <ul>
            <li>Desenvolvimento do Paladar: A exposição repetida a novos alimentos pode ajudar a ampliar as preferências alimentares das crianças.</li> <br />
          </ul>
          
          <h4>Adolescência</h4> <br />
          <ul>
            <li>Mudanças de Sabor: Durante a adolescência, os sabores e as preferências alimentares podem mudar. Isso pode ser influenciado por mudanças hormonais e sociais.</li> <br />
            <li>Influências Sociais: Amigos e mídias sociais podem impactar as escolhas alimentares dos adolescentes.</li> <br />
          </ul>
          
          <h4>Adulto</h4> <br />
          <ul>
            <li>Rotina e Preferências: Adultos podem ter preferências alimentares mais consolidadas, mas também podem experimentar mudanças devido a mudanças de saúde ou estilo de vida.</li> <br />
            <li>Necessidades Nutricionais: As escolhas alimentares podem ser ajustadas para atender a necessidades nutricionais específicas, como perda de peso ou gerenciamento de condições de saúde.</li> <br />
          </ul>
        </section>

        <section className="impact">
          <h3>Impacto da Seletividade Alimentar</h3> <br />
          <h4>Aspectos Positivos</h4> <br />
          <ul>
            <li><b>Controle e Satisfação:</b> Ter controle sobre o que se come pode levar a uma maior satisfação pessoal e bem-estar.</li> <br />
            <li><b>Evitação de Alimentos Não Saudáveis:</b> Às vezes, a seletividade pode resultar na eliminação de alimentos processados ou menos saudáveis.</li> <br />
          </ul>
          
          <h4>Aspectos Negativos</h4> <br />
          <ul>
            <li><b>Desbalanço Nutricional:</b> A seletividade alimentar pode levar a deficiências nutricionais se não há esforço para se alimentar adequadamente.</li> <br />
            <li><b>Problemas Sociais:</b> Pode causar dificuldades em situações sociais, como refeições em grupo ou outras interações alimentares.</li> <br />
          </ul>
        </section>

        <section className="management">
          <h3>Como Gerenciar a Seletividade Alimentar</h3> <br />
          <ul>
            <li><b>Educação e Consciência:</b> 
              <ul>
                <li>Entenda suas Preferências: Reflita sobre o que você gosta e não gosta e por quê.</li> <br />
                <li>Aprenda Sobre Nutrição: Conheça os nutrientes necessários e como obtê-los de diferentes fontes alimentares.</li><br />
              </ul>
            </li>
            <li><b>Introduza Novos Alimentos Gradualmente:</b>
              <ul>
                <li>Experimentos: Tente introduzir novos alimentos de forma gradual e em pequenas quantidades.</li> <br />
                <li>Combinações: Misture novos alimentos com aqueles que você já gosta para facilitar a aceitação.</li> <br />
              </ul>
            </li>
            <li><b>Adapte a Preparação e o Cozimento:</b>
              <ul>
                <li>Textura e Temperatura: Experimente diferentes métodos de preparo para encontrar formas de tornar os alimentos mais agradáveis.</li> <br />
              </ul>
            </li>
            <li><b>Busque Suporte Profissional:</b>
              <ul>
                <li>Consultoria Nutricional: Um nutricionista pode ajudar a criar um plano alimentar equilibrado e diversificado.</li> <br />
                <li>Aconselhamento Psicológico: Se a seletividade alimentar está afetando sua qualidade de vida ou suas relações sociais, a ajuda de um psicólogo pode ser útil.</li>
              </ul>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <li><b>Conclusão</b></li> <br />
        <p>Entender a seletividade alimentar é o primeiro passo para gerenciar e melhorar suas escolhas alimentares. Com conhecimento e estratégias adequadas, é possível equilibrar preferências pessoais com necessidades nutricionais e manter uma dieta saudável e satisfatória.</p>
      </footer>
    </div>
    </>
  );
};

export default App;
