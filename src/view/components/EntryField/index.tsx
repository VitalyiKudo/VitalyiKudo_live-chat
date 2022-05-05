// Core
import React, { FC } from 'react';
import { useKeyboard } from '../../../bus/keyboard';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const EntryField: FC = () => {
    const { createMessage } = useMessages();
    const { keyboard, upperCase, setKeyboardValue, focus, setFocus, deleteFocus } = useKeyboard();
    const { user } = useUser();

    const sendMessage = () => {
    if (keyboard) {
        createMessage({
            text:     keyboard,
            username: user?.username,
         });
    }
    setKeyboardValue('');
    };

    const keyDown = (event: any) => {
        setFocus(event.keyCode);
        if (event.keyCode === 13) {
            sendMessage();
        }
    };
    const keyUp = (event: any) => {
        deleteFocus(event.keyCode);
    };

    console.log(focus);

    const submitText = () => {
    sendMessage();
    };

    return (
        <S.Container>
            <div className = 'entry-field'>
                <input
                    className = 'message-field'
                    type = 'text'
                    value = { upperCase ? keyboard.toUpperCase() : keyboard }
                    onChange = { (element) => setKeyboardValue(element.target.value) }
                    onKeyDown = { keyDown }
                    onKeyUp = { keyUp }
                />
                <button
                    className = 'submit'
                    disabled = { keyboard === '' }
                    onClick = { submitText }>SEND
                </button>
            </div>
        </S.Container>
    );
};
