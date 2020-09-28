import { combineReducers } from 'redux';

// importing all reducers for combining them
import { reducer as notifications } from 'react-notification-system-redux';
import auth from './reducers/auth';
import review from './reducers/review';
import clients from './reducers/clients';
import branches from './reducers/branches';
import employees from './reducers/employees';
import services from './reducers/services';
import mails from './reducers/mails';
import loader from './reducers/loader';

export default combineReducers({
    auth,
    review,
    clients,
    branches,
    employees,
    services,
    mails,
    loader,
    notifications,
});
