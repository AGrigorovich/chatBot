import { put, call, takeLatest } from 'redux-saga/effects';

import * as employeesActions from '../store/actions/employees';
import * as employeesTypes from '../store/types/employees';

import {
    getEmployeesListRequest,
    createEmployeeRequest,
    deleteEmployeeRequest,
} from '../services/API/employees';
import * as notificationsActions from '../store/actions/notifications';

function* getEmployeesAction() {
    try {
        const { data } = yield call(getEmployeesListRequest);
        yield put(employeesActions.successGetEmployeesList(data));
    } catch (err) {
        yield put(employeesActions.failGetEmployeesList(err));
    }
}

function* createEmployeeAction({ payload }) {
    try {
        const data = yield call(createEmployeeRequest, payload);
        yield put(employeesActions.successCreateEmployee(data));
        yield put(
            notificationsActions.notificationShow({
                notificationText: 'Сотрудник был успешно создан',
            })
        );
    } catch (err) {
        yield put(employeesActions.failCreateEmployee(err));
        yield put(
            notificationsActions.notificationShow({
                notificationErrorText: 'Сотрудник не был создан',
            })
        );
    }
}

function* editEmployeeAction({ payload }) {
    try {
        yield call(getEmployeesListRequest);
        yield put(employeesActions.successEditEmployee(payload));
        yield put(
            notificationsActions.notificationShow({
                notificationText: 'Сотрудник был успешно изменен',
            })
        );
    } catch (err) {
        yield put(employeesActions.failEditEmployee(err));
        yield put(
            notificationsActions.notificationShow({
                notificationErrorText: 'Сотрудник не был создан',
            })
        );
    }
}

function* deleteEmployeeAction({ payload }) {
    try {
        const { data } = yield call(deleteEmployeeRequest, payload);
        yield put(employeesActions.successDeleteEmployee(data));
        yield put(
            notificationsActions.notificationShow({
                notificationText: 'Сотрудник был успешно удален',
            })
        );
    } catch (err) {
        yield put(employeesActions.failDeleteEmployee(err));
        yield put(
            notificationsActions.notificationShow({
                notificationErrorText: 'Сотрудник не был создан',
            })
        );
    }
}

// Watchers
export default function* watchEmployeesAction() {
    yield takeLatest(employeesTypes.GET_EMPLOYEES_LIST_START, getEmployeesAction);
    yield takeLatest(employeesTypes.CREATE_EMPLOYEE_START, createEmployeeAction);
    yield takeLatest(employeesTypes.EDIT_EMPLOYEE_START, editEmployeeAction);
    yield takeLatest(employeesTypes.DELETE_EMPLOYEE_START, deleteEmployeeAction);
}
