import styled from 'styled-components/native';

export const Container = styled.View`
  height: 45px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const TInpunt = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(238, 77, 99, 0.8)',
})`
  flex: 1;
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
  color: #ee4d63;
`;
