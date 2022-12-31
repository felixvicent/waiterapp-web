import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";

import eye from "../../assets/images/eye.svg";
import eyeHidden from "../../assets/images/eye-hidden.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  label?: string;
}

export function Input({ type = "text", label, ...rest }: InputProps) {
  const [inpuType, setInputType] = useState(type);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handlePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
    setInputType(!isPasswordVisible ? "text" : type);
  }

  return (
    <Container>
      {label && <label>{label}</label>}
      <input type={inpuType} {...rest} />
      {type === "password" && (
        <button onClick={handlePasswordVisibility} type="button">
          <img src={isPasswordVisible ? eyeHidden : eye} />
        </button>
      )}
    </Container>
  );
}
