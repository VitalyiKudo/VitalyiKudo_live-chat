// Types
import * as types from './types';

// export const setUse: types.BaseContact<types.User> = (__, action) => {
//     return action.payload;
// };
export const setUserName: types.BaseContact<string> = (state, action) => {
    state.userName = action.payload;
};
export const setUserId: types.BaseContact<number> = (state, action) => {
    state.userId = action.payload;
};
