// Core
import { SagaIterator } from '@redux-saga/core';
import { createAction } from '@reduxjs/toolkit';
import { takeLatest } from 'redux-saga/effects';

// Slice
import { sliceName } from '../slice';

// Tools
import { makeRequest } from '../../../tools/utils';
// import { API_URL } from '../../../init/constants';

// Action
export const deleteMessagesAction = createAction<string>(`${sliceName}/DELETE_MESSAGE_ASYNC`);

// Types
import { Messages } from '../types';

// Saga
const deleteMessage = (callAction: ReturnType<typeof deleteMessagesAction>) => makeRequest<Messages>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`https://api.barbarossa.pp.ua/messages/${callAction.payload}`, {
            method:  'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }),
    },
});

// Watcher
export function* watchDeleteMessage(): SagaIterator {
    yield takeLatest(deleteMessagesAction.type, deleteMessage);
}
