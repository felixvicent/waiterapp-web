import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    color: #333;
    font-size: 16px;
    line-height: 150%;
    font-weight: 500;
    margin-bottom: 4px;
  }

  h2 {
    font-size: 32px;
    line-height: 120%;
    color: #333;

    span {
      font-weight: 300;
    }
  }
`;
