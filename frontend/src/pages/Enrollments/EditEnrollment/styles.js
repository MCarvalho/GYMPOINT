import styled from 'styled-components';
import Select from 'react-select';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;

  strong {
    align-self: flex-start;
  }
`;

export const EditButton = styled.div`
  display: flex;
  align-items: center;
  border: 0;
  background: rgba(255, 255, 255, 0.5);
  padding: 3px;
  border-radius: 4px;

  &:hover {
    background: ${darken(0.01, '#000')};
    transform: translateY(-3px);
    transition: all 0.11s;
  }
`;

export const SelectDrop = styled(Select)`
  margin: 10px 0;
  background: transparent;
  border-radius: 4px;

  * {
    padding: 0;
    margin: 0;
    background: transparent;
    color: #ee4d63;
    border: 0;
    border-radius: 0;

    &:hover {
      background: rgba(255, 255, 255, 0.7);
      transform: translateY(-1px);
      transition: all 0.1s;
    }
  }

  div {
    width: 100%;
    background: rgba(255, 255, 255, 0.6);

    div.css-1hwfws3 {
      background: transparent;
      height: 45px;

      div.css-1uccc91-singleValue {
        margin: 0;
        padding: 0 15px;
        display: flex;
        align-items: flex-start;
        background: transparent;
        color: #ee4d63;
        font-weight: bold;
        font-size: 16px;
      }

      div.css-1wa3eu0-placeholder {
        padding: 0 15px;
        display: flex;
        align-items: flex-start;
        background: transparent;
        color: #ee4d63;
        font-weight: bold;
        font-size: 16px;
      }

      div.css-b8ldur-Input {
        background: transparent;

        div {
          background: transparent;

          input {
            padding: 0 15px;
            display: flex;
            align-items: flex-start;
            background: transparent;
            color: #ee4d63;
            font-weight: bold;
            font-size: 16px;
          }
        }
      }
    }

    div.css-1hb7zxy-IndicatorsContainer {
      background: rgba(255, 255, 255, 0.6);
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        background: transparent;
      }
    }
  }
`;
