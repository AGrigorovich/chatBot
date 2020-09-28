import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    startGetClientsList,
    startEditClient,
    startCreateClient,
    startDeleteClient,
} from '../../store/actions/clients';

import Clients from './Clients';

const ClientsContainer = ({
    getClientsList,
    createClient,
    editClient,
    deleteClient,
    arrayOfClients = [],
}) => {
    useEffect(() => {
        getClientsList();
    }, [getClientsList]);

    return (
        <Clients
            createClient={createClient}
            editClient={editClient}
            arrayOfClients={arrayOfClients}
            deleteClient={deleteClient}
        />
    );
};

ClientsContainer.propTypes = {
    getClientsList: PropTypes.func.isRequired,
    createClient: PropTypes.func.isRequired,
    editClient: PropTypes.func.isRequired,
    deleteClient: PropTypes.func.isRequired,
    arrayOfClients: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
    arrayOfClients: state.clients.arrayOfClients,
});

const mapDispatchToProps = {
    getClientsList: startGetClientsList,
    createClient: startCreateClient,
    editClient: startEditClient,
    deleteClient: startDeleteClient,
};

export default compose(connect(mapStateToProps, mapDispatchToProps))(ClientsContainer);
