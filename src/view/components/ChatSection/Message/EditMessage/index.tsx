// Core
import React, { FC, useState } from 'react';
import { useMessages } from '../../../../../bus/messages';

// Bus
// import {} from '../../../bus/'

// Types
type PropTypes = {
    text: string,
    _id: string,
    isMobile: boolean,
    editHandler: Function,
    buttonsHandler: Function,
}

export const EditMessage: FC<PropTypes> = ({ text, isMobile, _id, editHandler, buttonsHandler }) => {
    const [ editText, setEditText ] = useState(text);
    const { deleteMessage, editMessage } = useMessages();

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

    const changeText = (event: any) => {
        setEditText(event.target.value);
    };

    const submit = (event: any) => {
        if (!event.key) {
            sendMessage();
            editHandler();
            buttonsHandler();
        }
        if (event.key === 'Enter') {
            sendMessage();
            editHandler();
            buttonsHandler();
        }
    };

    return (
        <div>
            <input
                autoFocus
                className = 'edit-field'
                maxLength = { 100 }
                type = 'text'
                value = { editText }
                onChange = { changeText }
                onKeyDown = { submit }
            />
            <button
                className = 'edit-btn'
                onClick = { submit }>{isMobile ? '✔' : 'EDIT'}
            </button>
        </div>
    );
};
