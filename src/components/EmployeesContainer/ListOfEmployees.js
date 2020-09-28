import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';
import { Edit, DeleteOutline } from '@material-ui/icons';

const styles = {
    root: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        maxWidth: '35rem',
        overflowY: 'auto',
        padding: '.5rem .75rem .5rem .5rem',
    },
    employeesListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
    },
    employeesDataContainer: {
        display: 'flex',
        flexDirection: 'column',
    },
    iconContainer: {
        display: 'flex',
    },
    icon: {
        marginLeft: '.5rem',
        '&:hover': {
            cursor: 'pointer',
        },
    },
};

const ListOfEmployees = ({
    classes,
    changeSelectedSelectedEmployee,
    deleteEmployee,
    arrayOfEmployees,
}) => (
    <Grid className={classes.root}>
        {arrayOfEmployees.map((employee) => (
            <Grid className={classes.employeesListItem} key={employee.id}>
                <Grid className={classes.employeesDataContainer}>
                    <Grid>{employee.name}</Grid>
                    <Grid>{employee.surname}</Grid>
                    <Grid>{employee.nickname}</Grid>
                    <Grid>{employee.salonEntity.name}</Grid>
                    <Grid>{employee.serviceTypeEntity.serviceName}</Grid>
                </Grid>
                <Grid className={classes.iconContainer}>
                    <Edit
                        className={classes.icon}
                        onClick={() => changeSelectedSelectedEmployee(employee)}
                    />
                    <DeleteOutline
                        className={classes.icon}
                        onClick={() => deleteEmployee(employee.id)}
                    />
                </Grid>
            </Grid>
        ))}
    </Grid>
);

ListOfEmployees.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    changeSelectedSelectedEmployee: PropTypes.func.isRequired,
    deleteEmployee: PropTypes.func.isRequired,
    arrayOfEmployees: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ListOfEmployees);
