import React from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import { Grid, Checkbox, FormControlLabel, withStyles } from '@material-ui/core';

const styles = (theme) => ({
    rootContainer: {
        width: '100%',
        display: 'flex',
        color: theme.palette.gold,
    },
    checkBoxWrapper: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
    checkboxRoot: {
        color: theme.palette.gold,
        padding: '.2rem',
    },
    checkboxChecked: {
        color: theme.palette.white,
    },
});

const SelectDaysOfWeek = ({ classes }) => {
    return (
        <Grid className={classes.rootContainer}>
            <Grid className={classes.checkBoxWrapper}>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked
                            onChange={() => console.log('fff')}
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
                            onChange={() => console.log('fff')}
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
            )
        </Grid>
    );
};

SelectDaysOfWeek.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default compose(withStyles(styles))(SelectDaysOfWeek);
