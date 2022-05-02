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
    const { keyboard, upperCase, setKeyboardValue, focus, setFocus } = useKeyboard();
    const { user } = useUser();

    const keyDown = (event: any) => {
        if (!focus) {
            setFocus(event.keyCode);
        }
    };
    const keyUp = () => {
        if (focus) {
            setFocus(null);
        }
    };

    const submitText = () => {
        if (keyboard) {
        createMessage({
            text:     keyboard,
            username: user?.username,
        });
    }
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
