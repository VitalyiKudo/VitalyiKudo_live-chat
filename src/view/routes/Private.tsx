// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Main from '../pages/Main';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Main /> }
                path = '/'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
