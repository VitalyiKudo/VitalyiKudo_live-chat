// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { createUserAction, watchCreateUser } from './createUser';

// Types
import * as types from '../types';
import { getUserAction, watchFetchUser } from './getUser';

export const useUserSaga = () => {
    const dispatch = useDispatch();

    return {
        createUser: (username: types.username) => void dispatch(createUserAction(username)),
        getUser:    () => void dispatch(getUserAction()),
    };
};

export function* watchUser(): SagaIterator {
    yield all([ call(watchCreateUser), call(watchFetchUser) ]);
}
