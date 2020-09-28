import { all } from 'redux-saga/effects';

// watchers
import watchAuthAction from './auth';
import watchReviewAction from './review';
import watchClientsAction from './clients';
import watchBranchesAction from './branches';
import watchEmployeesAction from './employees';
import watchServicesAction from './services';
import watchMailingsAction from './mails';
import watchSupportAction from './support';

export default function* rootSaga() {
    yield all([
        watchAuthAction(),
        watchReviewAction(),
        watchClientsAction(),
        watchBranchesAction(),
        watchEmployeesAction(),
        watchServicesAction(),
        watchMailingsAction(),
        watchSupportAction(),
    ]);
}
