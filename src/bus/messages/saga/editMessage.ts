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
export const editMessagesAction = createAction<types.editAction>(`${sliceName}/EDIT_MESSAGES_ASYNC`);

// Saga
const editMessage = (callAction: ReturnType<typeof editMessagesAction>) => makeRequest<types.Message>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`${API_URL}/messages/${callAction.payload._id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload.text }),
        }),
    },
    succes: function* (result) {
        yield put(messagesActions.editMessage(result));
    },
});

// Watcher
export function* watchEditMessage(): SagaIterator {
    yield takeLatest(editMessagesAction.type, editMessage);
}
