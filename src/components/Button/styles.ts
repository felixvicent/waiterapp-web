import styled, { css } from "styled-components";

export const StyledButton = styled.button<{ ghost: boolean }>`
  width: 100%;
  background-color: #d73035;
  padding: 14px 28px;
  width: 100%;
  border-radius: 44px;
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 16px;

  ${({ ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      color: #d73035;
      padding: 0;
      text-align: left;
    `}

  &:disabled {
    background-color: #cccccc;
  }
`;
