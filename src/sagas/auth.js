import { put, call, takeLatest } from 'redux-saga/effects';

import * as authActions from '../store/actions/auth';
import * as authTypes from '../store/types/auth';

import { logInRequest, logOutRequest } from '../services/API/auth';

import localStorage from '../services/localStorage';
import history from '../services/history';
import endpoints from '../services/routeEndpoints';

function* logIn({ payload }) {
    try {
        const { data } = yield call(logInRequest, payload);
        yield put(authActions.successLoginIn(data));
        localStorage.setItem('currentUser', payload.email);
        setTimeout(() => history.push(endpoints.main), 1000);
    } catch (err) {
        yield put(authActions.failLoginIn(err));
    }
}

function* logOut() {
    try {
        // const { data } = yield call(logOutRequest);
        yield put(authActions.successLogOut());
        localStorage.clearStorage();
        history.push('/');
    } catch (err) {
        yield put(authActions.failLogOut(err));
    }
}

// Watchers
export default function* watchAuthAction() {
    yield takeLatest(authTypes.LOGIN_START, logIn);
    yield takeLatest(authTypes.LOGOUT_START, logOut);
}
