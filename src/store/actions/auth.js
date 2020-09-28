import * as types from '../types/auth';

export const startLoginIn = (payload) => ({
    type: types.LOGIN_START,
    payload,
});

export const successLoginIn = (payload = {}) => {
    return {
        type: types.LOGIN_SUCCESS,
        payload,
    };
};

export const failLoginIn = (error = {}) => ({
    type: types.LOGIN_FAIL,
    payload: error,
});

export const startLogOut = (payload) => ({
    type: types.LOGOUT_START,
    payload,
});

export const successLogOut = (payload = {}) => ({
    type: types.LOGOUT_SUCCESS,
    payload,
});

export const failLogOut = (error = {}) => ({
    type: types.LOGOUT_FAIL,
    payload: error,
});
