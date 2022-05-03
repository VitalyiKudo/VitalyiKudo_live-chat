/* eslint-disable react/jsx-closing-tag-location */
// Core
import classNames from 'classnames';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useMessages } from '../../../../../bus/messages';

// Types
import * as types from '../../../../../bus/messages/types';

export const MyMessage: FC<types.Message> = ({ username, text, createdAt, updatedAt, _id }) => {
    const [ isEdited, setIsEdited ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);
    const [ editText, setEditText ] = useState(text);

    useEffect(()=>{
        if (updatedAt !== createdAt) {
            setIsEdited(true);
        }
    }, [ isEdited ]);

    const { editMessage, deleteMessage } = useMessages();

    const myMessage = classNames('my-message', { edit: editMode });
    const messageBtn = classNames('message-btn', { keep: editMode });

    const editHabdler = () => {
        editMode ? setEditMode(false) : setEditMode(true);
        localStorage.setItem('messageId', _id);
    };
    const submit = () => {
        editMessage({
            text: editText,
            _id,
        });
        setEditMode(false);
    };
    const deleteMsg = () => {
        deleteMessage(_id);
    };

    return (
        <main className = { myMessage } >
            <p className = 'my-name'>{username}</p>
            {
                        editMode
                            ? <div>
                                <input
                                    autoFocus
                                    className = 'edit-field'
                                    maxLength = { 100 }
                                    type = 'text'
                                    value = { editText }
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
    );
};
