import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import MainPageMenu from '../MainPageMenu/MainPageMenu';
import MailsForm from './MailsForm';
import ListOfMails from './ListOfMails';

const styles = {
    pageContainer: {
        display: 'flex',
        height: 'calc(100% - 4rem)',
    },
    container: {
        width: '100%',
        maxWidth: '50rem',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
};

const Mails = ({ classes, arrayOfMails, createMail }) => (
    <>
        <MainMenu />
        <Grid className={classes.pageContainer}>
            <MainPageMenu />
            <Grid className={classes.container}>
                <MailsForm createMail={createMail} />
                <ListOfMails arrayOfMails={arrayOfMails} />
            </Grid>
        </Grid>
    </>
);

Mails.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    arrayOfMails: PropTypes.arrayOf(PropTypes.object).isRequired,
    createMail: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(Mails);
