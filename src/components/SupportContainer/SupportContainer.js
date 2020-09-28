import React from 'react';

import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Support from './Support';

import { startSendMailToSupport } from '../../store/actions/support';

const SupportContainer = ({ sendMailToSupport }) => {
    return <Support sendMailToSupport={sendMailToSupport} />;
};

SupportContainer.propTypes = {
    sendMailToSupport: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
    sendMailToSupport: startSendMailToSupport,
};

export default compose(connect(null, mapDispatchToProps))(SupportContainer);
