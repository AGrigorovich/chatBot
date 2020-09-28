import * as mailsTypes from '../types/mails';

const initialState = {
    arrayOfMails: [
        {
            id: 0,
            publicDate: '12/02/2020',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 1,
            publicDate: '22/08/2020',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
        {
            id: 2,
            publicDate: '12/09/2020',
            description:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        },
    ],
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
