// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Keyboard = {
    focus: string,
    value: string,
    upperCase: boolean,
}
export type KeyboardState = Keyboard

// Contracts
export type BaseContact<T = any> = CaseReducer<KeyboardState, PayloadAction<T>>
