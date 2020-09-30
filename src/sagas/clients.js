import { put, call, takeLatest } from 'redux-saga/effects';

import * as clientsActions from '../store/actions/clients';
import * as clientsTypes from '../store/types/clients';

import {
    getClientsListRequest,
    createClientRequest,
    deleteClientRequest,
} from '../services/API/clients';

function* getClientsAction() {
    try {
        const { data } = yield call(getClientsListRequest);
        yield put(clientsActions.successGetClientsList(data));
    } catch (err) {
        yield put(clientsActions.failGetClientsList(err));
    }
}

function* createClientAction({ payload }) {
    try {
        const data = yield call(createClientRequest(payload));
        yield put(clientsActions.successCreateClient(data));
    } catch (err) {
        yield put(clientsActions.failCreateClient(err));
    }
}

function* editClientAction({ payload }) {
    try {
        yield call(getClientsListRequest);
        yield put(clientsActions.successEditClient(payload));
    } catch (err) {
        yield put(clientsActions.failEditClient(err));
    }
}

function* deleteClientAction({ payload }) {
    try {
        const { data } = yield call(deleteClientRequest, payload);
        yield put(clientsActions.successDeleteClient(data));
    } catch (err) {
        yield put(clientsActions.failDeleteClient(err));
    }
}

// Watchers
export default function* watchClientsAction() {
    yield takeLatest(clientsTypes.GET_CLIENTS_LIST_START, getClientsAction);
    yield takeLatest(clientsTypes.CREATE_CLIENT_START, createClientAction);
    yield takeLatest(clientsTypes.EDIT_CLIENT_START, editClientAction);
    yield takeLatest(clientsTypes.DELETE_CLIENT_START, deleteClientAction);
}
