import React, { useEffect, useState } from 'react';

import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { toast } from 'react-toastify';

import { MdDelete, MdCheckCircle, MdNotInterested } from 'react-icons/md';

import { Container, Footer } from './styles';

import RegisterEnrollment from './RegisterEnrollment';
import EditEnrollment from './EditEnrollment';

import InfoTable from '~/components/InfoTable';

import api from '~/services/api';
import history from '~/services/history';

export default function Enrollments() {
  const [enrollments, setEnrollments] = useState([]);

  const handleDelete = id => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Realmente deseja exluir essa matrícula?')) {
      api
        .delete(`enrollments/${id}`)
        .then(() => {
          history.go('enrollments');
        })
        .catch(() => {
          toast.error('Erro ao deletar matrícula');
        });
    }
  };

  useEffect(() => {
    async function loadingEnrollments() {
      const response = await api.get('enrollments');

      const data = response.data.map(enrollment => ({
        ...enrollment,
        startDateFormatted: format(
          parseISO(enrollment.start_date),
          "d 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        endDateFormatted: format(
          parseISO(enrollment.end_date),
          "d 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      }));

      setEnrollments(data);
    }

    loadingEnrollments();
  }, []);

  return (
    <Container>
      <header>
        <strong>Gerenciamento de Matrículas</strong>

        <div>
          <RegisterEnrollment />
        </div>
      </header>

      <Footer>
        <InfoTable>
          <thead>
            <tr>
              <th className="checkActivity">ATIVA</th>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉMINO</th>
            </tr>
          </thead>
          <tbody>
            {enrollments.map(enrollment => (
              <tr key={String(enrollment.id)}>
                <td className="checkActivity">
                  {enrollment.active && enrollment.Student ? (
                    <MdCheckCircle size={27} color="#94C160" />
                  ) : (
                    <MdNotInterested size={27} color="#DE3B3B" />
                  )}
                </td>
                <td>
                  {enrollment.Student ? enrollment.Student.name : 'Deletado'}
                </td>
                <td>{enrollment.Plan ? enrollment.Plan.title : 'Deletado'}</td>
                <td>{enrollment.startDateFormatted}</td>
                <td>{enrollment.endDateFormatted}</td>
                <td>
                  <div>
                    <EditEnrollment data={enrollment} />
                    <button
                      type="button"
                      onClick={() => handleDelete(enrollment.id)}
                    >
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
