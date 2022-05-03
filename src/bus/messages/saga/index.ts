// Core
import { useDispatch } from 'react-redux';
import { SagaIterator } from '@redux-saga/core';
import { all, call } from 'redux-saga/effects';

// Watchers & Actions
import { fetchMessagesAction, watchFetchMessages } from './fetchMessages';
import { createMessagesAction, watchCreateMessage } from './createMessage';
import { editMessagesAction, watchEditMessage } from './editMessage';
import { deleteMessagesAction, watchDeleteMessage } from './deleteMessage';

// Types
import * as types from '../types';

export const useMessagesSaga = () => {
    const dispatch = useDispatch();

    return {
        fetchMessages: () => void dispatch(fetchMessagesAction()),
        createMessage: (message: types.SimpleMessage) => void dispatch(createMessagesAction(message)),
        editMessage:   (newMessage: types.editAction) => {
            dispatch(editMessagesAction(newMessage));
        },
        deleteMessage: (id: string) => void dispatch(deleteMessagesAction(id)),
    };
};

export function* watchMessages(): SagaIterator {
    yield all([ call(watchFetchMessages), call(watchCreateMessage), call(watchEditMessage), call(watchDeleteMessage) ]);
}
