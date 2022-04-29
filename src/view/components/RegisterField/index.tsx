// Core
import { uniqueId } from 'lodash';
import React, { FC, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useUser } from '../../../bus/user';

// Styles
import * as S from './styles';

export const RegisterField: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ userName, setUserName ] = useState('');
    const { createUser } = useUser();

    const baus = uniqueId('BAUS');

    const submit = (userName:string) => {
        const field = userName ? userName : baus;

        createUser(field);

        setTogglerAction({ type: 'isLoggedIn', value: true });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <div className = 'line'></div>
                <div className = 'fields-section'>
                    <img
                        alt = 'live-chat'
                        className = 'chat-image'
                        src = 'https://icon-library.com/images/pink-messages-icon/pink-messages-icon-7.jpg'
                    />
                    <h3 className = 'chat-name'>Live chat</h3>
                    <p className = 'field-heading'>
                        Enter a nickname to introduce yourself
                    </p>
                    <div className = 'for-field'>
                        <input
                            className = 'field'
                            maxLength = { 25 }
                            placeholder = { baus }
                            type = 'text'
                            value = { userName }
                            onChange = { (event) => setUserName(event.target.value) }
                        />
                        <button
                            className = 'submit'
                            onClick = { () => submit(userName) }>Continue
                        </button>
                    </div>
                </div>
            </main>
        </S.Container>
    );
};

