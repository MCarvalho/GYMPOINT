import { Platform } from 'react-native';
import styled from 'styled-components/native';

import Button from '~/components/Button';
import Input from '~/components/Input';

export const Container = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'padding',
})`
  flex: 1;
  margin: 0 30px;
  align-items: center;
  justify-content: center;
`;

export const QuestionInput = styled(Input)`
  height: 400px;
  padding: 15px 10px;
  align-items: flex-start;

  margin-bottom: 20px;
`;

export const SubmitButton = styled(Button)`
  align-self: stretch;
`;
