// Core
import React, { FC, Suspense, useEffect } from 'react';

// Routes
import { Public } from './Public';
import { Private } from './Private';

// Bus
import { useTogglersRedux } from '../../bus/client/togglers';

// Elements
import { Spinner } from '../elements';

export const Routes: FC = () => {
    const { togglersRedux: { isLoggedIn }, setTogglerAction } = useTogglersRedux();

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            setTogglerAction({ type: 'isLoggedIn', value: true });
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
