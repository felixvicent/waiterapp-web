import styled from "styled-components";

export const StyledTable = styled.table`
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  border-collapse: collapse;
  border: 1px solid rgba(204, 204, 204, 0.4);

  thead {
    background: rgba(204, 204, 204, 0.2);
  }

  thead th,
  tbody td,
  thead th button {
    font-size: 14px;
    text-align: left;
    line-height: 150%;
    padding: 13.5px 16px;
    color: #333333;
  }

  thead th {
    font-weight: 600;
    opacity: 0.9;
  }

  tbody td {
    font-weight: 400;
  }

  tbody tr {
    & + tr {
      border-top: 1px solid rgba(204, 204, 204, 0.4);
    }
  }

  tbody {
    background-color: #fff;
  }
`;
