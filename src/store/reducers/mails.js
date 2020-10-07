import * as mailsTypes from '../types/mails';

const initialState = {
    arrayOfMails: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case mailsTypes.GET_MAILS_LIST_START:
            return {
                ...state,
            };
        case mailsTypes.GET_MAILS_LIST_SUCCESS:
            return {
                ...state,
                arrayOfMails: payload,
            };
        case mailsTypes.GET_MAILS_LIST_FAIL:
            return {
                ...state,
            };

        case mailsTypes.CREATE_MAIL_START:
            return {
                ...state,
            };
        case mailsTypes.CREATE_MAIL_SUCCESS:
            return {
                ...state,
                arrayOfMails: [
                    ...state.arrayOfMails,
                    { ...payload, id: state.arrayOfMails.length + 1 },
                ],
            };
        case mailsTypes.CREATE_MAIL_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
