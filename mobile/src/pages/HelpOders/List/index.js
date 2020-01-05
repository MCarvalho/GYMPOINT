import React, { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import { formatDistanceStrict, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Background from '~/components/Background';

import {
  Container,
  NewHelpButton,
  HelpOders,
  Help,
  Info,
  Answer,
  Status,
  Time,
  Question,
  Header,
} from './styles';

import logoHeader from '~/assets/logo_header.png';

import api from '~/services/api';

function List({ navigation, isFocused }) {
  const student_id = useSelector(state => state.student.student.id);
  const [helpOders, setHelOders] = useState([]);

  const loadHelpOders = useCallback(async () => {
    const response = await api.get(`students/${student_id}/help-orders`);

    const data = response.data.map(item => ({
      ...item,
      dateRelative: formatDistanceStrict(parseISO(item.updatedAt), new Date(), {
        locale: pt,
        addSuffix: true,
      }),
    }));

    setHelOders(data);
  }, [student_id]);

  useEffect(() => {
    if (isFocused) loadHelpOders();
  }, [student_id, isFocused, loadHelpOders]);

  return (
    <Background>
      <Container>
        <Header>
          <Image source={logoHeader} />
        </Header>

        <NewHelpButton onPress={() => navigation.navigate('Help')}>
          Novo Pedido de ajuda
        </NewHelpButton>

        <HelpOders
          data={helpOders}
          keyExtractor={help => String(help._id)}
          renderItem={({ item: help }) => (
            <Help onPress={() => navigation.navigate('Show', { help })}>
              <Info>
                {/** MELHORAR STATUS DPS (POR ICON zzzz) */}

                {help.answer ? (
                  <Answer>
                    <Icon name="mood" size={25} color="#83F400" />
                    <Status answer={help.answer}>Respondido</Status>
                  </Answer>
                ) : (
                  <Answer>
                    <Icon name="mood-bad" size={25} color="#f9fb7a" />
                    <Status answer={help.answer}>Sem resposta</Status>
                  </Answer>
                )}
                <Time>{help.dateRelative}</Time>
              </Info>

              <Question>{help.question}</Question>
            </Help>
          )}
        />
      </Container>
    </Background>
  );
}

List.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(List);
