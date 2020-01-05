import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '~/components/Background';

import logoHeader from '~/assets/logo_header.png';

import { Container, Help, Info, Title, Time, Question, Answer } from './styles';

export default function Show({ navigation }) {
  const help = navigation.getParam('help');

  return (
    <Background>
      <Container>
        <Help>
          <Info>
            <Title>PERGUNTA</Title>
            <Time>{help.dateRelative}</Time>
          </Info>
          <Question>{help.question}</Question>

          <Title>RESPOSTA</Title>
          <Answer>{help.answer || 'Ainda não houve uma respsota.'}</Answer>
        </Help>
      </Container>
    </Background>
  );
}

Show.navigationOptions = ({ navigation }) => ({
  headerTitle: () => <Image source={logoHeader} />,

  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={25} color="#fff" />
    </TouchableOpacity>
  ),
});
