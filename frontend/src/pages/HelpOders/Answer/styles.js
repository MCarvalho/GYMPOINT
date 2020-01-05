import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;

  strong {
    align-self: flex-start;
  }
`;

export const AnswerButton = styled.div`
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

  strong {
    color: #4d85ee;
  }
`;

export const QuestionStudent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  strong {
    margin: 10px 0;
    font-size: 20px;
    font-weight: bold;
  }

  sub {
    align-self: flex-start;
    font-size: 20px;
    padding: 4px;
  }

  textarea {
    align-self: flex-start;
    width: 100%;
    min-height: 100px;
    padding: 15px;
    margin: 0 0 10px;
    color: #ee4d63;
    font-weight: bold;
    font-size: 16px;
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
`;
