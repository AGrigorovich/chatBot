import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Input, InputLabel, withStyles } from '@material-ui/core';

const styles = {
    mainContainer: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        margin: '1.5rem',
    },
    inputWithButtonContainer: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
        marginBottom: '1rem',
    },
    inputRoot: {
        width: '100%',
        minWidth: '15rem',
    },
};

const InputFieldWithLabel = ({
    classes,
    name,
    type,
    labelTitle,
    value,
    onChangeFunction,
    placeholder,
    maxLength,
}) => (
    <>
        {labelTitle && <InputLabel>{labelTitle}</InputLabel>}
        <Input
            autoComplete="off"
            type={type}
            name={name}
            value={value}
            onChange={onChangeFunction}
            placeholder={placeholder}
            classes={{ root: classes.inputRoot }}
            inputProps={{ maxLength }}
            disableUnderline
            fullWidth
        />
    </>
);

InputFieldWithLabel.defaultProps = {
    maxLength: 100,
    type: 'text',
};

InputFieldWithLabel.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    labelTitle: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    placeholder: PropTypes.string.isRequired,
    onChangeFunction: PropTypes.func.isRequired,
    maxLength: PropTypes.number,
};

export default compose(withStyles(styles))(InputFieldWithLabel);
