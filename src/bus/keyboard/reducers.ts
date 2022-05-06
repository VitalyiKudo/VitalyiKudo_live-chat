// Types
import * as types from './types';

export const setValue: types.BaseContact<string> = (state, action) => {
    state.value = action.payload;
};

export const setFocus: types.BaseContact<number> = (state, action) => {
    if (state.focus?.includes(action.payload)) {
        return state;
    }

    state.focus?.push(action.payload);

    return state;
};

export const deleteFocus : types.BaseContact<number | null> = (state, action) => {
    if (action.payload === null) {
        state.focus = [];
    }
    const filedState = state.focus?.filter((key) => key !== action.payload);

    state.focus = filedState;
};

export const setUpperCase: types.BaseContact<boolean> = (state, action) => {
    state.upperCase = action.payload;
};

export const setEnglish: types.BaseContact<boolean> = (state, action) => {
    state.isEnglish = action.payload;
};
