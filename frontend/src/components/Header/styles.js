import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: scroll;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 15px;
      padding-right: 15px;
      border-right: 1px solid #ddd;
    }

    a {
      text-decoration: none;
      display: block;
      font-weight: bold;
      margin-right: 15px;
      font-size: 13px;
      white-space: nowrap;
      color: #ee4d63;

      &.active {
        font-size: 15px;
        color: ${darken(0.4, '#ee4d63')};
      }

      &:hover {
        color: ${darken(0.2, '#ee4d63')};
        transform: translateY(-1px);
        transition: all 0.11s;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    strong {
      display: block;
      color: #333;
      font-size: 14px;
      white-space: nowrap;
      align-self: flex-end;
    }

    button {
      border: none;
      margin: 5px 0;
      color: #ee4d63;
      font-size: 12px;
      font-weight: bold;
      align-self: flex-end;

      &:hover {
        transform: translateY(-2px);
        transition: all 0.11s;
      }
    }
  }
`;
