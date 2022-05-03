// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
// import { API_URL } from '../../../init/constants';

// Types
import * as types from '../types';

// Action
export const editMessagesAction = createAction<types.editAction>(`${sliceName}/EDIT_MESSAGES_ASYNC`);

// Saga
const editMessage = (callAction: ReturnType<typeof editMessagesAction>) => makeRequest<types.SimpleMessage>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`https://api.barbarossa.pp.ua/messages/${callAction.payload._id}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload.text }),
        }),

    },
});

// Watcher
export function* watchEditMessage(): SagaIterator {
    yield takeLatest(editMessagesAction.type, editMessage);
}
