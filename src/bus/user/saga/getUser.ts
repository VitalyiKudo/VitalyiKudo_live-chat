// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
// import { API_URL } from '../../../init/constants';


// Action
export const getUserAction = createAction(`${sliceName}/GET_USER_ASYNC`);

// Types
import { User } from '../types';

// Saga
const getUser = (callAction: ReturnType<typeof getUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`https://api.barbarossa.pp.ua/users/refresh/${localStorage.getItem('userId')}`, {
            method:  'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
    succes: function* (result) {
        yield put(userActions.setUser(result));
    },
});

// Watcher
export function* watchFetchUser(): SagaIterator {
    yield takeLatest(getUserAction.type, getUser);
}
