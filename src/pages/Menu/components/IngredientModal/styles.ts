import styled from "styled-components";

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  backdrop-filter: blur(4.5px);
  background: rgba(0, 0, 0, 0.8);
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
    .group {
      margin-bottom: 32px;
    }

    button {
      margin-top: 16px;
      width: max-content;
      float: right;
      padding: 14px 28px;
    }
  }
`;
