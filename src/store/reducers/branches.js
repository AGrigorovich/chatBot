import * as branchTypes from '../types/branches';

const initialState = {
    arrayOfBranches: [],
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case branchTypes.GET_BRANCHES_LIST_START:
            return {
                ...state,
            };
        case branchTypes.GET_BRANCHES_LIST_SUCCESS:
            return {
                ...state,
                arrayOfBranches: payload,
            };
        case branchTypes.GET_BRANCHES_LIST_FAIL:
            return {
                ...state,
            };

        case branchTypes.CREATE_BRANCH_START:
            return {
                ...state,
            };
        case branchTypes.CREATE_BRANCH_SUCCESS:
            return {
                ...state,
                arrayOfBranches: [...state.arrayOfBranches, payload],
            };
        case branchTypes.CREATE_BRANCH_FAIL:
            return {
                ...state,
            };

        case branchTypes.EDIT_BRANCH_START:
            return {
                ...state,
            };
        case branchTypes.EDIT_BRANCH_SUCCESS:
            return {
                ...state,
                arrayOfBranches: state.arrayOfBranches.map((branch) => {
                    if (branch.id === payload.id) {
                        return { ...payload };
                    }
                    return branch;
                }),
            };
        case branchTypes.EDIT_BRANCH_FAIL:
            return {
                ...state,
            };

        case branchTypes.DELETE_BRANCH_START:
            return {
                ...state,
            };
        case branchTypes.DELETE_BRANCH_SUCCESS:
            return {
                ...state,
                arrayOfBranches: [
                    ...state.arrayOfBranches.filter((branch) => branch.id !== payload),
                ],
            };
        case branchTypes.DELETE_BRANCH_FAIL:
            return {
                ...state,
            };

        default:
            return state;
    }
};
