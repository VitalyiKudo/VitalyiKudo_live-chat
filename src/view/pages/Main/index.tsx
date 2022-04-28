// Core
import React, { FC, useEffect, useState } from 'react';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Components
import { ErrorBoundary } from '../../components';
import { ChatSection } from '../../components/ChatSection';
import { EntryField } from '../../components/EntryField';
import { Header } from '../../components/Header';
import { Keyboard } from '../../components/Keyboard';

// Styles
import * as S from './styles';

const Main: FC = () => {
    const { getUser } = useUser();
    const { message, fetchMessages } = useMessages();

    const [ keyboardStatus, setKeyboardStatus ] = useState(true);

    useEffect(() => {
        getUser();
        fetchMessages();
    }, [ message ]);

    const keyboardHandler = () => {
        keyboardStatus ? setKeyboardStatus(false) : setKeyboardStatus(true);
    };

    return (
        <S.Container>
            <main className = 'main'>
                <Header />
                <ChatSection />
                <EntryField />
                <button
                    className = 'keyboard-btn'
                    onClick = { keyboardHandler }>
                    {
                        keyboardStatus
                        ? 'Disable keyboard'
                        : 'Enabled keyboard'
                    }
                </button>
                {
                    keyboardStatus
                    ? <Keyboard />
                    : null
                }
            </main>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
