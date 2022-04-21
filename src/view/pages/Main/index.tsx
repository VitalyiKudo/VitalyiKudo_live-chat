// Core
import React, { FC } from 'react';

// Components
import { ErrorBoundary } from '../../components';
import { ChatField } from '../../components/ChatField';

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}
const Main: FC<PropTypes> = () => {
    return (
        <S.Container>
            <ChatField />
        </S.Container>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
