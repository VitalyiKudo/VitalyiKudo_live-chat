// Core
import moment from 'moment';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

// Types
type PropTypes = {
    // _id: string,
    username: string,
    text: string,
    createdAt: string,
    // updatedAt: string,
}

export const Message: FC<PropTypes> = ({ username, text, createdAt }) => {
    return (
        <S.Container>
            <main>
                <p className = 'name'>{username}</p>
                <div className = 'text'>{text}</div>
                <p className = 'create-date'>{moment(createdAt).format('hh/mm/ss')}</p>
            </main>
        </S.Container>
    );
};
