// Core
import React, { FC, useEffect, useState } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const ChatField: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ user, setUser ] = useState('');

    console.log(localStorage.getItem('userId'));


    useEffect(() => {
        fetch(`https://api.barbarossa.pp.ua/users/refresh/${localStorage.getItem('userId')}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setUser(data.username);
            });
    }, []);

    const logOut = () => {
        localStorage.clear();
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <h1 className = 'user-name'>Your name is {user}</h1>
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
