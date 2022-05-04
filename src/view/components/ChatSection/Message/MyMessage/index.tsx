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
    const { editMessage, deleteMessage } = useMessages();
    const [ isEdited, setIsEdited ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);
    const [ editText, setEditText ] = useState(text);

    const myMessage = classNames('my-message', { edit: editMode });
    const messageBtn = classNames('message-btn', { keep: editMode });

    useEffect(()=>{
        if (updatedAt !== createdAt) {
            setIsEdited(true);
        }
    }, [ updatedAt ]);

    const sendMessage = () => {
        if (!editText) {
            deleteMessage(_id);
        }
        if (editText && editText !== text) {
            editMessage({
                text: editText,
                _id,
            });
        }
    };

    const getButtons = () => {
        if (!editMode) {
            isMobile ? setIsMobile(false) : setIsMobile(true);
        }
    };
    const editHabdler = () => editMode ? setEditMode(false) : setEditMode(true);

    const submit = (event: any) => {
        if (!event.key) {
            sendMessage();
            setEditMode(false);
            setIsMobile(false);
        }
        if (event.key === 'Enter') {
            sendMessage();
            setEditMode(false);
            setIsMobile(false);
        }
    };
    const deleteMsg = () => {
        deleteMessage(_id);
    };

    return (
        <main
            className = { myMessage }>
            <div onClick = { getButtons }>
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
                                    onKeyDown = { submit }
                                />
                                <button
                                    className = 'edit-btn'
                                    onClick = { submit }>{isMobile ? '✔' : 'EDIT'}
                                </button>
                            </div>
                            : <div className = 'my-text'>{text}</div>
                    }
                <p className = 'my-create-date'>{moment(createdAt).format('hh/mm/ss')}</p>
            </div>
            {
                    isMobile
                    ? <div className = 'mobile-buttons'>
                        <button
                            className = 'mobile-btn'
                            onClick = { editHabdler }>🖍
                        </button>
                        <button
                            className = 'mobile-btn'
                            onClick = { deleteMsg }>✕
                        </button>
                    </div>
                    : <div className = 'buttons'>
                        <button
                            className = { messageBtn }
                            onClick = { editHabdler }>🖍
                        </button>
                        <button
                            className = 'message-btn'
                            onClick = { deleteMsg }>✕
                        </button>
                    </div>

            }
            {
                        isEdited
                        ? <p className = 'my-edit-status'>edited</p>
                        : null
            }
        </main>
    );
};
