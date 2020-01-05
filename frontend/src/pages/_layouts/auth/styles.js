import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: rgb(247, 155, 167);
  background: linear-gradient(
    135deg,
    rgba(247, 155, 167, 1) 0%,
    rgba(238, 77, 99, 1) 100%
  );

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
  padding: 30px;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 360px;
  background: rgb(238, 77, 99);
  background: linear-gradient(
    135deg,
    rgba(238, 77, 99, 1) 0%,
    rgba(247, 155, 167, 1) 100%
  );
  border-radius: 4px;
  padding: 30px;
  /*border: 1px solid #eee;
    */
  img {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    strong {
      font-size: 16px;
      color: #fff;
      margin-bottom: 5px;
    }

    input {
      border: 0;
      height: 45px;
      padding: 0 15px;
      margin: 0 0 10px;
      color: #ee4d63;
      font-weight: bold;
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

    span {
      color: #fff;
      align-self: flex-end;
      margin: 0 0 10px;
    }

    button {
      margin: 5px 0 0;
      height: 45px;
      font-weight: bold;
      background: #eee;
      border: 0;
      color: #ee4d63;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#eee')};
        transform: translateY(-1px);
        transition: all 0.11s;
      }
    }
  }
`;
