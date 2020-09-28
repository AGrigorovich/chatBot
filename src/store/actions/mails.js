import * as types from '../types/mails';

export const startGetMailsList = () => ({
    type: types.GET_MAILS_LIST_START,
});

export const successGetMailsList = (payload = {}) => ({
    type: types.GET_MAILS_LIST_SUCCESS,
    payload,
});

export const failGetMailsList = (error = {}) => ({
    type: types.GET_MAILS_LIST_FAIL,
    payload: error,
});

export const startCreateMail = (payload = {}) => ({
    type: types.CREATE_MAIL_START,
    payload,
});

export const successCreateMail = (payload = {}) => ({
    type: types.CREATE_MAIL_SUCCESS,
    payload,
});

export const failCreateMail = (error = {}) => ({
    type: types.CREATE_MAIL_FAIL,
    payload: error,
});
