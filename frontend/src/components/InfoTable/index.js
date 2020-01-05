import styled from 'styled-components';
import { darken } from 'polished';

const InfoTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  overflow: scroll;
  background: rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  width: 100%;

  thead th,
  tbody td {
    &.options {
      position: relative;
      max-width: 60px;
      text-align: center;
    }
  }

  thead th {
    color: #fff;
    text-align: left;
    font-size: 16px;
    font-weight: bold;
    padding: 12px;

    &.checkActivity {
      text-align: center;
    }
  }

  tbody td {
    color: #eee;
    font-size: 16px;
    padding: 12px;
    border-bottom: 1px solid #eee;

    &.checkActivity {
      text-align: center;

      svg {
        align-self: center;
        border: 0;
        background: rgba(0, 0, 0, 0.5);
        padding: 3px;
        border-radius: 4px;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    button {
      display: flex;
      align-items: center;
      margin: 0 3px;
      border: 0;
      background: rgba(255, 255, 255, 0.5);
      padding: 3px;
      border-radius: 4px;

      &:hover {
        background: ${darken(0.01, '#000')};
        transform: translateY(-3px);
        transition: all 0.11s;
      }

      strong {
        padding: 3px;
        font-size: 16px;
        font-weight: bold;
        color: #4d85ee;
      }
    }
  }
`;

export default InfoTable;
