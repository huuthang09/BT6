import {all} from 'redux-saga/effects';
import {watchGetPopular} from './PopularSagas';
import {watchGetWoman} from './PopularSagas';

export default function* rootSaga() {
  yield all([watchGetPopular(), watchGetWoman()]);
}