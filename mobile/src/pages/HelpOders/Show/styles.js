import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 130px 30px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export const Help = styled.View`
  padding: 15px;
`;

export const Info = styled.View`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
  margin: 10px 0;
`;

export const Time = styled.Text`
  color: #ddd;
  font-size: 14px;
`;

export const Question = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-bottom: 10px;
`;

export const Answer = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-top: 10px;
`;
