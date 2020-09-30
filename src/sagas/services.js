import { put, call, takeLatest } from 'redux-saga/effects';

import * as servicesActions from '../store/actions/services';
import * as servicesTypes from '../store/types/services';

import { getServicesListRequest, deleteServiceRequest } from '../services/API/services';

function* getServicesAction() {
    try {
        const { data } = yield call(getServicesListRequest);
        yield put(servicesActions.successGetServicesList(data));
    } catch (err) {
        yield put(servicesActions.failGetServicesList(err));
    }
}

function* createServiceAction({ payload }) {
    try {
        yield call(getServicesListRequest);
        yield put(servicesActions.successCreateService(payload));
    } catch (err) {
        yield put(servicesActions.failCreateService(err));
    }
}

function* editServiceAction({ payload }) {
    try {
        yield call(getServicesListRequest);
        yield put(servicesActions.successEditService(payload));
    } catch (err) {
        yield put(servicesActions.failEditService(err));
    }
}

function* deleteServiceAction({ payload }) {
    try {
        const { data } = yield call(deleteServiceRequest, payload);
        yield put(servicesActions.successDeleteService(data));
    } catch (err) {
        yield put(servicesActions.failDeleteService(err));
    }
}

function* getListOfBranchesServiceAction({ payload }) {
    try {
        yield call(getServicesListRequest);
        yield put(servicesActions.successGetListOfBranches(payload));
    } catch (err) {
        yield put(servicesActions.failGetListOfBranches(err));
    }
}

// Watchers
export default function* watchServicesAction() {
    yield takeLatest(servicesTypes.GET_SERVICES_LIST_START, getServicesAction);
    yield takeLatest(servicesTypes.CREATE_SERVICE_START, createServiceAction);
    yield takeLatest(servicesTypes.EDIT_SERVICE_START, editServiceAction);
    yield takeLatest(servicesTypes.DELETE_SERVICE_START, deleteServiceAction);
    yield takeLatest(servicesTypes.GET_BRANCHES_LIST_START, getListOfBranchesServiceAction);
}
