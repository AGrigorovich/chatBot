import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        overflowY: 'auto',
        padding: '.5rem .75rem .5rem .5rem',
    },
    emailListItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: '1rem 0',
    },
    dates: {
        display: 'flex',
        alignSelf: 'flex-end',
        padding: '.5rem 0',
    },
};

const ListOfMails = ({ classes, arrayOfMails }) => (
    <Grid className={classes.root}>
        {arrayOfMails.map((mail) => (
            <Grid className={classes.emailListItem} key={mail.id}>
                <Grid className={classes.dates}>12/12/2020</Grid>
                <Grid>{mail.remainderText}</Grid>
            </Grid>
        ))}
    </Grid>
);

ListOfMails.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    arrayOfMails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ListOfMails);
