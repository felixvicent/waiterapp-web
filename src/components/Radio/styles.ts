/* eslint-disable indent */
import styled, { css } from "styled-components";

export const Container = styled.div<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  .radio {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #666;
    position: relative;

    ${({ active }) =>
      active &&
      css`
        border-color: #d73035;

        &::after {
          content: "";
          background-color: #d73035;
          width: 10px;
          height: 10px;
          position: absolute;
          border-radius: 50%;
          left: 3px;
          bottom: 3px;
        }
      `}
  }

  label {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #666666;

    ${({ active }) =>
      active &&
      css`
        color: #d73035;
      `}
  }
`;
