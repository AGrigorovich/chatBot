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
        width: '100%%',
        maxWidth: '50rem',
        overflowY: 'auto',
    },
    branchListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
    },
    branchDataContainer: {
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

const ListOfBranches = ({ classes, changeSelectedBranch, arrayOfBranches, deleteBranch }) => (
    <Grid className={classes.root}>
        {arrayOfBranches.map(({ id, name, address }) => (
            <Grid className={classes.branchListItem} key={id}>
                <Grid className={classes.branchDataContainer}>
                    <Grid>{name}</Grid>
                    <Grid>{address}</Grid>
                </Grid>
                <Grid className={classes.iconContainer}>
                    <Edit
                        className={classes.icon}
                        onClick={() => changeSelectedBranch({ id, name, address })}
                    />
                    <DeleteOutline className={classes.icon} onClick={() => deleteBranch(id)} />
                </Grid>
            </Grid>
        ))}
    </Grid>
);

ListOfBranches.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    changeSelectedBranch: PropTypes.func.isRequired,
    arrayOfBranches: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteBranch: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(ListOfBranches);
