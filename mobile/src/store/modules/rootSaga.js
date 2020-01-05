import { all } from 'redux-saga/effects';

import student from './student/sagas';

export default function* rootSata() {
  return yield all([student]);
}
