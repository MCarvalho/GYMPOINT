import React, { useState, useEffect } from 'react';
import { parseISO, formatDistanceStrict } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdDelete } from 'react-icons/md';
import { toast } from 'react-toastify';
import { Container, Footer } from './styles';

import RegisterStudent from './RegisterStudent';
import EditStudent from './EditStudent';

import InfoTable from '~/components/InfoTable';
import api from '~/services/api';
import history from '~/services/history';

export default function Students() {
  const [inputSearch, setInputSearch] = useState('');
  const [students, setStudents] = useState([]);

  const handleInputSearch = e => {
    setInputSearch(e.target.value);
  };

  const handleDelete = id => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Realmente deseja exluir esse aluno?')) {
      api
        .delete(`students/${id}`)
        .then(() => {
          history.go('students');
        })
        .catch(() => {
          toast.error('Erro ao deletar aluno');
        });
    }
  };

  useEffect(() => {
    async function loadingStudents() {
      const response = await api.get('students', {
        params: {
          name: inputSearch,
        },
      });

      const data = response.data.map(student => ({
        ...student,
        ageCalc: formatDistanceStrict(parseISO(student.age), new Date(), {
          addSuffix: false,
          locale: pt,
        }),
      }));

      setStudents(data);
    }

    loadingStudents();
  }, [inputSearch, setInputSearch]);

  return (
    <Container>
      <header>
        <strong>Gerenciamento de Alunos</strong>

        <div>
          <RegisterStudent />
          <input
            type="text"
            placeholder="Buscar Aluno"
            onChange={handleInputSearch}
          />
        </div>
      </header>

      <Footer>
        <InfoTable>
          <thead>
            <tr>
              <th>NOME</th>
              <th>EMAIL</th>
              <th>IDADE</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={String(student.id)}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.ageCalc}</td>
                <td>
                  <div>
                    <EditStudent data={student} />
                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
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
