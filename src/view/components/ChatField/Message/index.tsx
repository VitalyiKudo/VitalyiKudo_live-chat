// Core
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

export const Message: FC<PropTypes> = () => {
    return (
        <S.Container>
            Component: Message
        </S.Container>
    );
};
