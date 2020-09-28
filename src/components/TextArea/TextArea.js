import { Input } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({ name, textFieldValue, changeTextFieldValue, disabled, placeholder }) => {
    return (
        <Input
            name={name}
            type="text"
            fullWidth
            multiline
            onChange={changeTextFieldValue}
            value={textFieldValue}
            rows={4}
            rowsMax={20}
            inputProps={{ maxLength: 512 }}
            disabled={disabled}
            placeholder={placeholder}
            disableUnderline
        />
    );
};

TextArea.defaultProps = {
    disabled: false,
    placeholder: '',
    changeTextFieldValue: null,
};

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    textFieldValue: PropTypes.string.isRequired,
    changeTextFieldValue: PropTypes.func,
    disabled: PropTypes.bool,
    placeholder: PropTypes.string,
};

export default TextArea;
