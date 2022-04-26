// Types
import * as types from './types';

export const setMessages: types.BaseContact<types.Messages> = (state, action) => {
    state.messages = action.payload;
};

export const setMessage: types.BaseContact<types.SimpleMessage> = (state, action) => {
    state.message = action.payload;
};
