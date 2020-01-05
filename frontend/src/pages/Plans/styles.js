import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  max-width: 900px;
  padding: 30px;
  height: 100ch;

  header {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    overflow: scroll;

    strong {
      color: #fff;
      font-size: 24px;
      font-weight: bold;
      white-space: nowrap;
      margin-right: 60px;
    }

    div {
      display: flex;
      align-items: center;

      input {
        margin: 0 5px;
        border: 0;
        height: 36px;
        padding: 0 15px;
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
    }
  }
`;

export const Footer = styled.footer`
  margin-top: 10px;
  display: flex;
  width: 100%;
  height: 100ch;
  align-items: flex-start;
  overflow: scroll;
`;
