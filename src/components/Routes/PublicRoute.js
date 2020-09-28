import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import PropTypes from 'prop-types';

import endpoints from '../../services/routeEndpoints';
import localStorage from '../../services/localStorage';

const PublicRoute = ({ component: Component, ...rest }) => {
    const currentUser = localStorage.getItem('currentUser');
    return (
        <Route
            {...rest}
            render={(props) =>
                currentUser ? <Redirect to={endpoints.branch} /> : <Component {...props} />
            }
        />
    );
};

PublicRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

export default PublicRoute;
