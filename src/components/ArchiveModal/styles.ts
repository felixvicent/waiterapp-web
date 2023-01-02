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

    strong {
      font-size: 24px;
    }

    button {
      line-height: 0;
      border: 0;
      background: transparent;
    }
  }

  .content {
    margin: 48px 0;
    max-width: 416px;
    text-align: center;
    padding: 0 60px;

    p + p {
      margin-top: 16px;
    }
  }

  .buttons {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`;
