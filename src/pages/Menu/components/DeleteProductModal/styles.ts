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

  .product {
    display: flex;
    align-items: center;
    max-width: 352px;
    margin: 0 auto;
    border-radius: 8px;
    border: 1px solid rgba(204, 204, 204, 0.4);
    overflow: hidden;

    .image {
      width: 158px;
      height: 123px;

      img {
        width: 100%;
        height: 123px;
        object-fit: cover;
      }
    }

    .infos {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 16px;

      h4 {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #333333;
      }

      strong {
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
        color: #333333;
      }

      h5 {
        font-weight: 500;
        font-size: 16px;
        line-height: 150%;
        color: #333333;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 48px;
  }
`;
