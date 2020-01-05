import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '~/store/modules/auth/actions';

import logo from '~/assets/images/logo.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um email válido')
    .required('Não esqueça do seu email!'),
  password: Yup.string()
    .min(6, 'Senha deve ter no mínimo 6 digitos')
    .required('A senha não foi digitada :('),
});

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GYMPOINT" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <strong>EMAIL </strong>
        <Input name="email" type="email" placeholder="Digite seu email" />
        <strong>SENHA </strong>
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
