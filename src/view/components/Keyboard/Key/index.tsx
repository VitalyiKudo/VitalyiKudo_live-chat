// Core
import classNames from 'classnames';
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useKeyboard } from '../../../../bus/keyboard/';
import { useMessages } from '../../../../bus/messages';
import { useUser } from '../../../../bus/user';


// Types
type PropTypes = {
    value: string
}

export const Key: FC<PropTypes> = ({ value: key }) => {
    const { keyboard, setKeyboardValue, upperCase, setUpperCase, focus } = useKeyboard();
    const { createMessage } = useMessages();
    const { user } = useUser();
    const [ isActive, setIsActive ] = useState(false);

    useEffect(() => {
        if (focus === key) {
            setIsActive(true);
        }
    }, [ isActive ]);

    const localeKey = upperCase && key !== 'Shift' && key !== 'Space' && key !== 'Backspace' && key !== 'Enter' && key !== 'En'
        ? key.toUpperCase()
        : key;

    const keyClass = classNames('key', {
        shift:     key === 'Shift',
        space:     key === 'Space',
        backspace: key === 'Backspace',
        active:    isActive,
    });

    const activeHandler = () => isActive ? setIsActive(false) : setIsActive(true);

    const keyboardHandler = () => {
        switch (key) {
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
        <div
            className = { keyClass }
            onChange = { activeHandler }
            onClick = { keyboardHandler }>
            { localeKey }
        </div>
    );
};
