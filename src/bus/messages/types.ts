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

export type editAction = {
    _id : string,
    text: string,
}

export type Messages = Array<Message> | null

// Contracts
export type BaseContact<T = any> = CaseReducer<Messages, PayloadAction<T>>
