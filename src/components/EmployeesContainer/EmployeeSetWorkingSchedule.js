import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import {
    Grid,
    FormHelperText,
    withStyles,
    InputLabel,
    FormControlLabel,
    Radio,
} from '@material-ui/core';

import SelectDaysOfWeek from './SelectDaysOfWeek';
import SelectWorkingPeriods from './SelectWorkingPeriods';

const styles = (theme) => ({
    rootContainer: {
        width: '100%',
        color: theme.palette.gold,
        display: 'flex',
        flexDirection: 'column',
    },
    selectedWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    checkboxRoot: {
        color: theme.palette.gold,
        padding: '.2rem',
    },
    checkboxChecked: {
        color: theme.palette.white,
    },
    itemsContainer: {
        backgroundColor: 'red',
        display: 'flex',
    },
});

const EmployeeSetWorkingSchedule = ({ classes }) => {
    const [datErrors, changeDataErrors] = useState('');
    const [needToSelectDays, changeScheduleDates] = useState(false);
    const [needToSelectPattern, changeSchedulePatterns] = useState(false);

    return (
        <Grid className={classes.rootContainer}>
            <FormHelperText className={classes.errorMessage}>{datErrors}</FormHelperText>
            <InputLabel>Выберите рабочие дни сотрудника</InputLabel>
            <Grid className={classes.selectedWrapper}>
                <FormControlLabel
                    control={
                        <Radio
                            checked={needToSelectDays}
                            onChange={() => {
                                changeScheduleDates(!needToSelectDays);
                                changeSchedulePatterns(false);
                            }}
                            classes={{
                                root: classes.checkboxRoot,
                                checked: classes.checked,
                            }}
                            color="default"
                        />
                    }
                    label="Выберите дни недели"
                />
                <FormControlLabel
                    control={
                        <Radio
                            checked={needToSelectPattern}
                            onChange={() => {
                                changeScheduleDates(false);
                                changeSchedulePatterns(!needToSelectPattern);
                            }}
                            classes={{
                                root: classes.checkboxRoot,
                                checked: classes.checked,
                            }}
                            color="default"
                        />
                    }
                    label="Выберите период"
                />
            </Grid>
            <Grid className={classes.itemsContainer}>
                {needToSelectDays && <SelectDaysOfWeek />}
                {needToSelectPattern && <SelectWorkingPeriods />}
            </Grid>
        </Grid>
    );
};

EmployeeSetWorkingSchedule.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default compose(withStyles(styles))(EmployeeSetWorkingSchedule);
