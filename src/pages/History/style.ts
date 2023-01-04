import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .content {
    padding: 32px;

    .title {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;

      h2 {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        display: flex;
        align-items: center;
        color: #333333;
      }

      span {
        background-color: rgba(204, 204, 204, 0.2);
        width: 26px;
        height: 26px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        color: #333333;
      }
    }
  }

  .filter {
    background-color: transparent;
    border: 0;
    font-size: 14px;
    line-height: 150%;
    font-weight: 600;
    color: #333333;
    padding: 0 !important;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 8px;

    button {
      background-color: transparent;
      border: 0;
    }
  }
`;
