import React, { useState } from 'react';
import { Image } from 'react-native';
import { useDispatch } from 'react-redux';

import Background from '~/components/Background';

import logo from '~/assets/logo_signin.png';

import { signInRequest } from '~/store/modules/student/actions';

import { Container, Form, FormInput, SubmitButton } from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [id, setId] = useState('');

  const handleSubmit = () => {
    dispatch(signInRequest(id));
  };

  return (
    <Background>
      <Container>
        <Image source={logo} />

        <Form>
          <FormInput
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Informe seu ID de cadastr"
            returnKeyType="send"
            value={id}
            onSubmitEditing={handleSubmit}
            onChangeText={setId}
          />

          <SubmitButton onPress={handleSubmit}>Acessar</SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
