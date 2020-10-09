import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Form, Formik } from 'formik';
import { object, string } from 'yup';

import { FormHelperText, Grid, InputLabel, withStyles } from '@material-ui/core';

import AppButton from '../AppButton/AppButton';
import InputFieldWithLabel from '../InputFieldWithLabel/InputFieldWithLabel';
import AppSelect from '../AppSelect/AppSelect';
import EmployeeSetWorkingShcedule from './EmployeeSetWorkingShcedule';

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
    nickname: string(),
});

const EmployeesForm = ({
    classes,
    selectedEmployee,
    changeSelectedSelectedEmployee,
    createEmployee,
    editEmployee,
    arrayOfBranches,
    arrayOfServices,
}) => {
    const [dataErrors, changeDataErrors] = useState('');
    const [selectedBranches, changeSelectedBranches] = useState(null);
    const [selectedServices, changeSelectedServices] = useState(null);
    const [existingBranches, changeExistingBranches] = useState([]);
    const [existingServices, changeExistingServices] = useState([]);
    const { name = '', surname = '', nickname = '', id } = selectedEmployee;
    const [initialValues, changeInitialValues] = useState({
        name,
        surname,
        nickname,
    });

    useEffect(() => {
        const {
            name: employeeName = '',
            surname: employeeSurname = '',
            nickname: employeeNickName = '',
            salonEntity: employeeBranches = {},
            serviceTypeEntity: employeeServices = {},
        } = selectedEmployee;

        if (Object.keys(employeeBranches).length) {
            const selectedBranchesForSelect = {
                value: employeeBranches.id,
                label: employeeBranches.name,
            };
            changeSelectedBranches(selectedBranchesForSelect);
        }
        if (Object.keys(employeeServices).length) {
            const selectOptionsServices = {
                value: employeeServices.id,
                label: employeeServices.serviceName,
            };
            changeSelectedServices(selectOptionsServices);
        }
        changeInitialValues({
            name: employeeName,
            surname: employeeSurname,
            nickname: employeeNickName,
        });
    }, [selectedEmployee]);

    useEffect(() => {
        if (arrayOfBranches.length) {
            const branches = arrayOfBranches.map((branch) => ({
                value: branch.id,
                label: branch.name,
            }));
            changeExistingBranches(branches);
        }
        if (arrayOfServices.length) {
            const services = arrayOfServices.map((service) => ({
                value: service.id,
                label: service.serviceName,
            }));
            changeExistingServices(services);
        }
    }, [arrayOfBranches, arrayOfServices]);

    return (
        <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                setSubmitting(false);
                changeDataErrors('');
                if (!values.name && !values.surname && !values.nickname) {
                    return changeDataErrors('Вы не указали имя, фамилию или никнэйм');
                }
                if (!selectedBranches || !Object.keys(selectedBranches).length) {
                    return changeDataErrors('Выбери пожалуйста филиалы сотрудника');
                }
                if (!selectedServices || !Object.keys(selectedServices).length) {
                    return changeDataErrors('Выберите пожулуйста услуги сотрудника');
                }
                const newData = { ...values, selectedBranches, selectedServices, id };
                resetForm();
                changeSelectedSelectedEmployee({});
                if (!id || id === 0) {
                    editEmployee(newData);
                }
                return createEmployee(newData);
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
                            placeholder="Введите имя сотрудника"
                            labelTitle="Имя сотрудника"
                        />
                        {errors.name && <FormHelperText error>{errors.name}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="surname"
                            value={values.surname}
                            onChangeFunction={handleChange}
                            placeholder="Введите фимилию сотрудника"
                            labelTitle="Фамилия сотрудника"
                        />
                        {errors.surname && <FormHelperText error>{errors.surname}</FormHelperText>}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputFieldWithLabel
                            name="nickname"
                            value={values.nickname}
                            onChangeFunction={handleChange}
                            placeholder="Введите никнейм сотрудника"
                            labelTitle="Никнейм сотрудника"
                        />
                        {errors.nickname && (
                            <FormHelperText error>{errors.nickname}</FormHelperText>
                        )}
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputLabel>Выберите филиалы</InputLabel>
                        <AppSelect
                            value={selectedBranches}
                            onChange={changeSelectedBranches}
                            options={existingBranches}
                        />
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <InputLabel>Выберите услуги</InputLabel>
                        <AppSelect
                            value={selectedServices}
                            onChange={changeSelectedServices}
                            options={existingServices}
                        />
                    </Grid>
                    <Grid className={classes.inputContainer}>
                        <EmployeeSetWorkingShcedule />
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

EmployeesForm.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    selectedEmployee: PropTypes.shape({
        name: PropTypes.string,
        surname: PropTypes.string,
        nickname: PropTypes.string,
        salonEntity: PropTypes.object,
        serviceTypeEntity: PropTypes.object,
        id: PropTypes.number,
    }).isRequired,
    changeSelectedSelectedEmployee: PropTypes.func.isRequired,
    createEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(EmployeesForm);
