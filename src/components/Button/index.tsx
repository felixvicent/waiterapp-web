import { ButtonHTMLAttributes, ReactNode } from "react";

import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  ghost?: boolean;
}

export function Button({ children, ghost = false, ...rest }: ButtonProps) {
  return (
    <StyledButton ghost={ghost} {...rest}>
      {children}
    </StyledButton>
  );
}
