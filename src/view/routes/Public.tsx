// Core
import React, { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import { Register } from '../pages';

export const Public: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Register /> }
                path = '/register'
            />
            <Route
                element = {
                    <Navigate
                        replace
                        to = '/register'
                    />
                }
                path = '*'
            />
        </Routes>
    );
};
