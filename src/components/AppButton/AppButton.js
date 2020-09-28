import React from 'react';
import { Button, withStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const styles = (theme) => ({
    appButton: {
        width: '8.5rem',
        borderRadius: '.5rem',
        backgroundColor: theme.palette.gold,
        color: theme.palette.black,
        padding: '.25rem',
        '&:hover': {
            backgroundColor: theme.palette.gold,
            opacity: '.7',
        },
        '&:disabled': {
            backgroundColor: theme.palette.white,
        },
    },
});

const AppButton = ({ classes, buttonName, disabled, handleClick, propsMargin }) => (
    <Button
        variant="contained"
        className={classes.appButton}
        type="submit"
        onClick={handleClick}
        disabled={disabled}
        style={{ margin: propsMargin }}
    >
        {buttonName}
    </Button>
);

AppButton.defaultProps = {
    propsMargin: '2.5rem 0',
};

AppButton.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    buttonName: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    disabled: PropTypes.bool.isRequired,
    propsMargin: PropTypes.string,
};

export default withStyles(styles)(AppButton);
