// Core
import { all } from 'redux-saga/effects';
// import { watchUser } from '../../bus/user/saga';

// Tools
import { watchUser } from '../../bus/user/saga';

export function* rootSaga() {
    yield all([ watchUser() ]);
}
