// sagas.js
import { all, fork } from 'redux-saga/effects';
import userSaga from './sagas/userSaga';
import productSaga from './sagas/productSaga';

function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(productSaga),
  ]);
}

export default rootSaga;
