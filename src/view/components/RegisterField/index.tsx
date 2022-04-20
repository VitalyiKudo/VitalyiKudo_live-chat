// Core
import { Field, Formik } from 'formik';
import React, { FC } from 'react';
import { useTogglersRedux } from '../../../bus/client/togglers';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

export const RegisterField: FC = () => {
    const { setTogglerAction } = useTogglersRedux();

    const fetchUser =  (data: string) => {
        return fetch('https://api.barbarossa.pp.ua/users/register', {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: data }),
        });
    };

    return (
        <S.Container>
            <Formik
                initialValues = {
                    {
                        name: '',
                    }
                }
                onSubmit = { async (user) => {
                    const field = user.name ? user.name : 'BAUUUUUUS';
                    await fetchUser(field)
                        .then((response) => response.json())
                        .then((data) => {
                            localStorage.setItem('userId', data._id);
                        });
                    setTogglerAction({ type: 'isLoggedIn', value: true });
                } }>
                {({ handleSubmit }) => (
                    <form onSubmit = { handleSubmit }>
                        <label>Enter your name</label>
                        <Field
                            className = 'field'
                            name = 'name'
                            placeholder = 'BAUUUUUUS'
                            type = 'text'>
                        </Field>
                        <button
                            className = 'submit'
                            type = 'submit'>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </S.Container>
    );
};
