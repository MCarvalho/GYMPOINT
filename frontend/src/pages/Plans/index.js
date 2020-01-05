import React, { useState, useEffect } from 'react';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { formatPrice } from '~/util/format';

import { Container, Footer } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import RegisterPlan from './RegisterPlan';
import EditPlan from './EditPlan';

import InfoTable from '~/components/InfoTable';

export default function Plans() {
  const [plans, setPlans] = useState([]);

  const handleDelete = id => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Realmente deseja exluir esse plano?')) {
      api
        .delete(`plans/${id}`)
        .then(() => {
          history.go('plans');
        })
        .catch(() => {
          toast.error('Erro ao deletar plano');
        });
    }
  };

  useEffect(() => {
    async function loadingPlans() {
      const response = await api.get('plans');

      const data = response.data.map(plan => ({
        ...plan,
        formatedPrice: formatPrice(plan.price),
        durationMonth: `${plan.duration} ${
          plan.duration !== 1 ? 'meses' : 'mês'
        }`,
      }));

      setPlans(data);
    }

    loadingPlans();
  }, []);

  return (
    <Container>
      <header>
        <strong>Gerenciamento de Planos</strong>

        <div>
          <RegisterPlan />
        </div>
      </header>

      <Footer>
        <InfoTable>
          <thead>
            <tr>
              <th>TÍTULO</th>
              <th>DURAÇÃO</th>
              <th>VALOR p/ MÊS</th>
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr key={String(plan.id)}>
                <td>{plan.title}</td>
                <td>{plan.durationMonth}</td>
                <td>{plan.formatedPrice}</td>
                <td>
                  <div>
                    <EditPlan data={plan} />
                    <button type="button" onClick={() => handleDelete(plan.id)}>
                      <MdDelete size={22} color="#DE3B3B" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </Footer>
    </Container>
  );
}
