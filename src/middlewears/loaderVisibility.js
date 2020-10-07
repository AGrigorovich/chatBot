import { loaderShow, loaderHide } from '../store/actions/loader';
import { START, SUCCESS, FAIL } from '../store/typeSettings';

const requestsQueue = [];

export default (store) => (next) => (action) => {
    if (action.type) {
        const separateType = action.type.split('/');

        const actionSagaType = separateType.pop();
        const actionBodyType = separateType.join('/');

        if (actionSagaType === START) {
            if (!requestsQueue.length) {
                store.dispatch(loaderShow());
                setTimeout(() => store.dispatch(loaderHide()), 500);
                requestsQueue.push(actionBodyType);
            }
        } else if (actionSagaType === FAIL || actionSagaType === SUCCESS) {
            const currentTypeIndex = requestsQueue.indexOf(actionBodyType);

            requestsQueue.splice(currentTypeIndex, currentTypeIndex + 1);
        }
    }
    next(action);
};
