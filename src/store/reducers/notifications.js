import * as types from '../types/notifications';

const initialState = {
    notificationText: '',
    notificationErrorText: '',
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case types.NOTIFICATION_SHOW:
            return { ...state, ...payload };
        case types.NOTIFICATION_HIDE:
            return {
                ...state,
                notificationText: '',
                notificationErrorText: '',
            };
        default:
            return state;
    }
};
