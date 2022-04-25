// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';
import { useUser } from '../../bus/user';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }, setTogglerAction } = useTogglersRedux();
    const { user } = useUser();

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            setTogglerAction({ type: 'isLoggedIn', value: true });
            console.log(user);
        }
    }, [ isLoggedIn ]);


    return (
        <Suspense fallback = { <Spinner /> }>
            {
                isLoggedIn
                    ? <Private />
                    : <Public />
            }
        </Suspense>
    );
};
