import * as employeesTypes from '../types/employees';

const initialState = {
    arrayOfEmployees: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case employeesTypes.GET_EMPLOYEES_LIST_START:
            return {
                ...state,
            };
        case employeesTypes.GET_EMPLOYEES_LIST_SUCCESS:
            return {
                ...state,
                arrayOfEmployees: payload,
            };
        case employeesTypes.GET_EMPLOYEES_LIST_FAIL:
            return {
                ...state,
            };

        case employeesTypes.CREATE_EMPLOYEE_START:
            return {
                ...state,
            };
        case employeesTypes.CREATE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                arrayOfEmployees: [
                    ...state.arrayOfEmployees,
                    { ...payload, id: state.arrayOfEmployees.length + 1 },
                ],
            };
        case employeesTypes.CREATE_EMPLOYEE_FAIL:
            return {
                ...state,
            };

        case employeesTypes.EDIT_EMPLOYEE_START:
            return {
                ...state,
            };
        case employeesTypes.EDIT_EMPLOYEE_SUCCESS:
            return {
                ...state,
                arrayOfEmployees: state.arrayOfEmployees.map((employee) => {
                    if (employee.id === payload.id) {
                        return { ...payload };
                    }
                    return employee;
                }),
            };
        case employeesTypes.EDIT_EMPLOYEE_FAIL:
            return {
                ...state,
            };

        case employeesTypes.DELETE_EMPLOYEE_START:
            return {
                ...state,
            };
        case employeesTypes.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                arrayOfEmployees: [
                    ...state.arrayOfEmployees.filter((employee) => employee.id !== payload),
                ],
            };
        case employeesTypes.DELETE_EMPLOYEE_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
