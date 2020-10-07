import React from 'react';

import { Provider } from 'react-redux';

import { Router, Switch, Route } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import materialThemeStyles from './constants/materialThemeStyles';

import {
    AuthContainer,
    MailsContainer,
    BranchContainer,
    EmployeesContainer,
    ServicesContainer,
    ClientsContainer,
    CalendarContainer,
    ReviewsContainer,
    SupportContainer,
    PrivateRoute,
    PublicRoute,
    AppLoader,
    AppNotifications,
} from './components';

import endpoints from './services/routeEndpoints';

import configureStore from './store/store';
import history from './services/history';

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <ThemeProvider theme={materialThemeStyles}>
                <Router history={history}>
                    <Switch>
                        <PublicRoute exact path={endpoints.root} component={AuthContainer} />
                        <PrivateRoute exact path={endpoints.branch} component={BranchContainer} />
                        <PrivateRoute
                            exact
                            path={endpoints.employees}
                            component={EmployeesContainer}
                        />
                        <PrivateRoute
                            exact
                            path={endpoints.services}
                            component={ServicesContainer}
                        />
                        <PrivateRoute exact path={endpoints.clients} component={ClientsContainer} />
                        <PrivateRoute
                            exact
                            path={endpoints.calendar}
                            component={CalendarContainer}
                        />
                        <PrivateRoute exact path={endpoints.mails} component={MailsContainer} />
                        <PrivateRoute exact path={endpoints.reviews} component={ReviewsContainer} />
                        <PrivateRoute exact path={endpoints.support} component={SupportContainer} />
                        <Route
                            render={() => (
                                <div
                                    style={{
                                        color: '#FFFFFF',
                                        fontSize: '10rem',
                                        textAlign: 'center',
                                    }}
                                >
                                    404 page
                                </div>
                            )}
                        />
                    </Switch>
                </Router>
                <AppLoader />
                <AppNotifications />
            </ThemeProvider>
        </Provider>
    );
}
