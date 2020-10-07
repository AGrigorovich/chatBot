import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { Grid, withStyles } from '@material-ui/core';

import MainMenu from '../MainMenu/MainMenu';
import AppFooter from '../AppFooter/AppFooter';
import MainPageMenu from '../MainPageMenu/MainPageMenu';
import ClientsForm from './ClientsForm';
import ListOfClients from './ListOfClients';

const styles = {
    pageContainer: {
        display: 'flex',
        height: 'calc(100% - 4rem)',
    },
    clientsContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '1.5rem',
    },
};

const Clients = ({ classes, arrayOfClients, createClient, editClient, deleteClient }) => {
    const [selectedClient, changeSelectedClient] = useState({});

    return (
        <>
            <MainMenu />
            <Grid className={classes.pageContainer}>
                <MainPageMenu />
                <Grid className={classes.clientsContainer}>
                    <ClientsForm
                        selectedClient={selectedClient}
                        editClient={editClient}
                        createClient={createClient}
                        changeSelectedClient={changeSelectedClient}
                    />
                    <ListOfClients
                        changeSelectedClient={changeSelectedClient}
                        arrayOfClients={arrayOfClients}
                        deleteClient={deleteClient}
                    />
                </Grid>
            </Grid>
            <AppFooter />
        </>
    );
};

Clients.propTypes = {
    classes: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    arrayOfClients: PropTypes.arrayOf(PropTypes.object).isRequired,
    createClient: PropTypes.func.isRequired,
    editClient: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired,
};

export default compose(withStyles(styles))(Clients);
