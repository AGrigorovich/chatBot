import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import endpoints from '../../services/routeEndpoints';
import localStorage from '../../services/localStorage';

const PrivateRoute = ({ component: Component, ...rest }) => {
    const currentUser = localStorage.getItem('currentUser');
    return (
        <Route
            {...rest}
            render={(props) =>
                currentUser ? <Component {...props} /> : <Redirect to={endpoints.root} />
            }
        />
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default PrivateRoute;
