/* eslint-disable react/jsx-indent */
// Core
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

// Bus
import { useUser } from '../../../../bus/user';
import { useMessages } from '../../../../bus/messages';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    _id: string,
    username: string,
    text: string,
    createdAt: string,
    updatedAt: string,
}

export const Message: FC<PropTypes> = ({ username, text, createdAt, updatedAt, _id }) => {
    // States
    const [ editMode, setEditMode ] = useState(false);
    const [ editText, setEditText ] = useState(text);
    const [ isEdited, setIsEdited ] = useState(false);

    // Hooks
    const { user } = useUser();
    const { editMessage, deleteMessage } = useMessages();

    useEffect(()=>{
        if (updatedAt !== createdAt) {
            setIsEdited(true);
        }
    }, [ isEdited ]);

    // classes
    const myMessage = classNames('my-message', { edit: editMode });
    const messageBtn = classNames('message-btn', { keep: editMode });

    // functions
    const editHabdler = () => {
        editMode ? setEditMode(false) : setEditMode(true);
        localStorage.setItem('messageId', _id);
    };
    const submit = () => {
        editMessage(editText);
        setEditMode(false);
    };
    const deleteMsg = () => {
        deleteMessage(_id);
    };

    if (user?.username === username) {
        return (
            <S.Container>
                <main className = { myMessage } >
                    <p className = 'my-name'>{username}</p>
                    {
                        editMode
                            ? <div>
                                <input
                                    className = 'edit-field'
                                    maxLength = { 100 }
                                    type = 'text'
                                    onChange = { (event) => setEditText(event.target.value) }
                                />
                                <button
                                    className = 'edit-btn'
                                    onClick = { submit }>EDIT
                                </button>
                              </div>
                            : <div className = 'my-text'>{text}</div>
                    }
                    <p className = 'my-create-date'>{moment(createdAt).format('hh/mm/ss')}</p>
                    <div className = 'buttons'>
                        <button
                            className = { messageBtn }
                            onClick = { editHabdler }>E
                        </button>
                        <button
                            className = 'message-btn'
                            onClick = { deleteMsg }>X
                        </button>
                    </div>
                    {
                        isEdited
                        ? <p className = 'my-edit-status'>edited</p>
                        : null
                    }
                </main>
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
