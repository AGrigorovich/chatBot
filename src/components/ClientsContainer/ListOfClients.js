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
    clientsListItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem 0',
    },
    clientsDataContainer: {
        width: '100%',
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

const ListOfClients = ({ classes, changeSelectedClient, arrayOfClients, deleteClient }) => {
    return (
        <Grid className={classes.root}>
            {arrayOfClients.map((client) => (
                <Grid className={classes.clientsListItem} key={client.id}>
                    <Grid className={classes.clientsDataContainer}>
                        <Grid>{client.name}</Grid>
                        <Grid>{client.surname}</Grid>
                        <Grid>{client.comment}</Grid>
                        <Grid>{client.phoneNumber}</Grid>
                    </Grid>
                    <Grid className={classes.iconContainer}>
                        <Edit
                            className={classes.icon}
                            onClick={() => changeSelectedClient(client)}
                        />
                        <DeleteOutline
                            className={classes.icon}
                            onClick={() => deleteClient(client.id)}
                        />
                    </Grid>
                </Grid>
            ))}
        </Grid>
    );
};

ListOfClients.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    changeSelectedClient: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired,
    arrayOfClients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default compose(withStyles(styles))(ListOfClients);
