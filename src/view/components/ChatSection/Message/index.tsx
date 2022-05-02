/* eslint-disable react/jsx-indent */
// Core
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useUser } from '../../../../bus/user';

// Styles
import * as S from './styles';
import { MyMessage } from './MyMessage';

// Types
import * as types from '../../../../bus/messages/types';
type PropTypes = types.Message

export const Message: FC<PropTypes> = ({ username, text, createdAt, updatedAt, _id }) => {
    const [ isEdited, setIsEdited ] = useState(false);

    const { user } = useUser();

    useEffect(()=>{
        if (updatedAt !== createdAt) {
            setIsEdited(true);
        }
    }, [ isEdited ]);

    if (user?.username === username) {
        return (
            <S.Container>
                <MyMessage
                    _id = { _id }
                    createdAt = { createdAt }
                    isEdited = { isEdited }
                    text = { text }
                    updatedAt = { updatedAt }
                    username = { username }
                />
            </S.Container>
        );
    }

    return (
        <S.Container>
            <main className = 'message'>
                <p className = 'name'>{username}</p>
                <div className = 'text'>{text}</div>
                <p className = 'create-date'>{moment(createdAt).format('hh/mm/ss')}</p>
                    {
                        isEdited
                        ? <p className = 'edit-status'>edited</p>
                        : null
                    }
            </main>
        </S.Container>
    );
};
