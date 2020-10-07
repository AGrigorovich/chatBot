import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import AppFooter from '../AppFooter/AppFooter';
import MainPageMenu from '../MainPageMenu/MainPageMenu';
import EmployeesForm from './EmployeesForm';
import ListOfEmployees from './ListOfEmployees';

const styles = {
    pageContainer: {
        display: 'flex',
        height: 'calc(100% - 4rem)',
    },
    clientsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
};

const Employees = ({
    classes,
    createEmployee,
    editEmployee,
    deleteEmployee,
    arrayOfEmployees,
    arrayOfBranches,
    arrayOfServices,
}) => {
    const [selectedEmployee, changeSelectedSelectedEmployee] = useState({});

    return (
        <>
            <MainMenu />
            <Grid className={classes.pageContainer}>
                <MainPageMenu />
                <Grid className={classes.clientsContainer}>
                    <EmployeesForm
                        selectedEmployee={selectedEmployee}
                        changeSelectedSelectedEmployee={changeSelectedSelectedEmployee}
                        createEmployee={createEmployee}
                        editEmployee={editEmployee}
                        arrayOfBranches={arrayOfBranches}
                        arrayOfServices={arrayOfServices}
                    />
                    <ListOfEmployees
                        changeSelectedSelectedEmployee={changeSelectedSelectedEmployee}
                        deleteEmployee={deleteEmployee}
                        arrayOfEmployees={arrayOfEmployees}
                    />
                </Grid>
            </Grid>
            <AppFooter />
        </>
    );
};

Employees.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    createEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    arrayOfEmployees: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(Employees);
