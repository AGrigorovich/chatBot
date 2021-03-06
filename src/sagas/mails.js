import { put, call, takeLatest } from 'redux-saga/effects';

import * as mailsActions from '../store/actions/mails';
import * as mailsTypes from '../store/types/mails';

import { getMailsListRequest, sendNewMailRequest } from '../services/API/mails';
import * as notificationsActions from '../store/actions/notifications';

function* getMailsAction() {
    try {
        const { data } = yield call(getMailsListRequest);
        yield put(mailsActions.successGetMailsList(data));
    } catch (err) {
        yield put(mailsActions.failGetMailsList(err));
    }
}

function* createMailAction({ payload }) {
    try {
        const data = yield call(sendNewMailRequest, payload);
        yield put(mailsActions.successCreateMail(data));
        yield put(
            notificationsActions.notificationShow({
                notificationText: 'Рассылка была успешно создана',
            })
        );
    } catch (err) {
        yield put(mailsActions.failCreateMail(err));
        yield put(
            notificationsActions.notificationShow({
                notificationErrorText: 'Рассылка не была создана',
            })
        );
    }
}

// Watchers
export default function* watchMailsAction() {
    yield takeLatest(mailsTypes.GET_MAILS_LIST_START, getMailsAction);
    yield takeLatest(mailsTypes.CREATE_MAIL_START, createMailAction);
}
