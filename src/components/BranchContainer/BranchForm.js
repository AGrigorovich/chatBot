import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import moment from 'moment';

import { Form, Formik } from 'formik';
import { object, string } from 'yup';

import { FormHelperText, Grid, withStyles } from '@material-ui/core';

import AppButton from '../AppButton/AppButton';
import InputFieldWithLabel from '../InputFieldWithLabel/InputFieldWithLabel';
import SelectHoursWithLabel from '../SelectHoursWithLabel/SelectHoursWithLabel';

const styles = (theme) => ({
    formContainer: {
        width: '100%',
        maxWidth: '50rem',
        height: 'max-content',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        flexWrap: 'wrap',
        padding: '1rem',
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
    selectHoursContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
});

const validationSchema = object().shape({
    name: string().trim().required('Это поле обязательное'),
    address: string().trim().required('Это поле обязательное'),
});

const BranchForm = ({
    classes,
    selectedBranch,
    changeSelectedBranch,
    createBranch,
    editBranch,
}) => {
    const [dataErrors, changeDataErrors] = useState('');
    const [startWorkHours, changeStartWorkHours] = useState(null);
    const [endWorkHours, changeEndWorkHours] = useState(null);
    const { name = '', address = '', id } = selectedBranch;
    const [initialValues, changeInitialValues] = useState({ name, address });

    useEffect(() => {
        const {
            name: branchName = '',
            address: branchAddress = '',
            openTime = '',
            closeTime = '',
        } = selectedBranch;
        const branchOpenTime = { label: openTime.slice(0, 5), value: openTime };
        const branchCloseTime = { label: closeTime.slice(0, 5), value: closeTime };
        changeStartWorkHours(branchOpenTime);
        changeEndWorkHours(branchCloseTime);
        changeInitialValues({
            name: branchName,
            address: branchAddress,
        });
    }, [selectedBranch]);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                changeDataErrors('');
                if (!startWorkHours || !endWorkHours) {
                    return changeDataErrors('Выберети время работы работы филиала');
                }
                const isStartAfterEndHours = moment(startWorkHours.value, 'HH:mm').isSameOrAfter(
                    moment(endWorkHours.value, 'HH:mm')
                );

                if (isStartAfterEndHours) {
                    return changeDataErrors(
                        'Время начала работы должно быть меньше времени окончания работы'
                    );
                }
                setSubmitting(false);
                const openTime = startWorkHours.value;
                const closeTime = endWorkHours.value;
                const newData = { ...values, openTime, closeTime, id };
                resetForm();
                changeSelectedBranch({});
                changeStartWorkHours(null);
                changeEndWorkHours(null);
                if (id || id === 0) {
                    return editBranch(newData);
                }
                return createBranch(newData);
            }}
        >
            {({ errors, handleChange, handleSubmit, isValid, values }) => (
                <Form className={classes.formContainer}>
                    <FormHelperText className={classes.errorMessage}>{dataErrors}</FormHelperText>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="name"
                            value={values.name}
                            onChangeFunction={handleChange}
                            placeholder="Введите название филиала"
                            labelTitle="Название"
                        />
                        {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="address"
                            value={values.address}
                            onChangeFunction={handleChange}
                            placeholder="Введите адресс филиала"
                            labelTitle="Адресс"
                        />
                        {errors.address && <FormHelperText error>{errors.address}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.selectHoursContainer}>
                        <SelectHoursWithLabel
                            selectedHours={startWorkHours}
                            changeSelectedHours={changeStartWorkHours}
                            labelTitle="Начало работы"
                        />
                        <SelectHoursWithLabel
                            selectedHours={endWorkHours}
                            changeSelectedHours={changeEndWorkHours}
                            labelTitle="Конец работы"
                        />
                    </Grid>
                    <AppButton
                        buttonName="Сохранить"
                        handleClick={handleSubmit}
                        disabled={
                            !isValid ||
                            (!values.name && !values.address && !startWorkHours && !endWorkHours)
                        }
                    />
                </Form>
            )}
        </Formik>
    );
};

BranchForm.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    selectedBranch: PropTypes.shape({
        name: PropTypes.string,
        address: PropTypes.string,
        openTime: PropTypes.string,
        closeTime: PropTypes.string,
        id: PropTypes.number,
    }).isRequired,
    changeSelectedBranch: PropTypes.func.isRequired,
    createBranch: PropTypes.func.isRequired,
    editBranch: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(BranchForm);
