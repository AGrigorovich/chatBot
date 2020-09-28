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
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'justify',
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
        {arrayOfMails.map(({ id, publicDate, description }) => (
            <Grid className={classes.emailListItem} key={id}>
                <Grid className={classes.dates}>{publicDate}</Grid>
                <Grid>{description}</Grid>
            </Grid>
        ))}
    </Grid>
);

ListOfMails.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    arrayOfMails: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ListOfMails);
