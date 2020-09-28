import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Form, Formik } from 'formik';
import { object, string } from 'yup';

import { Grid, Typography, FormHelperText, withStyles } from '@material-ui/core';

import AppButton from '../AppButton/AppButton';
import InputFieldWithLabel from '../InputFieldWithLabel/InputFieldWithLabel';

const styles = (theme) => ({
    formContainer: {
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '20rem',
        height: '25rem',
        borderRadius: '.5rem',
        fontSize: '18px',
        backgroundColor: theme.palette.gold,
        color: theme.palette.black,
        padding: '1rem',
        textAlign: 'center',
    },
    form: {
        width: '100%',
    },
    title: {
        fontSize: '2rem',
        padding: '2rem 0',
    },
    inputContainer: {
        padding: '1rem 0',
    },
    errorMessage: {
        height: '2rem',
        fontSize: '1.25rem',
        color: theme.palette.red,
        margin: '0 1.5rem',
    },
});

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = object().shape({
    email: string().email('Это не валидный email').required('Это поле обязательное'),
    password: string()
        .trim()
        .required('Это поле обязательное')
        .min(8, 'Пароль должен быть не короче 8 символов'),
});

const LogIn = ({ classes, userStartLogin }) => {
    const [dataErrors, changeDataErrors] = useState('');

    return (
        <Grid className={classes.formContainer}>
            <Formik
                enableReinitialize
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={(values, { setSubmitting }) => {
                    changeDataErrors('Not valid data');
                    setSubmitting(false);
                    userStartLogin(values);
                }}
            >
                {({ errors, handleChange, handleSubmit, isValid, values }) => (
                    <Form className={classes.form}>
                        <Typography className={classes.title}>Форма входа</Typography>
                        <FormHelperText className={classes.errorMessage}>
                            {dataErrors}
                        </FormHelperText>
                        <Grid className={classes.inputContainer}>
                            <InputFieldWithLabel
                                name="email"
                                value={values.email}
                                placeholder="Введите свой email"
                                onChangeFunction={handleChange}
                                labelTitle=""
                            />
                            {errors.email && <FormHelperText error>{errors.email}</FormHelperText>}
                        </Grid>
                        <Grid className={classes.inputContainer}>
                            <InputFieldWithLabel
                                name="password"
                                value={values.password}
                                type="password"
                                placeholder="Введите свой пароль"
                                onChangeFunction={handleChange}
                                labelTitle=""
                            />
                            {errors.password && (
                                <FormHelperText error>{errors.password}</FormHelperText>
                            )}
                        </Grid>
                        <AppButton
                            buttonName="Войти"
                            handleClick={handleSubmit}
                            disabled={!isValid}
                        />
                    </Form>
                )}
            </Formik>
        </Grid>
    );
};

LogIn.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    userStartLogin: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(LogIn);
