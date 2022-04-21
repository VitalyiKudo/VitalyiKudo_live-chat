// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type User = {
    userId: number | null,
    userName: string | null,
}
export type UserState = User

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
