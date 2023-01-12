import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  border-radius: 8px;
  width: 480px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  p {
    text-align: center;
    font-weight: 500;
    font-size: 16px;
    line-height: 150%;
    color: #333333;
    margin-bottom: 24px;
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
  }

  .category {
    background: #ffffff;
    box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
    border-radius: 75px;
    width: max-content;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 14px;
    gap: 8px;

    h3 {
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #333333;
    }
  }
`;
