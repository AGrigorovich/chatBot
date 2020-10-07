import * as reviewTypes from '../types/review';

const initialState = {
    arrayOfReviews: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case reviewTypes.GET_REVIEWS_START:
            return {
                ...state,
            };
        case reviewTypes.GET_REVIEWS_SUCCESS:
            return {
                ...state,
                arrayOfReviews: payload,
            };
        case reviewTypes.GET_REVIEWS_FAIL:
            return {
                ...state,
            };
        case reviewTypes.APPROVE_REVIEW_START:
            return {
                ...state,
            };
        case reviewTypes.APPROVE_REVIEW_SUCCESS:
            return {
                ...state,
            };

        case reviewTypes.APPROVE_REVIEW_FAIL:
            return {
                ...state,
            };
        case reviewTypes.REJECT_REVIEW_START:
            return {
                ...state,
            };
        case reviewTypes.REJECT_REVIEW_SUCCESS:
            return {
                ...state,
            };

        case reviewTypes.REJECT_REVIEW_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
};
