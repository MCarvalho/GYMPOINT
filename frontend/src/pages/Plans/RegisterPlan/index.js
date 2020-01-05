/* eslint-disable no-unused-expressions */
import React, { useState, useMemo } from 'react';
import { MdLibraryAdd, MdArrowBack, MdSave } from 'react-icons/md';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { FloatForm, Content } from '~/components/FloatForm';
import { formatPrice } from '~/util/format';

import api from '~/services/api';

import history from '~/services/history';

import { Container, ButtonRegister } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('É necessário o nome do plano'),
  duration: Yup.number('Em meses').required('Quantos meses duram o plano?'),
  price: Yup.number('Digite um preço').required('Quanto?'),
});

export default function RegisterPlan() {
  const [visible, setVisible] = useState(false);
  const [duriationChange, setduriationChange] = useState(0);
  const [priceChange, setpriceChange] = useState(0);

  async function handleFormChange(e) {
    e.target.id === 'duration' && setduriationChange(e.target.value);
    e.target.id === 'price' && setpriceChange(e.target.value);
  }

  const totalPrice = useMemo(() => formatPrice(duriationChange * priceChange), [
    priceChange,
    duriationChange,
  ]);

  async function handleSubmit({ title, duration, price }) {
    await api
      .post('plans', {
        title,
        duration,
        price,
      })
      .then(() => {
        setVisible(!visible);
        history.go('/plans');
      })
      .catch(() => {
        toast.error('Houve alguma falha no cadastro, verifique os dados');
      });
  }

  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <Container>
      <ButtonRegister onClick={handleVisible}>
        <MdLibraryAdd size={22} />
        CADASTRAR
      </ButtonRegister>

      <FloatForm visible={visible}>
        <Content visible={visible}>
          <Form
            schema={schema}
            onSubmit={handleSubmit}
            onChange={handleFormChange}
          >
            <header>
              <strong>Cadastro de Plano</strong>
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
              <strong>TÍTULO DO PLANO</strong>
              <Input name="title" type="text" placeholder="Digite o título" />
              <div>
                <div>
                  <strong>DURAÇÃO (em meses)</strong>
                  <Input
                    name="duration"
                    type="number"
                    placeholder="Duração em meses"
                  />
                </div>
                <div>
                  <strong>PREÇO MENSAL</strong>
                  <Input
                    name="price"
                    type="number"
                    step="any"
                    placeholder="Valor mensal"
                  />
                </div>
                <div>
                  <strong>PREÇO TOTAL</strong>
                  <Input
                    name="totalPrice"
                    readOnly
                    value={totalPrice}
                    placeholder="Será calculado."
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
