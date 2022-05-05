/* eslint-disable react/jsx-closing-tag-location */
// Core
import classNames from 'classnames';
import moment from 'moment';
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useMessages } from '../../../../../bus/messages';

// Types
import * as types from '../../../../../bus/messages/types';
import { EditMessage } from '../EditMessage';

export const MyMessage: FC<types.Message> = ({ username, text, createdAt, updatedAt, _id }) => {
    const { deleteMessage } = useMessages();
    const [ isEdited, setIsEdited ] = useState(false);
    const [ isMobile, setIsMobile ] = useState(false);
    const [ editMode, setEditMode ] = useState(false);

    const myMessage = classNames('my-message', { edit: editMode });
    const messageBtn = classNames('message-btn', { keep: editMode });

    useEffect(()=>{
        if (updatedAt !== createdAt) {
            setIsEdited(true);
        }
    }, [ updatedAt ]);


    const buttonsHandler = () => {
        if (!editMode) {
             isMobile ? setIsMobile(false) : setIsMobile(true);
        }
    };

    const editHandler = () => editMode ? setEditMode(false) : setEditMode(true);

    const deleteMsg = () => deleteMessage(_id);

    return (
        <main
            className = { myMessage }>
            <div onClick = { buttonsHandler }>
                <p className = 'my-name'>{username}</p>
                {
                    editMode
                    ?  <EditMessage
                            _id = { _id }
                            buttonsHandler = { buttonsHandler }
                            editHandler = { editHandler }
                            text = { text }
                       />
                    :  <div className = 'my-text'>{text}</div>
                }
                <p className = 'my-create-date'>{moment(createdAt).format('hh/mm/ss')}</p>
            </div>

            <div className = 'buttons'>
                <button
                    className = { messageBtn }
                    onClick = { editHandler }>🖍
                </button>
                <button
                    className = 'message-btn'
                    onClick = { deleteMsg }>✕
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
