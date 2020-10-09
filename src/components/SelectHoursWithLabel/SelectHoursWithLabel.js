import React from 'react';
import PropTypes from 'prop-types';

import Select from 'react-select';
import { Grid, InputLabel, withStyles } from '@material-ui/core';

import hours from '../../constants/hours';

const styles = (theme) => ({
    hoursContainer: {
        width: '47.5%',
        margin: '1rem 0',
        color: theme.palette.black,
    },
});

const SelectHoursWithLabel = ({ classes, selectedHours, changeSelectedHours, labelTitle }) => (
    <Grid className={classes.hoursContainer}>
        {labelTitle && <InputLabel>{labelTitle}</InputLabel>}
        <Select
            value={selectedHours}
            onChange={changeSelectedHours}
            options={hours}
            placeholder="Выберите время"
            isClearable
        />
    </Grid>
);

SelectHoursWithLabel.defaultProps = {
    selectedHours: null,
    labelTitle: '',
};

SelectHoursWithLabel.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    selectedHours: PropTypes.objectOf(PropTypes.string),
    changeSelectedHours: PropTypes.func.isRequired,
    labelTitle: PropTypes.string,
};

export default withStyles(styles)(SelectHoursWithLabel);
