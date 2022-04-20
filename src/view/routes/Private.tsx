// Core
import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import { Register } from '../pages';

export const Private: FC = () => {
    return (
        <Routes>
            <Route
                element = { <Register /> }
                path = '/'
            />
        </Routes>
    );
};
