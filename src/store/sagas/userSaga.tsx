// userSaga.js
import { all, fork } from 'redux-saga/effects';

// User-related sagas go here

function* userSaga() {
  yield all([
    // Fork user-related sagas here
  ]);
}

export default userSaga;
