// Core
import React, { FC } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const Header: FC = () => {
    const { user } = useUser();
    const { setTogglerAction } = useTogglersRedux();

    const logOut = () => {
        localStorage.clear();
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <header>
                <h1 className = 'user-name'>Your name is <span className = 'name-span'>{user?.username}</span></h1>
                <button
                    className = 'logout'
                    onClick = { logOut }>LOGOUT
                    <img
                        alt = 'logout'
                        className = 'logout-image'
                        src = 'https://pngimage.net/wp-content/uploads/2018/06/icon-exit-png-5.png'
                    />
                </button>
            </header>
        </S.Container>
    );
};
