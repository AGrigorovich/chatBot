import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';
import { startLoginIn } from '../../store/actions/auth';

import LogIn from './LogIn';

const styles = {
    authContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
};

const AuthContainer = ({ classes, userStartLogin }) => {
    return (
        <Grid className={classes.authContainer}>
            <LogIn userStartLogin={userStartLogin} />
        </Grid>
    );
};

AuthContainer.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    userStartLogin: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
    isUserSignInFailed: state.auth.isUserSignInFailed,
});

const mapDispatchToProps = {
    userStartLogin: startLoginIn,
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles)
)(AuthContainer);
