// Core
import React, { FC, useState } from 'react';

// Bus
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const EntryField: FC = () => {
    const { createMessage } = useMessages();
    const { user } = useUser();

    const [ text, setText ] = useState('');


    const submitText = () => {
        if (text) {
        createMessage({
            text:     text,
            username: user?.username,
        });
        }
    };

    return (
        <S.Container>
            <div className = 'entry-field'>
                <input
                    className = 'message-field'
                    type = 'text'
                    onChange = { (element) => setText(element.target.value) }
                />
                <button
                    className = 'submit'
                    onClick = { submitText }>SEND
                </button>
            </div>
        </S.Container>
    );
};
