import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const ButtonRegister = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
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
`;
