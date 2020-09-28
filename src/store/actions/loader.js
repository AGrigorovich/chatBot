import * as types from '../types/loader';

export const loaderShow = () => ({
    type: types.LOADER_SHOW,
});

export const loaderHide = () => ({
    type: types.LOADER_HIDE,
});
