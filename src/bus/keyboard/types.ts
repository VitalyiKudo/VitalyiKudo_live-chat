// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type focus = number | null;

export type Keyboard = {
    focus: focus,
    value: string,
    upperCase: boolean,
}
export type KeyboardState = Keyboard

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardState, PayloadAction<T>>
