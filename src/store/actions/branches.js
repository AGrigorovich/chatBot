import * as types from '../types/branches';

export const startGetBranchesList = () => ({
    type: types.GET_BRANCHES_LIST_START,
});

export const successGetBranchesList = (payload = {}) => ({
    type: types.GET_BRANCHES_LIST_SUCCESS,
    payload,
});

export const failGetBranchesList = (error = {}) => ({
    type: types.GET_BRANCHES_LIST_FAIL,
    payload: error,
});

export const startCreateBranch = (payload = {}) => ({
    type: types.CREATE_BRANCH_START,
    payload,
});

export const successCreateBranch = (payload = {}) => ({
    type: types.CREATE_BRANCH_SUCCESS,
    payload,
});

export const failCreateBranch = (error = {}) => ({
    type: types.CREATE_BRANCH_FAIL,
    payload: error,
});

export const startEditBranch = (payload = {}) => ({
    type: types.EDIT_BRANCH_START,
    payload,
});

export const successEditBranch = (payload = {}) => ({
    type: types.EDIT_BRANCH_SUCCESS,
    payload,
});

export const failEditBranch = (error = {}) => ({
    type: types.EDIT_BRANCH_FAIL,
    payload: error,
});

export const startDeleteBranch = (payload = {}) => ({
    type: types.DELETE_BRANCH_START,
    payload,
});

export const successDeleteBranch = (payload = {}) => ({
    type: types.DELETE_BRANCH_SUCCESS,
    payload,
});

export const failDeleteBranch = (error = {}) => ({
    type: types.EDIT_BRANCH_FAIL,
    payload: error,
});
