// Core
import { all } from 'redux-saga/effects';
import { watchMessages } from '../../bus/messages/saga';
// import { watchUser } from '../../bus/user/saga';

// Tools
import { watchUser } from '../../bus/user/saga';

export function* rootSaga() {
    yield all([ watchUser(), watchMessages() ]);
}
