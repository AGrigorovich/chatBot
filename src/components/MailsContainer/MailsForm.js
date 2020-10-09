import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { compose } from 'redux';

import {
    Grid,
    Checkbox,
    FormHelperText,
    FormControlLabel,
    withStyles,
    InputLabel,
} from '@material-ui/core';

import TextArea from '../TextArea/TextArea';
import AppButton from '../AppButton/AppButton';

const styles = (theme) => ({
    mainPageContainer: {
        width: '100%',
        color: theme.palette.gold,
    },
    textAreaWrapper: {
        display: 'flex',
    },
    errorMessage: {
        height: '2rem',
        fontSize: '1.25rem',
        color: theme.palette.red,
        margin: '0 1.5rem',
    },
    textAreaContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    checkBoxWrapper: {
        width: '35%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
    checkboxContainer: {
        backgroundColor: theme.palette.white,
        color: theme.palette.black,
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

const MailsForm = ({ classes, createMail }) => {
    const [textFieldValue, changeTextFieldValue] = useState('');
    const [isNeedMails, changeMailsNecessary] = useState(false);
    const [isNeedShares, changeSharesNecessary] = useState(false);
    const [dataErrors, changeDataErrors] = useState('');

    const resetStateValues = () => {
        changeTextFieldValue('');
        changeMailsNecessary(false);
        changeSharesNecessary(false);
    };

    const handleSendButtonClick = () => {
        if (!isNeedMails && !isNeedShares) {
            return changeDataErrors('Выберите пожалуйста тип рассылки');
        }
        const newData = { description: textFieldValue, isNeedMails, isNeedShares };
        resetStateValues();
        return createMail(newData);
    };

    return (
        <Grid className={classes.mainPageContainer}>
            <FormHelperText className={classes.errorMessage}>{dataErrors}</FormHelperText>
            <InputLabel>Создайте новую рассылку</InputLabel>
            <Grid className={classes.textAreaWrapper}>
                <Grid className={classes.textAreaContainer}>
                    <TextArea
                        name="mail"
                        textFieldValue={textFieldValue}
                        changeTextFieldValue={(event) => changeTextFieldValue(event.target.value)}
                    />
                    <AppButton
                        buttonName="Отправить"
                        handleClick={handleSendButtonClick}
                        disabled={!textFieldValue || !!dataErrors}
                    />
                </Grid>
                <Grid className={classes.checkBoxWrapper}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isNeedMails}
                                onChange={() => {
                                    changeDataErrors('');
                                    changeMailsNecessary(!isNeedMails);
                                }}
                                classes={{
                                    root: classes.checkboxRoot,
                                    checked: classes.checked,
                                }}
                                color="default"
                            />
                        }
                        label="Рассылка"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={isNeedShares}
                                onChange={() => {
                                    changeDataErrors('');
                                    changeSharesNecessary(!isNeedShares);
                                }}
                                classes={{
                                    root: classes.checkboxRoot,
                                    checked: classes.checked,
                                }}
                                color="default"
                            />
                        }
                        label="Акция"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

MailsForm.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    createMail: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(MailsForm);
