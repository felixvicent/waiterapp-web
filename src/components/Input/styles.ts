import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  label {
    font-size: 14px;
    color: #333;
    font-weight: 400;
    margin-bottom: 8px;
    display: block;
  }

  input {
    padding: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    color: #666;
    outline: 0;

    ::placeholder {
      color: #bbb;
    }

    &:focus {
      border-color: #666666;
    }

    & + label {
      margin-top: 8px;
    }
  }

  button {
    background-color: transparent;
    border: 0;
    position: absolute;
    right: 12px;
    bottom: 10px;
  }
`;
