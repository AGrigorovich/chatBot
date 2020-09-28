import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Form, Formik } from 'formik';
import { object, string } from 'yup';

import { FormHelperText, Grid, InputLabel, withStyles } from '@material-ui/core';

import AppButton from '../AppButton/AppButton';
import InputFieldWithLabel from '../InputFieldWithLabel/InputFieldWithLabel';
import TextArea from '../TextArea/TextArea';

const styles = (theme) => ({
    formContainer: {
        width: '100%',
        maxWidth: '35rem',
        height: 'max-content',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
    },
    errorMessage: {
        height: '2rem',
        fontSize: '1.25rem',
        color: theme.palette.red,
        margin: '0 1.5rem',
    },
    inputContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '.5rem 0',
    },
});

const validationSchema = object().shape({
    name: string(),
    surname: string(),
    comment: string(),
    phoneNumber: string(),
});

const ClientsForm = ({
    classes,
    selectedClient,
    createClient,
    editClient,
    changeSelectedClient,
}) => {
    const [dataErrors, changeDataErrors] = useState('');
    const { name = '', surname = '', comment = '', phoneNumber = '', id } = selectedClient;
    const [initialValues, changeInitialValues] = useState({ name, surname, comment, phoneNumber });

    useEffect(() => {
        const {
            name: clientName = '',
            surname: clientSurname = '',
            comment: clientComment = '',
            phoneNumber: clientPhone = '',
        } = selectedClient;
        changeInitialValues({
            name: clientName,
            surname: clientSurname,
            comment: clientComment,
            phoneNumber: clientPhone,
        });
    }, [selectedClient]);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                changeDataErrors('');
                if (!values.name && !values.surname) {
                    return changeDataErrors('Вы не указали имя и фамилию');
                }
                setSubmitting(false);
                const newData = { ...values, id };
                resetForm();
                changeSelectedClient({});
                if (id || id === 0) {
                    return editClient(newData);
                }
                return createClient(newData);
            }}
        >
            {({ errors, handleChange, handleSubmit, isValid, values }) => (
                <Form className={classes.formContainer}>
                    <FormHelperText className={classes.errorMessage}>{dataErrors}</FormHelperText>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="name"
                            value={values.name}
                            placeholder="Введите имя клиента"
                            onChangeFunction={handleChange}
                            labelTitle="Имя Клиента"
                            maxLength={45}
                        />
                        {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="surname"
                            value={values.surname}
                            placeholder="Введите фамилию клиента"
                            onChangeFunction={handleChange}
                            labelTitle="Фамилия Клиента"
                            maxLength={45}
                        />
                        {errors.surname && <FormHelperText error>{errors.surname}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputLabel>Оставить комментарий</InputLabel>
                        <TextArea
                            name="comment"
                            textFieldValue={values.comment}
                            changeTextFieldValue={handleChange}
                            placeholder="Введите комментарий"
                        />
                        {errors.comment && <FormHelperText error>{errors.comment}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="phoneNumber"
                            value={values.phoneNumber}
                            placeholder="Введите телефон клиента"
                            onChangeFunction={handleChange}
                            labelTitle="Телефон Клиента"
                            maxLength={15}
                        />
                        {errors.phoneNumber && (
                            <FormHelperText error>{errors.phoneNumber}</FormHelperText>
                        )}
                    </Grid>
                    <AppButton
                        buttonName="Сохранить"
                        handleClick={handleSubmit}
                        disabled={!isValid}
                    />
                </Form>
            )}
        </Formik>
    );
};

ClientsForm.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    selectedClient: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        comment: PropTypes.string,
        phoneNumber: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
    createClient: PropTypes.func.isRequired,
    editClient: PropTypes.func.isRequired,
    changeSelectedClient: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(ClientsForm);
