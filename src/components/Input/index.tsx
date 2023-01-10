import { InputHTMLAttributes, useState } from "react";
import { Container } from "./styles";

import eye from "../../assets/images/icons/eye.svg";
import eyeHidden from "../../assets/images/icons/eye-hidden.svg";
import search from "../../assets/images/icons/search.svg";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  addon?: string;
  label?: string;
}

export function Input({ type = "text", addon, label, ...rest }: InputProps) {
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

      {type === "search" && (
        <button disabled>
          <img src={search} />
        </button>
      )}
      {addon && <label>{addon}</label>}
    </Container>
  );
}
