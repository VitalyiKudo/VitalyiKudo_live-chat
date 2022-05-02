// Core
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useKeyboard } from '../../../../bus/keyboard/';
import { useMessages } from '../../../../bus/messages';
import { useUser } from '../../../../bus/user';

// Style
import * as S from './styles';

// Types
type PropTypes = {
    value: string
    code: number
}

export const Key: FC<PropTypes> = ({ value, code }) => {
    const { keyboard, setKeyboardValue, upperCase, setUpperCase, focus, setFocus } = useKeyboard();
    const { createMessage } = useMessages();
    const { user } = useUser();
    const [ color, setColor ] = useState(false);

    useEffect(() => {
        if (focus === code) {
            setColor(true);
        } else {
            setColor(false);
        }
    }, [ focus ]);

    const localeKey = upperCase && value !== 'Shift' && value !== 'Space' && value !== 'Backspace' && value !== 'Enter' && value !== 'En'
        ? value.toUpperCase()
        : value;

    const keyClass = classNames('key', {
        shift:     value === 'Shift',
        space:     value === 'Space',
        backspace: value === 'Backspace',
    });

    const keyDown = () => {
        if (!focus) {
            setFocus(code);
        }
    };

    const keyUp = () => {
        if (focus) {
            setFocus(null);
        }
    };

    const keyboardHandler = () => {
        switch (value) {
            case 'Space':
                setKeyboardValue(keyboard + ' ');
                break;
            case 'Shift':
                upperCase ? setUpperCase(false) : setUpperCase(true);
                break;
            case 'Backspace':
                setKeyboardValue(keyboard.slice(0, -1));
                break;
            case 'Enter':
                if (keyboard) {
                    createMessage({
                    text:     keyboard,
                    username: user?.username,
                    });
                }
                break;
            default:
                setKeyboardValue(keyboard + localeKey);
                break;
        }
    };

    return (
        <S.Container
            className = { keyClass }
            isActive = { color }
            onClick = { keyboardHandler }
            onMouseDown = { keyDown }
            onMouseUp = { keyUp }>
            { localeKey }
        </S.Container>
    );
};
