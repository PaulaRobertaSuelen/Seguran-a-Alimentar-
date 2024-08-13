import React from "react";
import { SButton } from "./styles";

export default function Button({
  children,
  onClick,
  disabled,
  onChange,
  styles,
}) {
  return (
    <SButton
      onClick={onClick}
      onChange={onChange}
      disabled={disabled}
      style={styles}
    >
      {children}
    </SButton>
  );
}