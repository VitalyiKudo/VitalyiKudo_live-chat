// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { userActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

import * as types from '../types';

// Action
export const createUserAction = createAction<types.username>(`${sliceName}/CREATE_USER_ASYNC`);

// Types
import { User } from '../types';

// Saga
const createUser = (callAction: ReturnType<typeof createUserAction>) => makeRequest<User>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/users/register`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: callAction.payload }),
        }),
    },
    succes: function* (result) {
        yield put(userActions.setUser(result));
        yield localStorage.setItem('userId', result._id);
    },
});

// Watcher
export function* watchCreateUser(): SagaIterator {
    yield takeLatest(createUserAction.type, createUser);
}
