// Core
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const ChatField: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();
    const { getUser, user } = useUser();
    const { messages } = useMessages();

    console.log(messages);


    useEffect(() => {
        getUser();
    }, []);

    const logOut = () => {
        localStorage.clear();
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <h1 className = 'user-name'>Your name is {user?.username}</h1>
                <button
                    className = 'log-out'
                    onClick = { logOut }>Log out
                </button>
                <section className = 'chat-section'>

                </section>
            </main>
        </S.Container>
    );
};
