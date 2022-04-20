// Core
import { Field, Formik } from 'formik';
import React, { FC } from 'react';

// Bus
// import {} from '../../../bus/'

// Styles
import * as S from './styles';

export const RegisterField: FC = () => {
    return (
        <S.Container>
            <Formik
                initialValues = {
                    {
                        name: '',
                    }
                }
                onSubmit = { (value) => {
                    console.log(value);
                } }>
                {({ handleSubmit }) => (
                    <form onSubmit = { handleSubmit }>
                        <label>Enter your name</label>
                        <Field
                            classname = 'field'
                            name = 'name'
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
