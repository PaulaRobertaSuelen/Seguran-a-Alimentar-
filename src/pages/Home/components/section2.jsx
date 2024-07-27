import React from "react";
import img from "../../../assets/mother.png";
import "./section2.css";
import Icon1 from "../../../assets/svg/blob1.svg";
import Icon2 from "../../../assets/svg/blob2.svg";
import Icon3 from "../../../assets/svg/blob3.svg";

import TextInsideImage from "../../../components/TextInsideImage";

export default function Section2() {
  return (
    <div>
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

      <div className="main-container">
        <div className="text-container">
          <h1 className=""> Nutrição é para todos</h1>
          <p>
            O BemTEA foi projetado para facilitar o acesso de famílias com
            crianças atípicas com informações sobre nutrição e estratégias para
            descomplicar as horas das refeições. Acesse guias, quadros e
            depoimentos e experiências em outros perfis.
          </p>
        </div>
        <img src={img} alt="" className="mother" />
      </div>
    </div>
  );
}
