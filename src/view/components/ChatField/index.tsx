// Core
import { Field, Formik } from 'formik';
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { Message } from './Message';

// Types
type FieldState = {
    message: string
}

// Styles
import * as S from './styles';

export const ChatField: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const { getUser, user } = useUser();
    const { message, messages, createMessage, fetchMessages } = useMessages();

    useEffect(() => {
        getUser();
        fetchMessages();
    }, [ message ]);

    const logOut = () => {
        localStorage.clear();
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <header>
                    <h1 className = 'user-name'>Your name is <span className = 'name-span'>{user?.username}</span></h1>
                    <button
                        className = 'logout'
                        onClick = { logOut }>LOGOUT
                        <img
                            alt = 'logout'
                            className = 'logout-image'
                            src = 'https://pngimage.net/wp-content/uploads/2018/06/icon-exit-png-5.png'
                        />
                    </button>
                </header>
                <section className = 'chat-section'>
                    <div className = 'messages'>
                        {messages?.map((messages, index) => (
                            <div
                                className = 'chat-message'
                                key = { index } >
                                <Message
                                    { ...messages }
                                />
                            </div>
                        ))}
                    </div>
                </section>
                <Formik
                    initialValues = {
                            {
                                message: '',
                            }
                        }
                    onSubmit = { (value: FieldState, { resetForm }) => {
                            if (value.message) {
                                createMessage({
                                    text:     value.message,
                                    username: user?.username,
                                });
                            }
                            resetForm();
                        } }>
                    {({ handleSubmit, initialValues }) => (
                        <form
                            className = 'entry-field'
                            onSubmit = { handleSubmit }>
                            <Field
                                className = 'message-field'
                                name = 'message'
                                type = 'text'>
                            </Field>
                            <button
                                className = 'submit'
                                disabled = { Boolean(initialValues.message) }
                                type = 'submit'
                                onClick = { () => console.log(initialValues) }>SEND
                            </button>
                        </form>
                        )}
                </Formik>
            </main>
        </S.Container>
    );
};
