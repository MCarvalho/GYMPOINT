import React, { useState } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

import { MdArrowBack, MdSend, MdQuestionAnswer } from 'react-icons/md';

import { Form, Input } from '@rocketseat/unform';

import api from '~/services/api';
import history from '~/services/history';

import { FloatForm, Content } from '~/components/FloatForm';

import { Container, AnswerButton, QuestionStudent } from './styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('Qual a resposta para o aluno?'),
});

export default function Answer({ data }) {
  const [visible, setVisible] = useState(false);

  async function handleSubmit({ answer }) {
    await api
      .post(`help-orders/${data._id}/answer`, {
        answer,
      })
      .then(() => {
        setVisible(!visible);
        history.go('/students');
      })
      .catch(() => {
        toast.error('Houve alguma falha na resposta, verifique os dados');
      });
  }

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <AnswerButton onClick={handleVisible}>
        <MdQuestionAnswer size={22} color="#4D85EE" />
        <strong>RESPONDER</strong>
      </AnswerButton>

      <FloatForm visible={visible}>
        <Content visible={visible}>
          <Form initialData={data} schema={schema} onSubmit={handleSubmit}>
            <header>
              <strong>Responder Aluno</strong>
              <div>
                <button type="button" onClick={handleVisible}>
                  <MdArrowBack size={22} />
                  Voltar
                </button>
                <button type="submit">
                  <MdSend size={22} />
                  ENVIAR
                </button>
              </div>
            </header>

            <QuestionStudent>
              <strong>Pergunta do aluno: {data.student_name}</strong>
              <sub>{data.question}</sub>
              <strong>Resposta:</strong>
              <Input
                name="answer"
                type="text"
                multiline
                placeholder="Seja gentil :)"
              />
            </QuestionStudent>
          </Form>
        </Content>
      </FloatForm>
    </Container>
  );
}

Answer.propTypes = {
  data: PropTypes.isRequired,
};
