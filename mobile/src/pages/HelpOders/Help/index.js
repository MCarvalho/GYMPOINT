import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, TouchableOpacity, Alert } from 'react-native';

import logoHeader from '~/assets/logo_header.png';

import Background from '~/components/Background';

import { Container, QuestionInput, SubmitButton } from './styles';

import api from '~/services/api';

export default function Help({ navigation }) {
  const [question, setQuestion] = useState('');
  const student_id = useSelector(state => state.student.student.id);

  const handleSubmit = async () => {
    await api
      .post(`students/${student_id}/help-orders`, {
        question,
      })
      .then(() => {
        Alert.alert(
          'Sucesso!',
          'Sua questão foi enviada, será respondido em breve!'
        );
        navigation.goBack();
      })
      .catch(() => {
        Alert.alert(
          'Erro ao enviar',
          'Não foi possível enviar seu pedido de ajuda :('
        );
      });
  };

  return (
    <Background>
      <Container>
        <QuestionInput
          multiline
          placeholder="Inclua seu pedido de ajuda"
          returnKeyType="send"
          value={question}
          onSubmitEditing={handleSubmit}
          onChangeText={setQuestion}
        />

        <SubmitButton onPress={handleSubmit}>Enviar pedido</SubmitButton>
      </Container>
    </Background>
  );
}

Help.navigationOptions = ({ navigation }) => ({
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
