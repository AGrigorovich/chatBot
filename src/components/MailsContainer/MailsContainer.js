import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { startGetMailsList, startCreateMail } from '../../store/actions/mails';

import Mails from './Mails';

const MailContainer = ({ getMailsList, createMail, arrayOfMails = [] }) => {
    useEffect(() => {
        getMailsList();
    }, [getMailsList]);

    return <Mails createMail={createMail} arrayOfMails={arrayOfMails} />;
};

MailContainer.propTypes = {
    getMailsList: PropTypes.func.isRequired,
    createMail: PropTypes.func.isRequired,
    arrayOfMails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfMails: state.mails.arrayOfMails,
});

const mapDispatchToProps = {
    getMailsList: startGetMailsList,
    createMail: startCreateMail,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(MailContainer);
