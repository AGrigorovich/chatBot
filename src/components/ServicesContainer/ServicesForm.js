import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Form, Formik } from 'formik';
import { object, string } from 'yup';

import { FormHelperText, Grid, InputLabel, withStyles } from '@material-ui/core';

import AppButton from '../AppButton/AppButton';
import AppSelect from '../AppSelect/AppSelect';
import InputFieldWithLabel from '../InputFieldWithLabel/InputFieldWithLabel';

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
    serviceName: string().trim().required('Это поле обязательное'),
    price: string().trim().required('Это поле обязательное'),
});

const ServicesForm = ({
    classes,
    selectedService,
    changeSelectedService,
    createService,
    editService,
    arrayOfBranches,
}) => {
    const [dataErrors, changeDataErrors] = useState('');
    const [selectedBranches, changeSelectedBranches] = useState(null);
    const { serviceName = '', price = '', id } = selectedService;
    const [initialValues, changeInitialValues] = useState({ serviceName, price });

    useEffect(() => {
        const {
            serviceName: servicesName = '',
            price: servicesAddress = '',
            branches = [],
        } = selectedService;
        changeInitialValues({
            serviceName: servicesName,
            price: servicesAddress,
        });
        if (branches.length) {
            const alreadySelectedBranches = arrayOfBranches.filter((branch) =>
                branches.includes(branch.value)
            );

            changeSelectedBranches(alreadySelectedBranches);
        }
    }, [selectedService, arrayOfBranches]);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                if (!selectedBranches) {
                    changeDataErrors('Выберите пожалуйста филиал');
                }
                setSubmitting(false);
                const branches = selectedBranches.map((branch) => branch.value);
                const newData = { ...values, branches, id };
                resetForm();
                changeSelectedService({});
                changeSelectedBranches(null);
                if (id || id === 0) {
                    return editService(newData);
                }
                return createService(newData);
            }}
        >
            {({ errors, handleChange, handleSubmit, isValid, values }) => (
                <Form className={classes.formContainer}>
                    <FormHelperText className={classes.errorMessage}>{dataErrors}</FormHelperText>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="serviceName"
                            value={values.serviceName}
                            onChangeFunction={handleChange}
                            placeholder="Введите название услуги"
                            labelTitle="Название"
                        />
                        {errors.serviceName && (
                            <FormHelperText error>{errors.serviceName}</FormHelperText>
                        )}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="price"
                            type="number"
                            value={values.price}
                            onChangeFunction={handleChange}
                            placeholder="Введите стоимость услуги"
                            labelTitle="Стоимость"
                        />
                        {errors.price && <FormHelperText error>{errors.price}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputLabel>Выберите филиалы</InputLabel>
                        <AppSelect
                            value={selectedBranches}
                            onChange={changeSelectedBranches}
                            options={arrayOfBranches}
                        />
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

ServicesForm.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    selectedService: PropTypes.shape({
        serviceName: PropTypes.string,
        price: PropTypes.number,
        id: PropTypes.number,
        branches: PropTypes.array,
    }).isRequired,
    changeSelectedService: PropTypes.func.isRequired,
    createService: PropTypes.func.isRequired,
    editService: PropTypes.func.isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ServicesForm);
