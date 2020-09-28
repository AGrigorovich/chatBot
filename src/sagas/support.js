import { put, call, takeLatest } from 'redux-saga/effects';

import * as supportActions from '../store/actions/support';
import * as supportTypes from '../store/types/support';

import { sendLetterToSupportRequest } from '../services/API/support';

function* sendEmailToSupportAction({ payload }) {
    try {
        yield call(sendLetterToSupportRequest, payload);
        yield put(supportActions.successSendMailToSupport());
    } catch (err) {
        yield put(supportActions.failSendMailToSupport(err));
    }
}

// Watchers
export default function* watchSupportAction() {
    yield takeLatest(supportTypes.SEND_MAIL_TO_SUPPORT_START, sendEmailToSupportAction);
}
