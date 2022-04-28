// Core
// import { useEffect } from 'react';

// Tools
import { useSelector } from '../../tools/hooks';
import { keyboardActions } from './slice';

export const useKeyboard = () => {
    const keyboard = useSelector((state) => state.keyboard.keyboardValue); // Add keyboard to ./src/init/redux/index.ts
    const setKeyboardValue = (value: string) => keyboardActions.setKeyboardValue(value);

    return {
        setKeyboardValue,
        keyboard,
    };
};
