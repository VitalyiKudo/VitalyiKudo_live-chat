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
export const editMessagesAction = createAction<string>(`${sliceName}/EDIT_MESSAGES_ASYNC`);

// Saga
const editMessage = (callAction: ReturnType<typeof editMessagesAction>) => makeRequest<types.SimpleMessage>({
    callAction,
    fetchOptions: {
        successStatusCode: 200,
        fetch:             () => fetch(`https://api.barbarossa.pp.ua/messages/${localStorage.getItem('messageId')}`, {
            method:  'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: callAction.payload }),
        }),
    },
});

// Watcher
export function* watchEditMessage(): SagaIterator {
    yield takeLatest(editMessagesAction.type, editMessage);
}
