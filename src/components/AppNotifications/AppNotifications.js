import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { compose } from 'redux';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 2500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
};

const AppNotifications = ({ notificationText, notificationErrorText }) => {
    useEffect(() => {
        if (notificationText) {
            toast.success(notificationText, toastOptions);
        } else if (notificationErrorText) {
            toast.error(notificationErrorText, toastOptions);
        }
    }, [notificationText, notificationErrorText]);

    return <ToastContainer />;
};

AppNotifications.propTypes = {
    notificationText: PropTypes.string.isRequired,
    notificationErrorText: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
    notificationText: state.notifications.notificationText,
    notificationErrorText: state.notifications.notificationErrorText,
});
export default compose(connect(mapStateToProps, null))(AppNotifications);
