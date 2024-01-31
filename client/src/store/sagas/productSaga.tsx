// productSaga.js
import { all, fork } from 'redux-saga/effects';

// Product-related sagas go here

function* productSaga() {
  yield all([
    // Fork product-related sagas here
  ]);
}

export default productSaga;
