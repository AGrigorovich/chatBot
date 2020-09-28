import * as types from '../types/loader';

const initialState = {
    loading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOADER_SHOW:
            return { ...state, loading: true };
        case types.LOADER_HIDE:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
