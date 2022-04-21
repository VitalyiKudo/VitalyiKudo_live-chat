// Core
import React, { FC, useState } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Styles
import * as S from './styles';

export const RegisterField: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const [ userName, setUserName ] = useState('');

    console.log(localStorage.getItem('userId'));


    const fetchUser =  (data: string) => {
        return fetch('https://api.barbarossa.pp.ua/users/register', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: data }),
        });
    };

    const submit = async (userName:string) => {
        const field = userName ? userName : 'BAUUUUUUS';
        await fetchUser(field)
            .then((response) => response.json())
            .then((data) => {
                localStorage.setItem('userId', data._id);
            });
        setTogglerAction({ type: 'isLoggedIn', value: true });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <div className = 'line'></div>
                <section className = 'fields-section'>
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
                            placeholder = ''
                            type = 'text'
                            value = { userName }
                            onChange = { (event) => setUserName(event.target.value) }
                        />
                        <button
                            className = 'submit'
                            onClick = { () => submit(userName) }>Continue
                        </button>
                    </div>
                </section>
            </main>
        </S.Container>
    );
};

