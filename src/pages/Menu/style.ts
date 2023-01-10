import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  .content {
    padding: 32px;

    .tabs {
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(204, 204, 204, 0.4);
      margin-bottom: 32px;
    }
  }
`;

export const Tab = styled.button<{ active: boolean }>`
  padding: 16px 40px;
  border: 0;
  background-color: transparent;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;
  color: #666666;

  ${({ active }) =>
    active &&
    `
      background: #fff;
      font-weight: 600;
      color: #D73035;
  `}
`;
