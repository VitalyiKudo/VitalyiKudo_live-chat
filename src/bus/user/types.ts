// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type username = string
export type userid = string

export type User = {
    username: username,
    _id: userid,
}
export type UserState = {
    user: User | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<UserState, PayloadAction<T>>
