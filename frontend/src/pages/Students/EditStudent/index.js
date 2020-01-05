import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdArrowBack, MdSave, MdEdit } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import { FloatForm, Content } from '~/components/FloatForm';

import { Container, EditButton } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('É necessário o nome do aluno'),
  email: Yup.string()
    .email('Email inválido')
    .required('Email é obritório'),
  age: Yup.date('Digite uma data').required('Preciso de uma data!'),
  weight: Yup.number('Peso em KG').required('Não esqueça do peso'),
  height: Yup.number('Digite a altura').required('Qual altura?'),
});

export default function EditStudent({ data }) {
  const [visible, setVisible] = useState(false);

  async function handleSubmit({ name, email, age, weight, height }) {
    await api
      .put(`students/${data.id}`, {
        name,
        email,
        age,
        weight,
        height,
      })
      .then(() => {
        setVisible(!visible);
        history.go('/students');
      })
      .catch(() => {
        toast.error('Houve alguma falha na atualização, verifique os dados');
      });
  }

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <EditButton onClick={handleVisible}>
        <MdEdit size={22} color="#4D85EE" />
      </EditButton>

      <FloatForm visible={visible}>
        <Content visible={visible}>
          <Form initialData={data} schema={schema} onSubmit={handleSubmit}>
            <header>
              <strong>Editar Aluno</strong>
              <div>
                <button type="button" onClick={handleVisible}>
                  <MdArrowBack size={22} />
                  Voltar
                </button>
                <button type="submit">
                  <MdSave size={22} />
                  Salvar
                </button>
              </div>
            </header>

            <footer>
              <strong>NOME COMPLETO</strong>
              <Input
                name="name"
                type="text"
                placeholder="Digite o nome completo do aluno"
              />
              <strong>EMAIL</strong>
              <Input
                name="email"
                type="email"
                placeholder="Digite o email do aluno"
              />
              <div>
                <div>
                  <strong>DATA NASCIMENTO</strong>
                  <Input name="age" type="date" />
                </div>
                <div>
                  <strong>PESO</strong>
                  <Input
                    name="weight"
                    type="number"
                    step="any"
                    placeholder="Peso do aluno"
                  />
                </div>
                <div>
                  <strong>AlTURA</strong>
                  <Input
                    name="height"
                    type="number"
                    step="any"
                    placeholder="Altura do aluno"
                  />
                </div>
              </div>
            </footer>
          </Form>
        </Content>
      </FloatForm>
    </Container>
  );
}

EditStudent.propTypes = {
  data: PropTypes.object.isRequired,
};
