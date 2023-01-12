/* eslint-disable indent */
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

  form {
    .body {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 32px;

      .group {
        width: 100%;
      }

      span {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #666666;
        display: block;
        margin-bottom: 16px;
      }
    }

    .footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      margin-top: 48px;

      button {
        width: max-content;

        & + button {
          margin-left: auto;
        }
      }
    }
  }
`;
