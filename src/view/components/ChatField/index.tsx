// Core
import { Field, Formik } from 'formik';
import React, { FC, useEffect } from 'react';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessages } from '../../../bus/messages';
import { useUser } from '../../../bus/user';
import { Message } from './Message';

// Styles
import * as S from './styles';

export const ChatField: FC = () => {
    const { setTogglerAction } = useTogglersRedux();
    const { getUser, user } = useUser();
    const { messages } = useMessages();

    // console.log(messages);


    useEffect(() => {
        getUser();
    }, []);

    const logOut = () => {
        localStorage.clear();
        setTogglerAction({ type: 'isLoggedIn', value: false });
    };

    return (
        <S.Container>
            <main className = 'main'>
                <h1 className = 'user-name'>Your name is {user?.username}</h1>
                <button
                    className = 'log-out'
                    onClick = { logOut }>Log out
                </button>
                <section className = 'chat-section'>
                    <Formik
                        initialValues = {
                            {
                                message: '',
                            }
                        }
                        onSubmit = { () => console.log('a')
                        }>
                        {({ handleSubmit }) => (
                            <form
                                className = 'entry-field'
                                onSubmit = { handleSubmit }>
                                <Field
                                    className = 'message'
                                    name = 'message'
                                    type = 'text'>
                                </Field>
                                <button
                                    className = 'submit'
                                    type = 'submit'>SEND
                                </button>
                            </form>
                        )}
                    </Formik>
                    <div>
                        {messages?.map((messages, index) => (
                            <div className = 'chat-message' >
                                <Message
                                    key = { index }
                                    { ...messages }
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </S.Container>
    );
};
