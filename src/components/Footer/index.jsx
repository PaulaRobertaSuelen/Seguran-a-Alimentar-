import React from "react";
import { SFooter, SButton } from "./styles";

export default function Footer({ img }) {
  return (
    <SFooter>
      <img src={img} alt="logo" />
      <p>Copyright © 2024 - 2024 BemTEA - todos os direitos reservados.</p>
      <SButton
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
      >
        Voltar para o topo.
      </SButton>
    </SFooter>
  );
}
