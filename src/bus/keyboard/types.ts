// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Keyboard = {
    keyboardValue: string
}
// export type KeyboardState = Keyboard | null

// Contracts
export type BaseContact<T = any> = CaseReducer<Keyboard, PayloadAction<T>>
