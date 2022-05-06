// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';

// Slice
import { messagesActions, sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
import { API_URL } from '../../../init/constants';

// Types
import * as types from '../types';

// Action
export const createMessagesAction = createAction<types.SimpleMessage>(`${sliceName}/CREATE_MESSAGES_ASYNC`);

// Saga
const createMessage = (callAction: ReturnType<typeof createMessagesAction>) => makeRequest<types.Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 201,
        fetch:             () => fetch(`${API_URL}/messages`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(callAction.payload),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.pullMessage(result));
    },
});

// Watcher
export function* watchCreateMessage(): SagaIterator {
    yield takeLatest(createMessagesAction.type, createMessage);
}
