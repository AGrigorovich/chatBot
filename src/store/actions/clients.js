import * as types from '../types/clients';

export const startGetClientsList = () => ({
    type: types.GET_CLIENTS_LIST_START,
});

export const successGetClientsList = (payload = {}) => ({
    type: types.GET_CLIENTS_LIST_SUCCESS,
    payload,
});

export const failGetClientsList = (error = {}) => ({
    type: types.GET_CLIENTS_LIST_FAIL,
    payload: error,
});

export const startCreateClient = (payload = {}) => ({
    type: types.CREATE_CLIENT_START,
    payload,
});

export const successCreateClient = (payload = {}) => ({
    type: types.CREATE_CLIENT_SUCCESS,
    payload,
});

export const failCreateClient = (error = {}) => ({
    type: types.CREATE_CLIENT_FAIL,
    payload: error,
});

export const startEditClient = (payload = {}) => ({
    type: types.EDIT_CLIENT_START,
    payload,
});

export const successEditClient = (payload = {}) => ({
    type: types.EDIT_CLIENT_SUCCESS,
    payload,
});

export const failEditClient = (error = {}) => ({
    type: types.EDIT_CLIENT_FAIL,
    payload: error,
});

export const startDeleteClient = (payload = {}) => ({
    type: types.DELETE_CLIENT_START,
    payload,
});

export const successDeleteClient = (payload = {}) => ({
    type: types.DELETE_CLIENT_SUCCESS,
    payload,
});

export const failDeleteClient = (error = {}) => ({
    type: types.EDIT_CLIENT_FAIL,
    payload: error,
});
