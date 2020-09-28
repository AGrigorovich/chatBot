import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    startGetEmployeesList,
    startEditEmployee,
    startCreateEmployee,
    startDeleteEmployee,
} from '../../store/actions/employees';

import { startGetBranchesList } from '../../store/actions/branches';
import { startGetServicesList } from '../../store/actions/services';

import Employees from './Employees';

const EmployeesContainer = ({
    getEmployeesList,
    createEmployee,
    editEmployee,
    deleteEmployee,
    arrayOfEmployees = [],
    arrayOfBranches = [],
    arrayOfServices = [],
    getListOfEmployees,
    getListOfServices,
}) => {
    useEffect(() => {
        getEmployeesList();
        getListOfEmployees();
        getListOfServices();
    }, [getEmployeesList, getListOfEmployees, getListOfServices]);

    return (
        <Employees
            createEmployee={createEmployee}
            editEmployee={editEmployee}
            arrayOfEmployees={arrayOfEmployees}
            deleteEmployee={deleteEmployee}
            arrayOfBranches={arrayOfBranches}
            arrayOfServices={arrayOfServices}
        />
    );
};

EmployeesContainer.propTypes = {
    getEmployeesList: PropTypes.func.isRequired,
    createEmployee: PropTypes.func.isRequired,
    editEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    arrayOfEmployees: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
    getListOfEmployees: PropTypes.func.isRequired,
    getListOfServices: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfEmployees: state.employees.arrayOfEmployees,
    arrayOfBranches: state.branches.arrayOfBranches,
    arrayOfServices: state.services.arrayOfServices,
});

const mapDispatchToProps = {
    getEmployeesList: startGetEmployeesList,
    createEmployee: startCreateEmployee,
    editEmployee: startEditEmployee,
    deleteEmployee: startDeleteEmployee,
    getListOfEmployees: startGetBranchesList,
    getListOfServices: startGetServicesList,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(EmployeesContainer);
