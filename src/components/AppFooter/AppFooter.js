import React from 'react';
import PropTypes from 'prop-types';

import { Grid, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    footerContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: '2rem',
        backgroundColor: theme.palette.silver,
        position: 'fixed',
        left: 0,
        bottom: 0,
        color: theme.palette.black,
        zIndex: 10,
    },
});

const AppFooter = ({ classes }) => (
    <Grid className={classes.footerContainer}>
        <Grid>000-000-000</Grid>
        <Grid>test@mail.com</Grid>
    </Grid>
);

AppFooter.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default withStyles(styles)(AppFooter);
