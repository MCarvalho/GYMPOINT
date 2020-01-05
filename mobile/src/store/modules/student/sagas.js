import { takeLatest, all, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';

import { signInSuccess } from './actions';

export function* signInRequest({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.get, `students/${id}/signin`);

    console.tron.log(response.data);

    yield put(signInSuccess(response.data));
  } catch (err) {
    Alert.alert('Erro ao logar', 'Nao foi possivel encontrar o id');
  }
}

export default all([takeLatest('@student/SIGN_IN_REQUEST', signInRequest)]);
