// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Message = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
}

export type SimpleMessage = {
    text: string,
    username: string | undefined,
}

export type Messages = Array<Message>

export type MessagesState = {
    messages: Messages | null
    message: SimpleMessage | null
}

// Contracts
export type BaseContact<T = any> = CaseReducer<MessagesState, PayloadAction<T>>
