import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const NewHelpButton = styled(Button)`
  margin: 0 30px;
`;

export const HelpOders = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const Help = styled(TouchableOpacity)`
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  padding: 15px;
  margin: 5px 0;
`;

export const Info = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;

export const Answer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.Text`
  color: ${props => (props.answer ? '#83F400' : '#f9fb7a')};
  font-size: 16px;
  margin-left: 5px;
`;

export const Time = styled.Text`
  color: #eee;
  font-size: 14px;
`;

export const Question = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 14px;
`;

export const Header = styled.View`
  align-self: stretch;
  align-items: center;
  justify-content: center;
  padding: 15px;
`;
