import Navbar from "../../components/Navbar/navbar";
import * as S from "./styles";

import Icon1 from "../../assets/svg/blob1.svg";
import Icon2 from "../../assets/svg/blob2.svg";
import Icon3 from "../../assets/svg/blob3.svg";
import Logo from "../../assets/logo.svg";
import TextInsideImage from "../../components/TextInsideImage";

import Img from "../../assets/mother.png";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      {/** esse foi um botao que eu criei com ananias */}
      {/* <button onClick={() => navigation('/login')}>login</button> */}
      <h1>Como funciona?</h1>

      <S.Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TextInsideImage
            title="1"
            image={Icon1}
            text="Crie uma conta e faça seu login."
          />
          <TextInsideImage
            title="2"
            image={Icon2}
            text="Escolha entre os planos grátis e premium que temos disponíveis."
          />
          <TextInsideImage
            title="3"
            image={Icon3}
            text="Navegue e acesse as páginas e recursos ofertados para o seu plano escolhido."
          />
        </div>

        <S.Card>
          <S.TextContainer>
            <h1> Nutrição é para todos</h1>
            <p>
              O BemTEA foi projetado para facilitar o acesso de famílias com
              crianças atípicas com informações sobre nutrição e estratégias
              para descomplicar as horas das refeições. Acesse guias, quadros e
              depoimentos e experiências em outros perfis.
            </p>
          </S.TextContainer>
          <img src={Img} alt="" className="mother" />
        </S.Card>
      </S.Container>
      <Footer img={Logo} />
    </>
  );
}
