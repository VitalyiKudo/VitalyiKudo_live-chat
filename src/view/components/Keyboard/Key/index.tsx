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
    const {
            keyboard, setKeyboardValue, upperCase, setUpperCase, focus, setFocus, deleteFocus, setEnglish,
        } = useKeyboard();
    const { createMessage } = useMessages();
    const { user } = useUser();
    const [ color, setColor ] = useState(false);

    useEffect(() => {
        if (focus?.includes(code)) {
                setColor(true);
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

    const deleteKey = () => {
        deleteFocus(code);
    };

    const setKey = () => {
        setFocus(code);
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
            case 'En':
                setEnglish(false);
                break;
            case 'Ru':
                setEnglish(true);
                break;
            case 'Enter':
                if (keyboard.trim()) {
                    createMessage({
                    text:     keyboard,
                    username: user?.username,
                    });
                }
                setKeyboardValue('');
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
            onMouseDown = { setKey }
            onMouseOut = { deleteKey }
            onMouseUp = { deleteKey }>
            { localeKey }
        </S.Container>
    );
};
