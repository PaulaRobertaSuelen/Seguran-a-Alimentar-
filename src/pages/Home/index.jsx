import React from "react";

import Navbar from "../../components/Navbar/navbar"
import Footer from "../../components/Footer/Footer"

import Logo from "../../assets/logo.png"
import OndaUm from "../../assets/onda-um.png"
import OndaDois from "../../assets/onda-dois.png"
import Mother from "../../assets/mother.png"

import * as S from "./styles";

export default function Home() {
  return (
    <>

    {/* A NAVBAR PRECISA SER INCLUÍDA AQUI ANTES DO BODY COMO HEADER */}

    <Navbar />


    {/* ============================================================================================== */}
      {/* IMAGEM INICIAL COM A LOGO, O TÍTULO E O BOTÃO DE "SAIBA MAIS" */}

      <S.BackgroundContainer>

        <S.OverlayContent>

          <S.Logo>
            <img src={Logo} alt="logo" />
          </S.Logo>

          <S.TituloEBotao>

            <S.TituloUm>
              <h1>Refeições sem desafios!</h1>
            </S.TituloUm>

            <S.BotaoSaibaMais>
              Saiba mais
            </S.BotaoSaibaMais>

          </S.TituloEBotao>

        </S.OverlayContent>

      </S.BackgroundContainer>

    {/* ============================================================================================== */}
    {/* AQUI ESTÁ COMO CORPO DA HOME PARA PODER ATRIBUIR UMA COR DE FUNDO */}

    <S.Body>

      {/* ============================================================================================== */}
      {/* PARTE DO "IREMOS DE AJUDAR" */}

      <S.IremosAjudar>

        <S.TituloIremosTeAjudar>
          <h1>Iremos te ajudar</h1>
        </S.TituloIremosTeAjudar>

        <S.TextoDeAjuda>
          <p>Grande parte das pessoas que possuem o TEA tem a <span>seletividade alimentar</span>, podendo gerar desafios nas horas das refeições e impactando na saúde.</p>
          <p>A equipe do BemTEA visa ajudar nessa situação e melhorar vidas.</p>
        </S.TextoDeAjuda>

        <S.BotaoQueroComecar>
          Quero começar
        </S.BotaoQueroComecar>

      </S.IremosAjudar>

      {/* ============================================================================================== */}
      {/* PARTE DO "COMO FUNCIONA" */}

      <S.ComoFunciona>

        <S.TituloComoFunciona>

          <img src={OndaUm} alt="onda-um" />
          <h1>Como funciona?</h1>
          <img src={OndaDois} alt="onda-dois" />

        </S.TituloComoFunciona>

        <S.PassoAPasso>

          <S.PassoUm>
            <S.TextoPasso>
              <h1>1</h1>
              <p>Procure</p>
            </S.TextoPasso>
          </S.PassoUm>

          <S.PassoDois>
            <S.TextoPasso>
              <h1>2</h1>
              <p>Encontre</p>
            </S.TextoPasso>
          </S.PassoDois>

          <S.PassoTres>
            <S.TextoPasso>
              <h1>3</h1>
              <p>Entenda</p>
            </S.TextoPasso>
          </S.PassoTres>

        </S.PassoAPasso>

      </S.ComoFunciona>

      {/* ============================================================================================== */}
      {/* PARTE DO "NUTRIÇÃO É PARA TODOS" */}

      <S.NutricaoParaTodos>

        <S.NutricaoTitulo>
          <h1>Nutrição é para todos</h1>
          <p>O BemTEA foi projetado para facilitar o acesso de famílias com crianças atípicas com informações sobre nutrição e estratégias para descomplicar as horas das refeições. Acesse guias, quadros e depoimentos e experiências em outros perfis.</p>
        </S.NutricaoTitulo>

        <S.NutricaoImagem>
          <img src={Mother} alt="mae-e-filha" />
        </S.NutricaoImagem>

      </S.NutricaoParaTodos>

    </S.Body>

    {/* ============================================================================================== */}
    {/* FIM DO BODY */}

    <Footer />

    {/* ============================================================================================== */}
    {/* AQUI ABAIXO DO BODY DEVE SER INCLUÍDO O FOOTER QUANDO ESTIVER PRONTO */}

    {/* ============================================================================================== */}


    </>
  );
}
