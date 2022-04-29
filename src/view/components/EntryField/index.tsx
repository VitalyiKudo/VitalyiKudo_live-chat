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
    const { keyboard, setKeyboardValue, focus, setFocus } = useKeyboard();
    const { user } = useUser();

    const input = document.querySelector('input');

    const keyDown = (event: any) => {
        if (!focus) {
            setFocus(event.keyCode);
        }
        event.stopImmediatePropagation();
    };
    const keyUp = () => {
        if (focus) {
            setFocus(null);
        }
    };

    input?.addEventListener('keydown', keyDown);
    input?.addEventListener('keyup', keyUp);


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
                    value = { keyboard }
                    onChange = { (element) => setKeyboardValue(element.target.value) }
                />
                <button
                    className = 'submit'
                    onClick = { submitText }>SEND
                </button>
            </div>
        </S.Container>
    );
};
