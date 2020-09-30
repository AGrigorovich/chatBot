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
    servicesListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
    },
    servicesDataContainer: {
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

const ListOfServices = ({
    classes,
    changeSelectedService,
    deleteService,
    arrayOfServices,
    arrayOfBranches,
}) => {
    const detectBranchesNames = (existingBranches = []) => {
        const serviceBranches = arrayOfBranches.filter((branch) =>
            existingBranches.includes(branch.value)
        );
        return serviceBranches.map(({ label }) => label).join(', ');
    };

    return (
        <Grid className={classes.root}>
            {arrayOfServices.map((service) => (
                <Grid className={classes.servicesListItem} key={service.id}>
                    <Grid className={classes.servicesDataContainer}>
                        <Grid>{service.serviceName}</Grid>
                        <Grid>{service.price}</Grid>
                        <Grid>{detectBranchesNames(service.branches)}</Grid>
                    </Grid>
                    <Grid className={classes.iconContainer}>
                        <Edit
                            className={classes.icon}
                            onClick={() => changeSelectedService(service)}
                        />
                        <DeleteOutline
                            className={classes.icon}
                            onClick={() => deleteService(service.id)}
                        />
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

ListOfServices.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    changeSelectedService: PropTypes.func.isRequired,
    deleteService: PropTypes.func.isRequired,
    arrayOfServices: PropTypes.arrayOf(PropTypes.object).isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ListOfServices);
