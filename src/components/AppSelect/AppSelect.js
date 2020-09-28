import React from 'react';

import Select from 'react-select';
import { withStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

const styles = (theme) => ({
    appSelect: {
        width: '100%',
        margin: '1rem 0',
        color: theme.palette.black,
    },
});

const AppSelect = ({ classes, value, onChange, options }) => (
    <Select
        value={value}
        onChange={onChange}
        options={options}
        isMulti
        className={classes.appSelect}
    />
);

AppSelect.defaultProps = {
    value: null,
};
AppSelect.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    value: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withStyles(styles)(AppSelect);
