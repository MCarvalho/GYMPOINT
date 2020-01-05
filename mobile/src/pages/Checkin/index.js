/* eslint-disable react/prop-types */
import React, { useEffect, useState, useCallback } from 'react';
import { Alert, View } from 'react-native';

import PropTypes from 'prop-types';

import { withNavigationFocus } from 'react-navigation';

import { formatDistanceStrict, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useSelector, useDispatch } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import logoHeader from '~/assets/logo_header.png';

import api from '~/services/api';

import Background from '~/components/Background';

import { signOut } from '~/store/modules/student/actions';

import {
  Container,
  NewCheckInButton,
  List,
  CheckinView,
  Info,
  Time,
  Header,
  LogOutButton,
  ImageLogo,
} from './styles';

function Checkin({ isFocused }) {
  const [checkins, setCheckins] = useState([]);

  const dispatch = useDispatch();

  const student_id = useSelector(state => state.student.student.id);

  const loadCheckIns = useCallback(async () => {
    const response = await api.get(`students/${student_id}/checkins`);

    const data = response.data.map(checkin => ({
      ...checkin,
      dateRelative: formatDistanceStrict(
        parseISO(checkin.createdAt),
        new Date(),
        {
          locale: pt,
          addSuffix: true,
        }
      ),
    }));

    setCheckins(data);
  }, [student_id]);

  useEffect(() => {
    if (isFocused) loadCheckIns();
  }, [isFocused, loadCheckIns]);

  const handleNewCheckin = async () => {
    await api
      .post(`/students/${student_id}/checkins`)
      .then(response => {
        setCheckins([]);
        loadCheckIns();

        if (response.data.error)
          Alert.alert(
            'Checkin invalido',
            'Só pode realizar 5 checkins por semana'
          );
      })
      .catch(() => {
        Alert.alert('Erro checkin', 'Não foi possível realizar checkin');
      });
  };

  const handleLogOut = () => {
    dispatch(signOut());
  };

  return (
    <Background>
      <Container>
        <Header>
          <View />

          <ImageLogo source={logoHeader} />

          <LogOutButton onPress={handleLogOut}>
            <Icon name="power-settings-new" size={22} color="#EE4D63" />
          </LogOutButton>
        </Header>

        <NewCheckInButton onPress={handleNewCheckin}>
          Novo check-in
        </NewCheckInButton>

        <List
          data={checkins}
          keyExtractor={item => String(item._id)}
          renderItem={({ item }) => (
            <CheckinView>
              <Info>Check-in #{item._id}</Info>
              <Time>{item.dateRelative}</Time>
            </CheckinView>
          )}
        />
      </Container>
    </Background>
  );
}

Checkin.navigationOptions = {
  tabBarLabel: 'Check-Ins',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="check-box" size={20} color={tintColor} />
  ),
};

Checkin.propTypes = {
  isFocused: PropTypes.bool.isRequired,
};

export default withNavigationFocus(Checkin);
