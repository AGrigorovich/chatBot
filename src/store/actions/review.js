import * as types from '../types/review';

export const startGetReviews = () => ({
    type: types.GET_REVIEWS_START,
});

export const successGetReviews = (payload = {}) => ({
    type: types.GET_REVIEWS_SUCCESS,
    payload,
});

export const failGetReviews = (error = {}) => ({
    type: types.GET_REVIEWS_FAIL,
    payload: error,
});

export const startApproveReview = (payload = {}) => ({
    type: types.APPROVE_REVIEW_START,
    payload,
});

export const successApproveReview = (payload = {}) => ({
    type: types.APPROVE_REVIEW_SUCCESS,
    payload,
});

export const failApproveReview = (error = {}) => ({
    type: types.APPROVE_REVIEW_FAIL,
    payload: error,
});

export const startRejectReview = (payload = {}) => ({
    type: types.REJECT_REVIEW_START,
    payload,
});

export const successRejectReview = (payload = {}) => ({
    type: types.REJECT_REVIEW_SUCCESS,
    payload,
});

export const failRejectReview = (error = {}) => ({
    type: types.REJECT_REVIEW_FAIL,
    payload: error,
});
