import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import {
    Grid,
    Checkbox,
    Radio,
    FormHelperText,
    FormControlLabel,
    withStyles,
    InputLabel,
} from '@material-ui/core';

const styles = (theme) => ({
    rootContainer: {
        width: '100%',
        color: theme.palette.gold,
    },
    errorMessage: {
        height: '2rem',
        fontSize: '1.25rem',
        color: theme.palette.red,
        margin: '0 1.5rem',
    },
    checkBoxWrapper: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
    checkBox: {
        color: 'green',
    },
    checkboxRoot: {
        color: theme.palette.gold,
        padding: '.2rem',
    },
    checkboxChecked: {
        color: theme.palette.white,
    },
});

const EmployeeSetWorkingShcedule = ({ classes }) => {
    const [datErrors, changeDataErrors] = useState('');
    const [needToSelectDays, changeScheduleDates] = useState(false);
    const [needToSelectPattern, changeSchedulePatterns] = useState(false);

    return (
        <Grid className={classes.rootContainer}>
            <FormHelperText className={classes.errorMessage}>{datErrors}</FormHelperText>
            <InputLabel>Выберите рабочие дни сотрудника</InputLabel>
            <FormControlLabel
                control={
                    <Radio
                        checked={needToSelectDays}
                        onChange={() => {
                            changeScheduleDates(!needToSelectDays);
                            changeSchedulePatterns(false);
                            changeDataErrors('');
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
            <Grid>
                {needToSelectDays && (
                    <Grid className={classes.checkBoxWrapper}>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked
                                    onChange={() => {
                                        changeDataErrors('');
                                    }}
                                    classes={{
                                        root: classes.checkboxRoot,
                                        checked: classes.checked,
                                    }}
                                    color="default"
                                />
                            }
                            label="ПН"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={false}
                                    onChange={() => {
                                        changeDataErrors('');
                                    }}
                                    classes={{
                                        root: classes.checkboxRoot,
                                        checked: classes.checked,
                                    }}
                                    color="default"
                                />
                            }
                            label="ВТ"
                        />
                    </Grid>
                )}
                <Grid>
                    <FormControlLabel
                        control={
                            <Radio
                                checked={needToSelectPattern}
                                onChange={() => {
                                    changeSchedulePatterns(!needToSelectPattern);
                                    changeScheduleDates(false);
                                    changeDataErrors('');
                                }}
                                classes={{
                                    root: classes.checkboxRoot,
                                    checked: classes.checked,
                                }}
                                color="default"
                            />
                        }
                        label="Выберите периоды"
                    />
                    <Grid>{needToSelectPattern && 'Schedule'}</Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

EmployeeSetWorkingShcedule.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default compose(withStyles(styles))(EmployeeSetWorkingShcedule);
