import styled from 'styled-components';
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
