import * as types from '../types/services';

export const startGetServicesList = () => ({
    type: types.GET_SERVICES_LIST_START,
});

export const successGetServicesList = (payload = {}) => ({
    type: types.GET_SERVICES_LIST_SUCCESS,
    payload,
});

export const failGetServicesList = (error = {}) => ({
    type: types.GET_SERVICES_LIST_FAIL,
    payload: error,
});

export const startCreateService = (payload = {}) => ({
    type: types.CREATE_SERVICE_START,
    payload,
});

export const successCreateService = (payload = {}) => ({
    type: types.CREATE_SERVICE_SUCCESS,
    payload,
});

export const failCreateService = (error = {}) => ({
    type: types.CREATE_SERVICE_FAIL,
    payload: error,
});

export const startEditService = (payload = {}) => ({
    type: types.EDIT_SERVICE_START,
    payload,
});

export const successEditService = (payload = {}) => ({
    type: types.EDIT_SERVICE_SUCCESS,
    payload,
});

export const failEditService = (error = {}) => ({
    type: types.EDIT_SERVICE_FAIL,
    payload: error,
});

export const startDeleteService = (payload = {}) => ({
    type: types.DELETE_SERVICE_START,
    payload,
});

export const successDeleteService = (payload = {}) => ({
    type: types.DELETE_SERVICE_SUCCESS,
    payload,
});

export const failDeleteService = (error = {}) => ({
    type: types.EDIT_SERVICE_FAIL,
    payload: error,
});

export const startGetListOfBranches = () => ({
    type: types.GET_BRANCHES_LIST_START,
});

export const successGetListOfBranches = (payload = {}) => ({
    type: types.GET_BRANCHES_LIST_SUCCESS,
    payload,
});

export const failGetListOfBranches = (error = {}) => ({
    type: types.GET_BRANCHES_LIST_FAIL,
    payload: error,
});
