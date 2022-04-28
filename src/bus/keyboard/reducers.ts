// Types
import * as types from './types';

export const setKeyboard: types.BaseContact<types.Keyboard> = (state, action) => {
    state.keyboardValue = action.payload;
};
