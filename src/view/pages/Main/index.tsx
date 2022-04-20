// Core
import React, { FC, useEffect, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
// import {} from '../../../bus/'

// Components
import { ErrorBoundary } from '../../components';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}
const Main: FC<PropTypes> = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ user, setUser ] = useState('');

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
            Vot eto da
            <h1>Your name is {user}</h1>
            <button onClick = { logOut }>Log out</button>
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
