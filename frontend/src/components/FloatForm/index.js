import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const FloatForm = styled.div`
  ${props =>
    props.visible
      ? css`
          position: fixed;
          display: none;
          align-items: center;
          justify-content: center;
          top: 0;
          left: 0;
          z-index: 10;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.6);
        `
      : css`
          display: none;
          position: relative;

          button {
            display: none;
          }
        `};
`;

export const Content = styled.div`
  ${props =>
    props.visible
      ? css`
          display: flex;
          padding: 30px;
          margin: 0 10px;
        `
      : css`
          display: none;
        `};
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  border-radius: 4px;
  background: rgb(238, 77, 99);
  background: linear-gradient(
    135deg,
    rgba(238, 77, 99, 1) 0%,
    rgba(247, 155, 167, 1) 100%
  );

  form {
    width: 100%;
    max-width: 700px;
    flex-direction: column;
    display: ${props => (props.visible ? 'flex' : 'none')};

    span {
      color: #fff;
      align-self: flex-end;
      margin: 5px 0;
    }

    header {
      display: ${props => (props.visible ? 'flex' : 'none')};
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 24px;
        color: #fff;
        margin-bottom: 5px;
        margin-right: 0px;
      }

      button {
        display: flex;
        align-items: center;
        height: 36px;
        margin: 0 5px;
        font-weight: bold;
        background: #eee;
        border: 0;
        padding: 0 15px;
        color: #ee4d63;
        border-radius: 4px;
        font-size: 16px;

        svg {
          margin-right: 5px;
        }

        &:hover {
          background: ${darken(0.05, '#eee')};
          transform: translateY(-1px);
          transition: all 0.11s;
        }
      }
    }

    footer {
      display: ${props => (props.visible ? 'flex' : 'none')};
      flex-direction: column;

      strong {
        font-size: 14px;
        margin: 10px 0;

        &:first-child {
          margin-top: 30px;
        }
      }

      select {
        border: 0;
        height: 45px;
        color: #ee4d63;
        font-size: 16px;
        font-weight: bold;
        padding: 0 15px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.6);

        &::placeholder {
          color: rgba(238, 77, 99, 0.7);
        }

        &:focus {
          border: 1px solid #eee;
        }

        &:hover {
          background: ${darken(0.1, '#fff')};
          transform: translateY(-1px);
          transition: all 0.11s;
        }
      }

      input {
        border: 0;
        height: 45px;
        color: #ee4d63;
        font-weight: bold;
        padding: 0 15px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.6);

        &::placeholder {
          color: rgba(238, 77, 99, 0.7);
        }

        &:focus {
          border: 1px solid #eee;
        }

        &:hover {
          background: ${darken(0.1, '#fff')};
          transform: translateY(-1px);
          transition: all 0.11s;
        }
      }

      div {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

        div {
          strong {
            align-self: flex-start;
          }
          display: flex;
          flex-direction: column;
        }

        span {
          display: none;

          &::after {
            content: 'Campo inválido';
            display: flex;
            font-size: 12px;
            width: 100%;
          }
        }
      }
    }
  }
`;
