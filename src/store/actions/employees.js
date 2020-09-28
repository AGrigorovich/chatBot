import * as types from '../types/employees';

export const startGetEmployeesList = () => ({
    type: types.GET_EMPLOYEES_LIST_START,
});

export const successGetEmployeesList = (payload = {}) => ({
    type: types.GET_EMPLOYEES_LIST_SUCCESS,
    payload,
});

export const failGetEmployeesList = (error = {}) => ({
    type: types.GET_EMPLOYEES_LIST_FAIL,
    payload: error,
});

export const startCreateEmployee = (payload = {}) => ({
    type: types.CREATE_EMPLOYEE_START,
    payload,
});

export const successCreateEmployee = (payload = {}) => ({
    type: types.CREATE_EMPLOYEE_SUCCESS,
    payload,
});

export const failCreateEmployee = (error = {}) => ({
    type: types.CREATE_EMPLOYEE_FAIL,
    payload: error,
});

export const startEditEmployee = (payload = {}) => ({
    type: types.EDIT_EMPLOYEE_START,
    payload,
});

export const successEditEmployee = (payload = {}) => ({
    type: types.EDIT_EMPLOYEE_SUCCESS,
    payload,
});

export const failEditEmployee = (error = {}) => ({
    type: types.EDIT_EMPLOYEE_FAIL,
    payload: error,
});

export const startDeleteEmployee = (payload = {}) => ({
    type: types.DELETE_EMPLOYEE_START,
    payload,
});

export const successDeleteEmployee = (payload = {}) => ({
    type: types.DELETE_EMPLOYEE_SUCCESS,
    payload,
});

export const failDeleteEmployee = (error = {}) => ({
    type: types.EDIT_EMPLOYEE_FAIL,
    payload: error,
});
