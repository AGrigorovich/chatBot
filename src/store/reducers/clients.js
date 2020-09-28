import * as clientsTypes from '../types/clients';

const initialState = {
    arrayOfClients: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case clientsTypes.GET_CLIENTS_LIST_START:
            return {
                ...state,
            };
        case clientsTypes.GET_CLIENTS_LIST_SUCCESS:
            return {
                ...state,
                arrayOfClients: payload,
            };
        case clientsTypes.GET_CLIENTS_LIST_FAIL:
            return {
                ...state,
            };

        case clientsTypes.CREATE_CLIENT_START:
            return {
                ...state,
            };
        case clientsTypes.CREATE_CLIENT_SUCCESS:
            return {
                ...state,
                arrayOfClients: [
                    ...state.arrayOfClients,
                    { ...payload, id: state.arrayOfClients.length + 1 },
                ],
            };
        case clientsTypes.CREATE_CLIENT_FAIL:
            return {
                ...state,
            };

        case clientsTypes.EDIT_CLIENT_START:
            return {
                ...state,
            };
        case clientsTypes.EDIT_CLIENT_SUCCESS:
            return {
                ...state,
                arrayOfClients: state.arrayOfClients.map((client) => {
                    if (client.id === payload.id) {
                        return { ...payload };
                    }
                    return client;
                }),
            };
        case clientsTypes.EDIT_CLIENT_FAIL:
            return {
                ...state,
            };

        case clientsTypes.DELETE_CLIENT_START:
            return {
                ...state,
            };
        case clientsTypes.DELETE_CLIENT_SUCCESS:
            return {
                ...state,
                arrayOfClients: [...state.arrayOfClients.filter((client) => client.id !== payload)],
            };
        case clientsTypes.DELETE_CLIENT_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
