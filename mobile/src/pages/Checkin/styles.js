import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import Button from '~/components/Button';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const NewCheckInButton = styled(Button)`
  margin: 0 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})``;

export const CheckinView = styled.View`
  background: rgba(0, 0, 0, 0.2);
  margin: 5px 0;
  padding: 10px 10px;
  border-radius: 4px;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Info = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #eee;
`;

export const Time = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #eee;
  margin-top: 5px;
`;

export const Header = styled.View`
  margin: 0 30px;
  align-self: stretch;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  flex-direction: row;
`;

export const ImageLogo = styled.Image`
  align-self: center;
`;

export const LogOutButton = styled(RectButton)`
  height: 24px;
  background: #eee;
  border-radius: 4px;
  padding: 2px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
