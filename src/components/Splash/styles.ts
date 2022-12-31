import styled from "styled-components";

export const Container = styled.div`
  background: #d73035;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
    font-size: 32px;
    line-height: 120%;
    margin-top: 24px;

    span {
      font-weight: 300;
    }
  }

  p {
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    margin-top: 8px;
  }
`;
