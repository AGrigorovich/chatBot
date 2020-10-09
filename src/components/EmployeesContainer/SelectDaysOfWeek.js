import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import { Grid, Checkbox, FormControlLabel, withStyles } from '@material-ui/core';

import dayOfWeekForSelect from '../../constants/dayOfWeekForSelect';

const styles = (theme) => ({
    rootContainer: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        color: theme.palette.gold,
    },
    checkboxRoot: {
        color: theme.palette.gold,
        padding: '.2rem',
    },
    checkboxChecked: {
        color: theme.palette.white,
    },
});

const SelectDaysOfWeek = ({
    classes,
    arrayOfEmployeeWorkingDays,
    changeArrayOfEmployeeWorkingDays,
}) => {
    const detectCheckedValues = (value) =>
        !!arrayOfEmployeeWorkingDays.find((item) => item === value);

    const selectNewDay = (newValue) => {
        const isValueAlreadySelect = arrayOfEmployeeWorkingDays.find((item) => item === newValue);
        let newValues;
        if (isValueAlreadySelect) {
            newValues = arrayOfEmployeeWorkingDays.filter((item) => item !== newValue);
        } else {
            newValues = [...arrayOfEmployeeWorkingDays, newValue];
        }
        changeArrayOfEmployeeWorkingDays(newValues);
    };
    return (
        <Grid className={classes.rootContainer}>
            {dayOfWeekForSelect.map(({ id, name, value }) => (
                <FormControlLabel
                    key={id}
                    control={
                        <Checkbox
                            checked={detectCheckedValues(value)}
                            onChange={() => selectNewDay(value)}
                            classes={{
                                root: classes.checkboxRoot,
                                checked: classes.checked,
                            }}
                            color="default"
                        />
                    }
                    label={name}
                />
            ))}
        </Grid>
    );
};

SelectDaysOfWeek.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    arrayOfEmployeeWorkingDays: PropTypes.arrayOf(PropTypes.string).isRequired,
    changeArrayOfEmployeeWorkingDays: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(SelectDaysOfWeek);
