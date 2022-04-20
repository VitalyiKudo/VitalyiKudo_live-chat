// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { RegisterField } from '../../components/RegisterField';

// Styles
import { Container } from './styles';

const Register: FC = () => {
    return (
        <Container>
            <RegisterField />
        </Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Register />
    </ErrorBoundary>
);
