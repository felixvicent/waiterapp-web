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
  width: 980px;
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
      gap: 32px;

      .left {
        flex: 1;

        .group {
          margin-bottom: 32px;
        }

        .image-input {
          position: relative;
          border: 1px solid #ccc;
          border-radius: 8px;
          overflow: hidden;

          label {
            height: 160px;
            width: 100%;

            > img {
              width: 100%;
              max-height: 244px;
              object-fit: cover;
            }
          }

          .image-button {
            background-color: #fff;
            position: absolute;
            bottom: 0;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 52px;
            gap: 8px;
            font-weight: 600;
            font-size: 16px;
            line-height: 100%;
            display: flex;
            align-items: center;
            color: #d73035;
            cursor: pointer;
          }
        }

        input[type="file"] {
          display: none;
        }
      }

      .right {
        flex: 1;

        .top-right {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;

          span {
            margin: 0;
          }

          button {
            width: max-content;
          }
        }
      }

      span {
        font-weight: 600;
        font-size: 18px;
        line-height: 120%;
        color: #666666;
        display: block;
        margin-bottom: 16px;
      }

      .categories {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: space-between;

        label {
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          display: flex;
          align-items: center;
          color: #666666;
        }

        button {
          background-color: transparent;
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.1);
          border-radius: 75px;
          padding: 14px;
          border: 0;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          color: #333333;

          span {
            margin: 0;
          }

          strong {
            font-weight: 600;
            font-size: 14px;
            line-height: 150%;
            color: #d73035;
          }
        }

        .select-categories {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          margin-top: 16px;
          gap: 12px;
        }
      }

      .ingredient-list {
        margin-top: 24px;
        height: 448px;
      }
    }

    .footer {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 48px;

      button {
        width: max-content;
      }
    }
  }
`;

export const CategoryButton = styled.div<{ selected: boolean }>`
  background: #ffffff;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.1);
  border-radius: 75px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #333333;
  padding: 11px 14px;
  cursor: pointer;

  ${({ selected }) =>
    selected &&
    `
    border: 0.75px solid #D73035;
  `}

  span {
    margin: 0 !important;
  }
`;

export const IngredientItem = styled.div<{ isChecked: boolean }>`
  border: 1px solid rgba(204, 204, 204, 0.3);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;

  .left {
    display: flex;
    align-items: center;
    gap: 8px;

    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #666666;

    span {
      margin: 0;
    }
  }

  .checkbox {
    border: 1.5px solid #666666;
    border-radius: 5px;
    width: 18px;
    height: 18px;
    position: relative;

    ${({ isChecked }) =>
      isChecked &&
      `
      ::after {
        content: "✓";
        position: absolute;
        left: 2px;
        bottom: -3px;
      }
    `}
  }

  & + & {
    margin-top: 4px;
  }
`;
