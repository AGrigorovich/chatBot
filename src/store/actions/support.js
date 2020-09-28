import * as types from '../types/support';

export const startSendMailToSupport = (payload = {}) => ({
    type: types.SEND_MAIL_TO_SUPPORT_START,
    payload,
});

export const successSendMailToSupport = (payload = {}) => ({
    type: types.SEND_MAIL_TO_SUPPORT_SUCCESS,
    payload,
});

export const failSendMailToSupport = (error = {}) => ({
    type: types.SEND_MAIL_TO_SUPPORT_FAIL,
    payload: error,
});
