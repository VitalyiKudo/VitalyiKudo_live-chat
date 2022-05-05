// Core
import React, { FC, useEffect, useRef, useState } from 'react';
import { useMessages } from '../../../../../bus/messages';

// Types
type PropTypes = {
    text: string,
    _id: string,
    editHandler: Function,
}

export const EditMessage: FC<PropTypes> = ({ text, _id, editHandler }) => {
    const [ editText, setEditText ] = useState(text);
    const { deleteMessage, editMessage } = useMessages();
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        window.addEventListener('keydown', () => {
            inputRef.current?.focus();
        });
    }, []);

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
        }
        if (event.key === 'Enter') {
            sendMessage();
            editHandler();
        }
    };

    return (
        <div>
            <input
                className = 'edit-field'
                maxLength = { 100 }
                ref = { inputRef }
                type = 'text'
                value = { editText }
                onChange = { changeText }
                onKeyDown = { submit }
            />
            <button
                className = 'edit-btn'
                onClick = { submit }><span className = 'mobile'>✔</span><span className = 'desktop'>EDIT</span>
            </button>
        </div>
    );
};
