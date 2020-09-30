import * as servicesTypes from '../types/services';

const initialState = {
    arrayOfServices: [],
    arrayOfBranches: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case servicesTypes.GET_SERVICES_LIST_START:
            return {
                ...state,
            };
        case servicesTypes.GET_SERVICES_LIST_SUCCESS:
            return {
                ...state,
                arrayOfServices: payload,
            };
        case servicesTypes.GET_SERVICES_LIST_FAIL:
            return {
                ...state,
            };

        case servicesTypes.GET_BRANCHES_LIST_START:
            return {
                ...state,
            };
        case servicesTypes.GET_BRANCHES_LIST_SUCCESS:
            return {
                ...state,
                arrayOfBranches: state.arrayOfBranches.map((branch) => ({
                    value: branch.id,
                    label: branch.name,
                })),
            };
        case servicesTypes.GET_BRANCHES_LIST_FAIL:
            return {
                ...state,
            };

        case servicesTypes.CREATE_SERVICE_START:
            return {
                ...state,
            };
        case servicesTypes.CREATE_SERVICE_SUCCESS:
            return {
                ...state,
                arrayOfServices: [
                    ...state.arrayOfServices,
                    { ...payload, id: state.arrayOfServices.length + 1 },
                ],
            };
        case servicesTypes.CREATE_SERVICE_FAIL:
            return {
                ...state,
            };

        case servicesTypes.EDIT_SERVICE_START:
            return {
                ...state,
            };
        case servicesTypes.EDIT_SERVICE_SUCCESS:
            return {
                ...state,
                arrayOfServices: state.arrayOfServices.map((service) => {
                    if (service.id === payload.id) {
                        return { ...payload };
                    }
                    return service;
                }),
            };
        case servicesTypes.EDIT_SERVICE_FAIL:
            return {
                ...state,
            };

        case servicesTypes.DELETE_SERVICE_START:
            return {
                ...state,
            };
        case servicesTypes.DELETE_SERVICE_SUCCESS:
            return {
                ...state,
                arrayOfServices: [
                    ...state.arrayOfServices.filter((service) => service.id !== payload.id),
                ],
            };
        case servicesTypes.DELETE_SERVICE_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
