import { put, call, takeLatest } from 'redux-saga/effects';

import * as reviewActions from '../store/actions/review';
import * as reviewTypes from '../store/types/review';

import {
    getReviewsRequest,
    approveReviewRequest,
    rejectReviewRequest,
} from '../services/API/review';

function* getReviewsAction() {
    try {
        const data = yield call(getReviewsRequest);
        yield put(reviewActions.successGetReviews(data));
    } catch (err) {
        yield put(reviewActions.failGetReviews(err));
    }
}

function* changeReviewAction({ payload }) {
    try {
        const { data } = yield call(approveReviewRequest, payload);
        yield put(reviewActions.successApproveReview(data));
    } catch (err) {
        yield put(reviewActions.failApproveReview(err));
    }
}

function* rejectReviewAction({ payload }) {
    try {
        const data = yield call(rejectReviewRequest, payload);
        yield put(reviewActions.successRejectReview(data));
    } catch (err) {
        yield put(reviewActions.failRejectReview(err));
    }
}

// Watchers
export default function* watchReviewAction() {
    yield takeLatest(reviewTypes.GET_REVIEWS_START, getReviewsAction);
    yield takeLatest(reviewTypes.APPROVE_REVIEW_START, changeReviewAction);
    yield takeLatest(reviewTypes.REJECT_REVIEW_START, rejectReviewAction);
}
