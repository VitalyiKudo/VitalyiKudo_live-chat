// Core
// import { useEffect } from 'react';

// Types
import * as type from './types';

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const dispatch = useDispatch();

    const keyboard = useSelector((state) => state.keyboard?.value);
    const focus = useSelector((state) => state.keyboard.focus);
    const upperCase = useSelector((state) => state.keyboard.upperCase);

    const setKeyboardValue = (value: string) => dispatch(keyboardActions.setValue(value));
    const setUpperCase = (mode: boolean) => dispatch(keyboardActions.setUpperCase(mode));
    const setFocus = (value: type.focus) => dispatch(keyboardActions.setFocus(value));

    return {
        setKeyboardValue,
        setUpperCase,
        setFocus,
        keyboard,
        upperCase,
        focus,
    };
};
