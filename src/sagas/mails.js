import { put, call, takeLatest } from 'redux-saga/effects';

import * as mailsActions from '../store/actions/mails';
import * as mailsTypes from '../store/types/mails';

import { getMailsListRequest, sendNewMailRequest } from '../services/API/mails';

function* getMailsAction() {
    try {
        yield call(getMailsListRequest);
        yield put(mailsActions.successGetMailsList());
    } catch (err) {
        yield put(mailsActions.failGetMailsList(err));
    }
}

function* createMailAction({ payload }) {
    try {
        yield call(sendNewMailRequest, payload);
        yield put(mailsActions.successCreateMail(payload));
    } catch (err) {
        yield put(mailsActions.failCreateMail(err));
    }
}

// Watchers
export default function* watchMailsAction() {
    yield takeLatest(mailsTypes.GET_MAILS_LIST_START, getMailsAction);
    yield takeLatest(mailsTypes.CREATE_MAIL_START, createMailAction);
}
