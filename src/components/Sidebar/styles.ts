/* eslint-disable indent */
import styled from "styled-components";

export const Container = styled.div`
  width: 108px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 58px;
  padding: 40px 0;
  height: 100vh;
  background-color: #fff;

  header {
    display: flex;
    align-items: center;
    justify-content: center;

    h2 {
      font-weight: 700;
      font-size: 24px;
      line-height: 120%;
      text-transform: uppercase;
      color: #666666;

      span {
        font-weight: 300;
      }
    }
  }

  .menus {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }
`;

export const Menu = styled.div<{ active: boolean }>`
  a {
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 140%;
    color: #666666;
    text-decoration: none;

    ${({ active }) =>
      active &&
      `
      color: #d73035;
    `}
  }

  img {
    ${({ active }) =>
      active &&
      `
      filter: invert(32%) sepia(39%) saturate(4293%) hue-rotate(338deg) brightness(84%) contrast(100%);
    `}
  }
`;
