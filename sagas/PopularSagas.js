import {call, put, takeEvery} from 'redux-saga/effects';
import {GET_DATA_REQUEST, getDataFail, getDataSuccess, GET_DATA_WOMAN_REQUEST, getDataWomanFail, getDataWomanSuccess} from '../actions/PopularActions';
import {getPopular} from '../api/Api';
import {getWoman} from '../api/Api';
import {sendNetworkFail} from '../actions/actions';

export function* watchGetPopular() {
  yield takeEvery(GET_DATA_REQUEST, handleGetPopular);
}

export function* watchGetWoman() {
  yield takeEvery(GET_DATA_WOMAN_REQUEST, handleGetWoman);
}

function* handleGetPopular(action) {
  const response = yield call(getPopular, action.payload);
  if (response !== []) {
    yield put(getDataSuccess(response));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getDataFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getDataFail(response.problem));
    }
  }
}

function* handleGetWoman(action) {
  const response = yield call(getWoman, action.payload);
  if (response !== []) {
    yield put(getDataWomanSuccess(response));
  } else {
    if (
      response.problem !== 'NETWORK_ERROR' &&
      response.problem !== 'TIMEOUT_ERROR' &&
      response.problem !== 'CONNECTION_ERROR'
    ) {
      yield put(getDataWomanFail(response.problem));
    } else {
      yield put(sendNetworkFail(response.problem));
      yield put(getDataWomanFail(response.problem));
    }
  }
}