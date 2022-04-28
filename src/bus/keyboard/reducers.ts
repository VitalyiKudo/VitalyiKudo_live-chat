// Types
import * as types from './types';

export const setValue: types.BaseContact<string> = (state, action) => {
    state.value = action.payload;
};

export const setFocus: types.BaseContact<string> = (state, action) => {
    state.focus = action.payload;
};

export const setUpperCase: types.BaseContact<boolean> = (state, action) => {
    state.upperCase = action.payload;
};
