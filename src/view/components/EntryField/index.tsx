// Core
import React, { FC, useEffect, useRef } from 'react';
import { useKeyboard } from '../../../bus/keyboard';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const EntryField: FC = () => {
    const { createMessage } = useMessages();
    const { keyboard, upperCase, setUpperCase, setKeyboardValue, focus, setFocus, deleteFocus } = useKeyboard();
    const { user } = useUser();
    const inputRef = useRef<HTMLInputElement | null>(null);

    const myre = useRef(keyboard);

    useEffect(() => {
        myre.current = keyboard;
    }, [ keyboard ]);

    const sendMessage = () => {
    if (myre.current && user) {
        createMessage({
            text:     myre.current,
            username: user?.username,
         });
    }
    setKeyboardValue('');
    };


    useEffect(() => {
        window.addEventListener('keydown', (event: any) => {
            inputRef.current?.focus();
            setFocus(event.keyCode);
            if (event.keyCode === 13) {
                sendMessage();
            }
            if (event.keyCode === 16) {
                setUpperCase(true);
            }
        });
        window.addEventListener('keyup', (event: any) => {
            deleteFocus(event.keyCode);
            if (event.keyCode === 16) {
                setUpperCase(false);
            }
        });
    }, [ user ]);

    const upperCaseHandler = () => {
        if (upperCase && !focus?.includes(16)) {
            setUpperCase(false);
        }
    };

    const submitText = () => {
        sendMessage();
    };

    return (
        <S.Container>
            <div className = 'entry-field'>
                <input
                    className = 'message-field'
                    ref = { inputRef }
                    type = 'text'
                    value = { keyboard }
                    onChange = { (element) => setKeyboardValue(element.target.value) }
                    onKeyDown = { upperCaseHandler }
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
