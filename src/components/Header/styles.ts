import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1216px;
  margin: 0 auto;
  padding: 40px 32px 16px;

  .title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;

    img {
      width: 32px;
      height: 32px;
    }
  }

  p {
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #666666;
  }

  > button {
    background-color: transparent;
    border: 0;
    display: flex;
    align-items: center;
    gap: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 100%;
    display: flex;
    align-items: center;
    color: #d73035;
  }
`;
