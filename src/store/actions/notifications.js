import * as types from '../types/notifications';

export const notificationShow = (payload) => ({
    type: types.NOTIFICATION_SHOW,
    payload,
});

export const notificationHide = () => ({
    type: types.NOTIFICATION_HIDE,
});
