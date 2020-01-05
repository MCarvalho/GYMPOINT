import React, { useEffect, useState } from 'react';

import { Container, Footer } from './styles';

import InfoTable from '~/components/InfoTable';

import api from '~/services/api';

import Answer from './Answer';

export default function HelpOders() {
  const [helpOders, setHelpOders] = useState([]);

  useEffect(() => {
    async function loadingHelpOders() {
      const response = await api.get('help-oders');
      console.tron.log(response.data);
      setHelpOders(response.data);
    }

    loadingHelpOders();
  }, []);
  return (
    <Container>
      <header>
        <strong>Gerenciamento de Auxílios</strong>
      </header>

      <Footer>
        <InfoTable>
          <thead>
            <tr>
              <th>ALUNO</th>
            </tr>
          </thead>
          <tbody>
            {helpOders.map(helpoder => (
              <tr key={String(helpoder._id)}>
                <td>{helpoder.student_name || 'Deletado'}</td>
                <td className="options">
                  <div>
                    <Answer data={helpoder} />
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
