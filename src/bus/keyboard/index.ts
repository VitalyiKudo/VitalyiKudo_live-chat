// Core
// import { useEffect } from 'react';

// Tools
import { useDispatch } from 'react-redux';
import { useSelector } from '../../tools/hooks';
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const dispatch = useDispatch();

    const keyboard = useSelector((state) => state.keyboard?.value);
    const focus = useSelector((state) => state.keyboard.focus);
    const upperCase = useSelector((state) => state.keyboard.upperCase);
    const isEnglish = useSelector((state) => state.keyboard.isEnglish);

    const setKeyboardValue = (value: string) => dispatch(keyboardActions.setValue(value));
    const setUpperCase = (mode: boolean) => dispatch(keyboardActions.setUpperCase(mode));
    const setFocus = (value: number) => dispatch(keyboardActions.setFocus(value));
    const deleteFocus = (value: number | null) => dispatch(keyboardActions.deleteFocus(value));
    const setEnglish = (value: boolean) => dispatch(keyboardActions.setEnglish(value));

    return {
        setKeyboardValue,
        setUpperCase,
        setFocus,
        setEnglish,
        deleteFocus,
        keyboard,
        upperCase,
        focus,
        isEnglish,
    };
};
