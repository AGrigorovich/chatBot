import * as authTypes from '../types/auth';

const initialState = {
    isUserSignInFailed: false,
};

export default (state = initialState, { type }) => {
    switch (type) {
        case authTypes.LOGIN_SUCCESS:
            return {
                ...state,
            };
        case authTypes.LOGIN_FAIL:
            return {
                ...state,
                isUserSignInFailed: true,
            };

        case authTypes.LOGOUT_SUCCESS:
            return {
                ...state,
            };
        default:
            return state;
    }
};
