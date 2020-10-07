import React, { useState } from 'react';
import { Grid, InputLabel, withStyles } from '@material-ui/core';

import PropTypes from 'prop-types';

import MainMenu from '../MainMenu/MainMenu';
import AppFooter from '../AppFooter/AppFooter';
import TextArea from '../TextArea/TextArea';
import AppButton from '../AppButton/AppButton';

const styles = (theme) => ({
    supportContainer: {
        width: '65%',
        margin: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    sendButton: {
        width: '7rem',
        borderRadius: '.5rem',
        margin: '2.5rem 0',
        backgroundColor: theme.palette.gold,
        color: theme.palette.white,
        '&:hover': {
            backgroundColor: theme.palette.gold,
            opacity: '.7',
        },
        '&:disabled': {
            backgroundColor: theme.palette.white,
        },
    },
});

const Support = ({ classes, sendMailToSupport }) => {
    const [textFieldValue, changeTextFieldValue] = useState('');

    const handleSendButtonClick = () => {
        changeTextFieldValue('');
        sendMailToSupport(textFieldValue);
    };

    return (
        <>
            <MainMenu />
            <Grid className={classes.supportContainer}>
                <InputLabel>Написать в техподдержку</InputLabel>
                <TextArea
                    name="support"
                    textFieldValue={textFieldValue}
                    changeTextFieldValue={changeTextFieldValue}
                    placeholder="Опишите Вашу проблему и оставьте контактные данные"
                />
                <AppButton
                    buttonName="Отправить"
                    handleClick={handleSendButtonClick}
                    disabled={!textFieldValue}
                />
            </Grid>
            <AppFooter />
        </>
    );
};

Support.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    sendMailToSupport: PropTypes.func.isRequired,
};

export default withStyles(styles)(Support);
